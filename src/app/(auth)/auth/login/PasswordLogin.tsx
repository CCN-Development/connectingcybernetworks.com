'use client'

import React, { useState } from 'react'
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
import { Eye, EyeOff, Mail, Phone, AlertCircle, Loader2, XCircle, CheckCircle2, WifiOff } from 'lucide-react'
import { CountriesData } from '@/utils/countries'
import { useRouter } from 'next/navigation'

type Props = {
    setState: React.Dispatch<React.SetStateAction<'password' | 'otp' | 'social' | 'forgot'>>
}

// Validation schemas
const emailSchema = z.object({
    loginType: z.literal('email'),
    email: z
        .string()
        .min(1, 'Email is required')
        .email('Please enter a valid email address'),
    password: z
        .string()
        .min(1, 'Password cannot be empty')
})

const phoneSchema = z.object({
    loginType: z.literal('phone'),
    countryCode: z.string().min(1, 'Country code is required'),
    phone: z
        .string()
        .min(10, 'Phone number must be at least 10 digits')
        .max(15, 'Phone number must be at most 15 digits')
        .regex(/^\d+$/, 'Phone number must contain only digits'),
    password: z
        .string()
        .min(1, 'Password cannot be empty')
})

const loginSchema = z.discriminatedUnion('loginType', [emailSchema, phoneSchema])

type LoginFormData = z.infer<typeof loginSchema>

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

function PasswordLogin({ setState }: Props) {
    const [activeTab, setActiveTab] = useState<'email' | 'phone'>('email')
    const [showPassword, setShowPassword] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitError, setSubmitError] = useState<LoginError | null>(null)
    const [successMessage, setSuccessMessage] = useState<SuccessMessage | null>(null)
    const [isOnline, setIsOnline] = useState(true)
    const router = useRouter()

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
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        mode: 'onBlur', // Changed to onBlur for better UX
        reValidateMode: 'onChange', // Re-validate on change after first blur
        defaultValues: {
            loginType: 'email',
            email: '',
            phone: '',
            password: '',
        } as LoginFormData,
    })

    const watchedValues = watch()

    // Handle tab change
    const handleTabChange = (value: string) => {
        const newTab = value as 'email' | 'phone'
        setActiveTab(newTab)
        setValue('loginType', newTab)
        setSubmitError(null)
        setSuccessMessage(null)
        clearErrors()

        // Reset form when switching tabs
        if (newTab === 'email') {
            setValue('phone', '')
            reset({
                loginType: 'email',
                email: '',
                password: '',
            })
        } else {
            setValue('email', '')
            reset({
                loginType: 'phone',
                countryCode: '+91',
                phone: '',
                password: '',
            })
        }

        // Trigger validation for the new tab
        setTimeout(() => trigger(), 100)
    }

    // Enhanced error handling function
    const handleError = (error: any): LoginError => {
        // Clear any existing success messages
        setSuccessMessage(null)

        // Network errors
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

        // Server response errors
        if (error.response) {
            const status = error.response.status
            const data = error.response.data

            switch (status) {
                case 400:
                    return {
                        type: 'validation',
                        message: data?.message || 'Invalid input. Please check your credentials.',
                        field: data?.field,
                    }
                case 401:
                    return {
                        type: 'auth',
                        message: 'Invalid credentials. Please check your email/phone and password.',
                    }
                case 403:
                    return {
                        type: 'auth',
                        message: 'Account locked or suspended. Please contact support.',
                    }
                case 429:
                    return {
                        type: 'server',
                        message: 'Too many login attempts. Please try again later.',
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

        // Zod validation errors
        if (error.issues) {
            const firstIssue = error.issues[0]
            return {
                type: 'validation',
                message: firstIssue.message,
                field: firstIssue.path.join('.'),
            }
        }

        // Generic errors
        return {
            type: 'unknown',
            message: error.message || 'An unexpected error occurred. Please try again.',
        }
    }

    // Form submission with comprehensive error handling
    const onSubmit = async (data: LoginFormData) => {
        if (!isOnline) {
            setSubmitError({
                type: 'network',
                message: 'You are currently offline. Please check your internet connection.',
            })
            return
        }

        setIsSubmitting(true)
        setSubmitError(null)
        setSuccessMessage(null)

        try {
            console.log('Login attempt:', data)
            if (data.loginType == "email") {
            } else {
            }
        } catch (error) {
            const loginError = handleError(error)
            setSubmitError(loginError)
            if (loginError.type === 'validation' && loginError.field) {
                if (loginError.field === 'email') {
                    setError('email', { message: loginError.message })
                } else if (loginError.field === 'phone') {
                    setError('phone', { message: loginError.message })
                } else if (loginError.field === 'password') {
                    setError('password', { message: loginError.message })
                }
            }

            console.error('Login error:', loginError)
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

    // Helper function to check if a field has errors (simplified)
    const getFieldErrorClass = (fieldName: string) => {
        const hasError = activeTab === 'email' ?
            (fieldName === 'email' && 'email' in errors && 'email' in touchedFields && touchedFields.email) ||
            (fieldName === 'password' && 'password' in errors && 'password' in touchedFields && touchedFields.password) :
            (fieldName === 'phone' && 'phone' in errors && 'phone' in touchedFields && touchedFields.phone) ||
            (fieldName === 'password' && 'password' in errors && 'password' in touchedFields && touchedFields.password)

        return hasError ? 'border-destructive focus:border-destructive focus:ring-destructive/20' : ''
    }

    // Helper function to show error icon
    const shouldShowErrorIcon = (fieldName: string) => {
        return activeTab === 'email' ?
            (fieldName === 'email' && 'email' in errors && 'email' in touchedFields && touchedFields.email) ||
            (fieldName === 'password' && 'password' in errors && 'password' in touchedFields && touchedFields.password) :
            (fieldName === 'phone' && 'phone' in errors && 'phone' in touchedFields && touchedFields.phone) ||
            (fieldName === 'password' && 'password' in errors && 'password' in touchedFields && touchedFields.password)
    }

    // Helper function to get error message
    const getErrorMessage = (fieldName: string) => {
        if (activeTab === 'email') {
            if (fieldName === 'email' && 'email' in errors) return errors.email?.message
            if (fieldName === 'password' && 'password' in errors) return errors.password?.message
        } else {
            if (fieldName === 'phone' && 'phone' in errors) return errors.phone?.message
            if (fieldName === 'password' && 'password' in errors) return errors.password?.message
        }
        return undefined
    }

    // Helper function to show error alert
    const shouldShowErrorAlert = (fieldName: string) => {
        return activeTab === 'email' ?
            (fieldName === 'email' && 'email' in errors && 'email' in touchedFields && touchedFields.email) ||
            (fieldName === 'password' && 'password' in errors && 'password' in touchedFields && touchedFields.password) :
            (fieldName === 'phone' && 'phone' in errors && 'phone' in touchedFields && touchedFields.phone) ||
            (fieldName === 'password' && 'password' in errors && 'password' in touchedFields && touchedFields.password)
    }

    const popularCountries = CountriesData.filter(country =>
        ['IN', 'US', 'GB', 'CA', 'AU'].includes(country.country_code)
    )

    const allCountries = CountriesData.sort((a, b) =>
        a.country_name.localeCompare(b.country_name)
    )

    return (
        <div className="w-full max-w-md mx-auto space-y-6">
            <Card className="premium-card border-border/50 shadow-lg">

                <CardContent className="space-y-6">
                    <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
                        <TabsList className="grid w-full grid-cols-2 bg-accent    cursor-pointer">
                            <TabsTrigger
                                value="email"
                                className="flex items-center gap-2 data-[state=active]:bg-primary  data-[state=active]:text-primary-foreground py-2 cursor-pointer"
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
                                    <Controller
                                        name="email"
                                        control={control}
                                        render={({ field }) => (
                                            <div className="relative">
                                                <Input
                                                    {...field}
                                                    id="email"
                                                    type="email"
                                                    name='email'
                                                    placeholder="Enter your email address"
                                                    className={`h-12 bg-input/50 border-border/60 focus:border-primary/60 focus:ring-primary/20 transition-colors ${getFieldErrorClass('email')}`}
                                                    onBlur={() => {
                                                        field.onBlur()
                                                        trigger('email')
                                                    }}
                                                    onChange={(e) => {
                                                        field.onChange(e)
                                                        // If field was previously touched and has value, validate on change
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
                                    <div className="flex gap-3 items-center">
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
                                                            {allCountries.map((country, index) => country.code && (
                                                                <SelectItem key={index} value={country.code}>
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
                                                        name='phone'
                                                        placeholder="Enter phone number"
                                                        className={`h-12 bg-input/50 border-border/60 focus:border-primary/60 focus:ring-primary/20 transition-colors ${getFieldErrorClass('phone')}`}
                                                        onBlur={() => {
                                                            field.onBlur()
                                                            trigger('phone')
                                                        }}
                                                        onChange={(e) => {
                                                            field.onChange(e)
                                                            // If field was previously touched and has value, validate on change
                                                            if (activeTab === 'phone' && 'phone' in touchedFields && touchedFields.phone && e.target.value) {
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

                            {/* Password field - same for both tabs */}
                            <div className="space-y-2">
                                <Label htmlFor="password" className="text-sm font-medium">
                                    Password
                                </Label>
                                <Controller
                                    name="password"
                                    control={control}
                                    render={({ field }) => (
                                        <div className="relative">
                                            <Input
                                                {...field}
                                                id="password"
                                                name='password'
                                                type={showPassword ? 'text' : 'password'}
                                                placeholder="Enter your password"
                                                className={`h-12 bg-input/50 border-border/60 focus:border-primary/60 focus:ring-primary/20 pr-12 transition-colors ${getFieldErrorClass('password')}`}
                                                onBlur={() => {
                                                    field.onBlur()
                                                    trigger('password')
                                                }}
                                                onChange={(e) => {
                                                    field.onChange(e)
                                                    // If field was previously touched and has value, validate on change
                                                    if ('password' in touchedFields && touchedFields.password && e.target.value) {
                                                        trigger('password')
                                                    }
                                                }}
                                            />
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="icon"
                                                className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 hover:bg-transparent"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? (
                                                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                                                ) : (
                                                    <Eye className="h-4 w-4 text-muted-foreground" />
                                                )}
                                            </Button>
                                            {shouldShowErrorIcon('password') && (
                                                <AlertCircle className="absolute right-12 top-1/2 -translate-y-1/2 h-4 w-4 text-destructive" />
                                            )}
                                        </div>
                                    )}
                                />
                                {shouldShowErrorAlert('password') && (
                                    <Alert variant="destructive" className="py-2">
                                        <AlertCircle className="h-4 w-4" />
                                        <AlertDescription className="text-sm">
                                            {getErrorMessage('password')}
                                        </AlertDescription>
                                    </Alert>
                                )}
                            </div>
                            {/* Submit Button */}
                            <Button
                                type="submit"
                                className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-medium shadow-lg hover-lift disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={!isValid || isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                        Signing In...
                                    </>
                                ) : (
                                    <>
                                        Sign In
                                    </>
                                )}
                            </Button>
                        </form>
                    </Tabs>
                    <div className="text-center">
                        <p className="text-sm text-muted-foreground">
                            Prefer OTP login?{' '}
                            <Button
                                type="button"
                                variant="link"
                                size="sm"
                                onClick={() => setState("otp")}
                                className="h-auto p-0 text-primary hover:text-primary/80 font-medium"
                            >
                                Sign in with OTP
                            </Button>
                        </p>
                    </div>
                </CardContent>

            </Card>
        </div>
    )
}

export default PasswordLogin