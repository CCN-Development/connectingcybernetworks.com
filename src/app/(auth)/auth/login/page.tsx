'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ChevronLeft, HelpCircle } from 'lucide-react'
import OTPLogin from './OTPLogin'
import PasswordLogin from './PasswordLogin'

function LoginPage() {
    const [currentForm, setCurrentForm] = useState<'password' | 'otp' | 'social' | 'forgot'>('otp')


    return (
        <div className={`min-h-screen w-full flex o`}>
            {/* Left Side - Image */}


            {/* Right Side - Login Form */}
            <div className="w-full lg:w-1/2 flex flex-col relative bg-background h-screen ">
                {/* Header */}
                <div
                    className='hidden md:block absolute inset-0 rounded-lg top-1 left-1'
                    style={{
                        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
                        scale: '5',
                        zIndex: 0,
                        height: '150px',
                        width: '150px',
                    }}
                />
                <div className="flex items-center justify-between p-6">
                    <Button variant="ghost" size="icon" className="hover-lift">
                        <ChevronLeft className="h-5 w-5" />
                    </Button>

                    <div className="flex items-center gap-4">
                        <Image
                            src="/Logo-Light-Theme.svg"
                            alt="CCN Logo"
                            width={180}
                            height={100}
                            className="block dark:hidden"
                        />
                        <Image
                            src="/Logo-Dark-Theme.svg"
                            alt="CCN Logo"
                            width={180}
                            height={100}
                            className="hidden dark:block"
                        />

                    </div>

                </div>

                {/* Main Content */}
                <div className="flex-1 flex items-center justify-center p-6" style={{
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
                    scale: '1',
                }}
                >
                    <div className="w-full max-w-md space-y-8">
                        {/* Welcome Text */}
                        <div className="text-center space-y-3">
                            <h1 className="text-4xl font-bold ">
                                Get started
                            </h1>
                            <p className="text-gray-500 text-lg">
                                Use your phone or email to sign in securely.
                            </p>
                        </div>


                        {/* Form */}
                        {currentForm === 'password' && <PasswordLogin setState={setCurrentForm} />}
                        {currentForm === 'otp' && <OTPLogin setState={setCurrentForm} />}


                        {/* Divider */}
                        <div className="flex items-center gap-4">
                            <Separator className="flex-1" />
                            <span className="text-xs text-muted-foreground font-medium px-3">OR</span>
                            <Separator className="flex-1" />
                        </div>

                    </div>
                </div>
                <div className="text-center ">
                    <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
                        <HelpCircle className="h-4 w-4" />
                        Help
                    </Button>
                </div>

                {/* Floating Security Elements */}
                <div className="absolute top-32 right-16 w-6 h-6 border border-accent/30 rounded rotate-45 animate-pulse hidden lg:block" />
                <div className="absolute bottom-40 right-12 w-4 h-4 bg-primary/20 rounded-full animate-ping hidden lg:block" />
                <div className="absolute top-1/2 right-8 w-8 h-8 border border-secondary/40 rounded-lg rotate-12 animate-bounce hidden lg:block" />
            </div>
            <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
                <Image
                    src="/backgrounds/auth/login-bg.png"
                    alt="Cybersecurity Login Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" /> */}

                {/* Floating Elements for Cybersecurity Theme */}
                <div className="absolute top-20 left-20 w-16 h-16 border border-primary/30 rounded-lg rotate-12 animate-pulse" />
                <div className="absolute bottom-32 right-16 w-12 h-12 border border-accent/40 rounded-full animate-bounce" />
                <div className="absolute top-1/2 left-16 w-8 h-8 bg-primary/20 rounded-sm rotate-45 animate-ping" />


            </div>
            {/* add box shadow to image it have transparent Background */}
            <div className='fixed bottom-0 right-0 w-24 h-24'>
                {/* radial gradient background */}
                <div
                    className='absolute inset-0 rounded-lg top-10 left-10'
                    style={{
                        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
                        scale: '5',
                    }}
                />

                <img
                    src="/backgrounds/auth/login-asset.png"
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        width: '100px',
                        height: '100px',
                        objectFit: 'cover',
                    }}
                    alt="Cybersecurity Login Background"
                />
            </div>
        </div>
    )
}

export default LoginPage