'use client'

import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import { Mail, Phone, AlertCircle, Loader2, XCircle, CheckCircle2, WifiOff, Timer, Edit3, RotateCcw } from 'lucide-react'
import { CountriesData } from '@/utils/countries'

type Props = {
    setState: React.Dispatch<React.SetStateAction<'password' | 'otp' | 'social' | 'forgot'>>
}

// Validation schemas
const emailOTPSchema = z.object({
    loginType: z.literal('email'),
    email: z
        .string()
        .min(1, 'Email is required')
        .email('Please enter a valid email address'),
    otp: z
        .string()
        .min(6, 'OTP must be 6 digits')
        .max(6, 'OTP must be 6 digits')
        .regex(/^\d{6}$/, 'OTP must contain only numbers'),
})

const phoneOTPSchema = z.object({
    loginType: z.literal('phone'),
    countryCode: z.string().min(1, 'Country code is required'),
    phone: z
        .string()
        .min(10, 'Phone number must be at least 10 digits')
        .regex(/^\d+$/, 'Phone number must contain only digits'),
    otp: z
        .string()
        .min(6, 'OTP must be 6 digits')
        .max(6, 'OTP must be 6 digits')
        .regex(/^\d{6}$/, 'OTP must contain only numbers'),
})

const otpLoginSchema = z.discriminatedUnion('loginType', [emailOTPSchema, phoneOTPSchema])

type OTPLoginFormData = z.infer<typeof otpLoginSchema>

// Error types for better error handling
interface LoginError {
    type: 'validation' | 'network' | 'auth' | 'server' | 'unknown'
    message: string
    field?: string
    code?: string
}

// Success message type
interface SuccessMessage {
    type: 'success'
    message: string
}

// OTP State
type OTPState = 'idle' | 'sending' | 'sent' | 'verifying' | 'verified' | 'expired'

function OTPLogin({ setState }: Props) {

    const [activeTab, setActiveTab] = useState<'email' | 'phone'>('email')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitError, setSubmitError] = useState<LoginError | null>(null)
    const [successMessage, setSuccessMessage] = useState<SuccessMessage | null>(null)
    const [isOnline, setIsOnline] = useState(typeof navigator !== 'undefined' ? navigator.onLine : true)

    // OTP specific states
    const [otpState, setOtpState] = useState<OTPState>('idle')
    const [countdown, setCountdown] = useState(0)
    const [canResend, setCanResend] = useState(false)

    // Network status monitoring
    useEffect(() => {
        const handleOnline = () => {
            setIsOnline(true)
            setSubmitError(null)
        }
        const handleOffline = () => {
            setIsOnline(false)
            setSubmitError({
                type: 'network',
                message: 'You are currently offline. Please check your internet connection.',
            })
        }

        if (typeof window !== 'undefined') {
            window.addEventListener('online', handleOnline)
            window.addEventListener('offline', handleOffline)

            return () => {
                window.removeEventListener('online', handleOnline)
                window.removeEventListener('offline', handleOffline)
            }
        }
    }, [])

    // Countdown timer for OTP resend
    useEffect(() => {
        let timer: NodeJS.Timeout | null = null

        if (countdown > 0) {
            timer = setTimeout(() => {
                setCountdown(countdown - 1)
            }, 1000)
        } else if (countdown === 0 && otpState === 'sent') {
            setCanResend(true)
        }

        return () => {
            if (timer) clearTimeout(timer)
        }
    }, [countdown, otpState])

    const {
        control,
        handleSubmit,
        formState: { errors, isValid, touchedFields },
        trigger,
        setValue,
        watch,
        reset,
        setError,
        clearErrors,
    } = useForm<OTPLoginFormData>({
        resolver: zodResolver(otpLoginSchema),
        mode: 'onBlur',
        reValidateMode: 'onChange',
        defaultValues: {
            loginType: 'email',
            email: '',
            countryCode: '+91',
            phone: '',
            otp: '',
        } as OTPLoginFormData,
    })

    const watchedValues = watch()

    // Handle tab change
    const handleTabChange = (value: string) => {
        const newTab = value as 'email' | 'phone'
        setActiveTab(newTab)
        setValue('loginType', newTab)

        // Clear previous errors and messages
        setSubmitError(null)
        setSuccessMessage(null)
        clearErrors()

        // Reset OTP state
        setOtpState('idle')
        setCountdown(0)
        setCanResend(false)

        // Reset form when switching tabs
        if (newTab === 'email') {
            setValue('phone', '')
            reset({
                loginType: 'email',
                email: '',
                otp: '',
            })
        } else {
            setValue('email', '')
            reset({
                loginType: 'phone',
                countryCode: '+91',
                phone: '',
                otp: '',
            })
        }

        // Trigger validation for the new tab
        setTimeout(() => trigger(), 100)
    }

    // Enhanced error handling function
    const handleError = (error: any): LoginError => {
        setSuccessMessage(null)

        if (!isOnline) {
            return {
                type: 'network',
                message: 'You are currently offline. Please check your internet connection.',
            }
        }

        if (error.name === 'TypeError' && error.message.includes('fetch')) {
            return {
                type: 'network',
                message: 'Network error. Please check your internet connection and try again.',
            }
        }

        if (error.response) {
            const status = error.response.status
            const data = error.response.data

            switch (status) {
                case 400:
                    return {
                        type: 'validation',
                        message: data?.message || 'Invalid input. Please check your details.',
                        field: data?.field,
                    }
                case 401:
                    return {
                        type: 'auth',
                        message: 'Invalid OTP. Please check the code and try again.',
                    }
                case 403:
                    return {
                        type: 'auth',
                        message: 'OTP expired. Please request a new code.',
                    }
                case 429:
                    return {
                        type: 'server',
                        message: 'Too many attempts. Please try again later.',
                    }
                case 500:
                    return {
                        type: 'server',
                        message: 'Server error. Please try again later.',
                    }
                default:
                    return {
                        type: 'server',
                        message: `Server error (${status}). Please try again later.`,
                    }
            }
        }

        if (error.issues) {
            const firstIssue = error.issues[0]
            return {
                type: 'validation',
                message: firstIssue.message,
                field: firstIssue.path.join('.'),
            }
        }

        return {
            type: 'unknown',
            message: error.message || 'An unexpected error occurred. Please try again.',
        }
    }

    // Check if contact method is valid for OTP generation
    const isContactValid = () => {
        if (activeTab === 'email') {
            return 'email' in watchedValues &&
                watchedValues.email &&
                watchedValues.email.trim() !== '' &&
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(watchedValues.email)
        } else {
            return 'countryCode' in watchedValues &&
                'phone' in watchedValues &&
                watchedValues.countryCode &&
                watchedValues.phone &&
                watchedValues.phone.trim() !== '' &&
                watchedValues.phone.length >= 10 &&
                /^\d+$/.test(watchedValues.phone)
        }
    }

    // Generate OTP
    const generateOTP = async () => {

        // Validate the contact method first
        const contactField = activeTab === 'email' ? 'email' : 'phone'
        const isValidContact = await trigger([contactField, 'loginType'] as any)

        if (!isValidContact) {
            setSubmitError({
                type: 'validation',
                message: `Please enter a valid ${activeTab === 'email' ? 'email address' : 'phone number'}.`,
            })
            return
        }

        setOtpState('sending')
        setSubmitError(null)
        setSuccessMessage(null)

        try {
            // console.log('Generating OTP for:', {
            //   type: activeTab,
            //   contact: activeTab === 'email' ?
            //     ('email' in watchedValues ? watchedValues.email : '') :
            //     ('phone' in watchedValues ? watchedValues.phone : '')
            // })

            if (activeTab === 'email') {
                const email = (watchedValues as { email: string }).email
            } else {
                const phone = (watchedValues as { phone: string }).phone

            }


        } catch (error) {
            const otpError = handleError(error)
            setSubmitError(otpError)
            setOtpState('idle')
        }
        finally {
            setIsSubmitting(false)

        }
    }

    // Resend OTP
    const resendOTP = async () => {
        setCanResend(false)
        setOtpState('sending')
        await generateOTP()
    }

    // Change contact method (email/phone)
    const changeContact = () => {
        setOtpState('idle')
        setCountdown(0)
        setCanResend(false)
        setValue('otp', '')
        setSubmitError(null)
        setSuccessMessage(null)
    }

    // Verify OTP and submit form
    const onSubmit = async (data: OTPLoginFormData) => {
        if (!isOnline) {
            setSubmitError({
                type: 'network',
                message: 'You are currently offline. Please check your internet connection.',
            })
            return
        }

        if (otpState !== 'sent') {
            setSubmitError({
                type: 'validation',
                message: 'Please generate OTP first.',
            })
            return
        }

        setIsSubmitting(true)
        setOtpState('verifying')
        setSubmitError(null)
        setSuccessMessage(null)

        try {


            if (watchedValues.loginType === "email") {
                const email = (watchedValues as { email: string }).email
            } else {
            }

        } catch (error) {
            const loginError = handleError(error)
            setSubmitError(loginError)
            setOtpState('sent') // Reset to sent state to allow retry

            // Set field-specific errors if applicable
            if (loginError.type === 'validation' && loginError.field) {
                if (loginError.field === 'email') {
                    setError('email', { message: loginError.message })
                } else if (loginError.field === 'phone') {
                    setError('phone', { message: loginError.message })
                } else if (loginError.field === 'otp') {
                    setError('otp', { message: loginError.message })
                }
            }

            console.error('OTP verification error:', loginError)
        } finally {
            setIsSubmitting(false)
        }
    }

    // Helper function to get error icon based on error type
    const getErrorIcon = (errorType: LoginError['type']) => {
        switch (errorType) {
            case 'network':
                return <WifiOff className="h-4 w-4" />
            case 'auth':
                return <XCircle className="h-4 w-4" />
            case 'validation':
                return <AlertCircle className="h-4 w-4" />
            default:
                return <AlertCircle className="h-4 w-4" />
        }
    }

    // Helper functions for error handling (simplified)
    const getFieldErrorClass = (fieldName: string) => {
        const hasError = activeTab === 'email' ?
            (fieldName === 'email' && 'email' in errors && 'email' in touchedFields && touchedFields.email) ||
            (fieldName === 'otp' && 'otp' in errors && 'otp' in touchedFields && touchedFields.otp) :
            (fieldName === 'phone' && 'phone' in errors && 'phone' in touchedFields && touchedFields.phone) ||
            (fieldName === 'otp' && 'otp' in errors && 'otp' in touchedFields && touchedFields.otp)

        return hasError ? 'border-destructive focus:border-destructive focus:ring-destructive/20' : ''
    }

    const shouldShowErrorIcon = (fieldName: string) => {
        return activeTab === 'email' ?
            (fieldName === 'email' && 'email' in errors && 'email' in touchedFields && touchedFields.email) ||
            (fieldName === 'otp' && 'otp' in errors && 'otp' in touchedFields && touchedFields.otp) :
            (fieldName === 'phone' && 'phone' in errors && 'phone' in touchedFields && touchedFields.phone) ||
            (fieldName === 'otp' && 'otp' in errors && 'otp' in touchedFields && touchedFields.otp)
    }

    const getErrorMessage = (fieldName: string) => {
        if (activeTab === 'email') {
            if (fieldName === 'email' && 'email' in errors) return errors.email?.message
            if (fieldName === 'otp' && 'otp' in errors) return errors.otp?.message
        } else {
            if (fieldName === 'phone' && 'phone' in errors) return errors.phone?.message
            if (fieldName === 'otp' && 'otp' in errors) return errors.otp?.message
        }
        return undefined
    }

    const shouldShowErrorAlert = (fieldName: string) => {
        return activeTab === 'email' ?
            (fieldName === 'email' && 'email' in errors && 'email' in touchedFields && touchedFields.email) ||
            (fieldName === 'otp' && 'otp' in errors && 'otp' in touchedFields && touchedFields.otp) :
            (fieldName === 'phone' && 'phone' in errors && 'phone' in touchedFields && touchedFields.phone) ||
            (fieldName === 'otp' && 'otp' in errors && 'otp' in touchedFields && touchedFields.otp)
    }

    // Get popular countries for quick selection
    const popularCountries = CountriesData.filter(country =>
        ['IN', 'US', 'GB', 'CA', 'AU'].includes(country.country_code)
    )

    const allCountries = CountriesData.sort((a, b) =>
        a.country_name.localeCompare(b.country_name)
    )

    // Get country flag emoji from country code
    const getCountryEmoji = (countryCode: string) => {
        const codePoints = countryCode
            .toUpperCase()
            .split('')
            .map(char => 127397 + char.charCodeAt(0))
        return String.fromCodePoint(...codePoints)
    }

    // Format countdown timer
    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins}:${secs.toString().padStart(2, '0')}`
    }

    return (
        <div className="w-full max-w-md mx-auto space-y-6">
            <Card className="premium-card border-border/50 shadow-lg">

                <CardContent className="space-y-6">
                    <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
                        <TabsList className="grid w-full grid-cols-2 h-12">
                            <TabsTrigger
                                value="email"
                                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2 cursor-pointer"
                            >
                                <Mail className="h-4 w-4" />
                                Email
                            </TabsTrigger>
                            <TabsTrigger
                                value="phone"
                                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2 cursor-pointer"
                            >
                                <Phone className="h-4 w-4" />
                                Phone
                            </TabsTrigger>
                        </TabsList>

                        {/* Global Error Message */}
                        {submitError && (
                            <Alert variant="destructive" className="mt-4">
                                {getErrorIcon(submitError.type)}
                                <AlertTitle>
                                    {submitError.type === 'network' ? 'Connection Error' :
                                        submitError.type === 'auth' ? 'Authentication Error' :
                                            submitError.type === 'validation' ? 'Validation Error' :
                                                submitError.type === 'server' ? 'Server Error' : 'Error'}
                                </AlertTitle>
                                <AlertDescription>
                                    {submitError.message}
                                </AlertDescription>
                            </Alert>
                        )}

                        {/* Success Message */}
                        {successMessage && (
                            <Alert className="mt-4 border-green-500 bg-green-50 dark:bg-green-950">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                <AlertTitle className="text-green-800 dark:text-green-200">Success</AlertTitle>
                                <AlertDescription className="text-green-700 dark:text-green-300">
                                    {successMessage.message}
                                </AlertDescription>
                            </Alert>
                        )}

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-6">
                            <TabsContent value="email" className="space-y-4 mt-0">
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-sm font-medium">
                                        Email Address
                                    </Label>
                                    <div className="flex gap-2">
                                        <Controller
                                            name="email"
                                            control={control}
                                            render={({ field }) => (
                                                <div className="relative flex-1">
                                                    <Input
                                                        {...field}
                                                        id="email"
                                                        type="email"
                                                        placeholder="Enter your email address"
                                                        className={`h-12 bg-input/50 border-border/60 focus:border-primary/60 focus:ring-primary/20 transition-colors ${getFieldErrorClass('email')}`}
                                                        disabled={otpState === 'sent' || otpState === 'verifying'}
                                                        onBlur={() => {
                                                            field.onBlur()
                                                            trigger('email')
                                                        }}
                                                        onChange={(e) => {
                                                            field.onChange(e)
                                                            if (activeTab === 'email' && 'email' in touchedFields && touchedFields.email && e.target.value) {
                                                                trigger('email')
                                                            }
                                                        }}
                                                    />
                                                    {shouldShowErrorIcon('email') && (
                                                        <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-destructive" />
                                                    )}
                                                </div>
                                            )}
                                        />
                                        {otpState === 'sent' && (
                                            <Button
                                                type="button"
                                                variant="outline"
                                                size="icon"
                                                className="h-12 w-12"
                                                onClick={changeContact}
                                                title="Change email"
                                            >
                                                <Edit3 className="h-4 w-4" />
                                            </Button>
                                        )}
                                    </div>
                                    {shouldShowErrorAlert('email') && (
                                        <Alert variant="destructive" className="py-2">
                                            <AlertCircle className="h-4 w-4" />
                                            <AlertDescription className="text-sm">
                                                {getErrorMessage('email')}
                                            </AlertDescription>
                                        </Alert>
                                    )}
                                </div>
                            </TabsContent>

                            <TabsContent value="phone" className="space-y-4 mt-0">
                                <div className="space-y-2">
                                    <Label htmlFor="phone" className="text-sm font-medium">
                                        Phone Number
                                    </Label>
                                    <div className="flex gap-2">
                                        <div className="flex flex-1 gap-2">
                                            <Controller
                                                name="countryCode"
                                                control={control}
                                                render={({ field }) => (
                                                    <Select value={field.value} onValueChange={field.onChange}>
                                                        <SelectTrigger size='default' className="w-32 bg-input/50 border-border/60 focus:border-primary/60 py-0 h-12">
                                                            <SelectValue className='h-12' />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <div className="border-t mt-1 pt-1">
                                                                <div className="font-medium text-xs text-muted-foreground px-2 py-1">
                                                                    All Countries
                                                                </div>
                                                                {allCountries.map((country) => (
                                                                    <SelectItem key={country.country_name} value={country.code || '+1'}>
                                                                        <div className="flex items-center gap-2">
                                                                            <img
                                                                                src={country.flag}
                                                                                alt={country.country_name}
                                                                                className="w-4 h-4 object-cover rounded-sm"
                                                                                onError={(e) => {
                                                                                    const target = e.target as HTMLImageElement;
                                                                                    target.style.display = 'none';
                                                                                }}
                                                                            />
                                                                            <span className="text-xs">{country.country_name} {country.code}</span>
                                                                        </div>
                                                                    </SelectItem>
                                                                ))}
                                                            </div>
                                                        </SelectContent>
                                                    </Select>
                                                )}
                                            />
                                            <Controller
                                                name="phone"
                                                control={control}
                                                render={({ field }) => (
                                                    <div className="relative flex-1">
                                                        <Input
                                                            {...field}
                                                            id="phone"
                                                            type="tel"
                                                            placeholder="Enter phone number"
                                                            className={`h-12 bg-input/50 border-border/60 focus:border-primary/60 focus:ring-primary/20 transition-colors ${getFieldErrorClass('phone')}`}
                                                            disabled={otpState === 'sent' || otpState === 'verifying'}
                                                            onBlur={() => {
                                                                field.onBlur()
                                                                trigger('phone')
                                                            }}
                                                            onChange={(e) => {
                                                                // Only allow digits
                                                                const value = e.target.value.replace(/\D/g, '')
                                                                field.onChange(value)
                                                                if (activeTab === 'phone' && 'phone' in touchedFields && touchedFields.phone && value) {
                                                                    trigger('phone')
                                                                }
                                                            }}
                                                        />
                                                        {shouldShowErrorIcon('phone') && (
                                                            <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-destructive" />
                                                        )}
                                                    </div>
                                                )}
                                            />
                                        </div>
                                        {otpState === 'sent' && (
                                            <Button
                                                type="button"
                                                variant="outline"
                                                size="icon"
                                                className="h-12 w-12"
                                                onClick={changeContact}
                                                title="Change phone number"
                                            >
                                                <Edit3 className="h-4 w-4" />
                                            </Button>
                                        )}
                                    </div>
                                    {shouldShowErrorAlert('phone') && (
                                        <Alert variant="destructive" className="py-2">
                                            <AlertCircle className="h-4 w-4" />
                                            <AlertDescription className="text-sm">
                                                {getErrorMessage('phone')}
                                            </AlertDescription>
                                        </Alert>
                                    )}
                                </div>
                            </TabsContent>

                            {/* Generate OTP Button */}
                            {(otpState === 'idle' || otpState === 'sending') && (
                                <Button
                                    type="button"
                                    onClick={generateOTP}
                                    disabled={!isContactValid() || !isOnline || otpState === 'sending'}
                                    className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors"
                                >
                                    {otpState === 'sending' ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Sending OTP...
                                        </>
                                    ) : (
                                        <>
                                            Generate OTP
                                        </>
                                    )}
                                </Button>
                            )}

                            {/* OTP Input Section */}
                            {(otpState === 'sent' || otpState === 'verifying' || otpState === 'verified') && (
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="otp" className="text-sm font-medium">
                                            Enter OTP
                                        </Label>
                                        <Controller
                                            name="otp"
                                            control={control}
                                            render={({ field }) => (
                                                <div className="space-y-2 flex justify-center flex-col items-center">
                                                    <InputOTP
                                                        maxLength={6}
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                        onComplete={() => trigger('otp')}
                                                        disabled={otpState === 'verifying'}
                                                    >
                                                        <InputOTPGroup className="gap-2">
                                                            {[0, 1, 2, 3, 4, 5].map((index) => (
                                                                <InputOTPSlot
                                                                    key={index}
                                                                    index={index}
                                                                    className={`h-12 w-12 text-lg font-semibold border-2 ${shouldShowErrorIcon('otp')
                                                                        ? 'border-destructive focus:border-destructive'
                                                                        : 'border-border/60 focus:border-primary/60'
                                                                        }`}
                                                                />
                                                            ))}
                                                        </InputOTPGroup>
                                                    </InputOTP>
                                                    <p className="text-sm text-muted-foreground text-center">
                                                        Enter the 6-digit code sent to your {activeTab === 'email' ? 'email' : 'phone'}
                                                    </p>
                                                </div>
                                            )}
                                        />
                                        {shouldShowErrorAlert('otp') && (
                                            <Alert variant="destructive" className="py-2">
                                                <AlertCircle className="h-4 w-4" />
                                                <AlertDescription className="text-sm">
                                                    {getErrorMessage('otp')}
                                                </AlertDescription>
                                            </Alert>
                                        )}
                                    </div>

                                    {/* Timer and Resend Section */}
                                    <div className="flex items-center justify-between text-sm">
                                        {countdown > 0 ? (
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <Timer className="h-4 w-4" />
                                                <span>Resend OTP in {formatTime(countdown)}</span>
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-2">
                                                <span className="text-muted-foreground">Didn't receive the code?</span>
                                                <Button
                                                    type="button"
                                                    variant="link"
                                                    size="sm"
                                                    onClick={resendOTP}
                                                    disabled={!canResend || otpState === 'verifying'}
                                                    className="h-auto p-0 text-primary hover:text-primary/80"
                                                >
                                                    <RotateCcw className="mr-1 h-3 w-3" />
                                                    Resend OTP
                                                </Button>
                                            </div>
                                        )}
                                    </div>

                                    {/* Verify OTP Button */}
                                    <Button
                                        type="submit"
                                        disabled={!isValid || !isOnline || isSubmitting || otpState === 'verifying' || !watchedValues.otp || watchedValues.otp.length !== 6}
                                        className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors"
                                    >
                                        {isSubmitting || otpState === 'verifying' ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Verifying OTP...
                                            </>
                                        ) : otpState === 'verified' ? (
                                            <>
                                                Verified!
                                            </>
                                        ) : (
                                            <>
                                                Verify & Sign In
                                            </>
                                        )}
                                    </Button>
                                </div>
                            )}
                        </form>
                    </Tabs>

                    {/* Switch to Password Login */}
                    <div className="text-center">
                        <p className="text-sm text-muted-foreground">
                            Prefer password login?{' '}
                            <Button
                                type="button"
                                variant="link"
                                size="sm"
                                onClick={() => setState('password')}
                                className="h-auto p-0 text-primary hover:text-primary/80 font-medium"
                            >
                                Sign in with password
                            </Button>
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default OTPLogin