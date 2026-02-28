"use client"
import React, { useEffect } from 'react'
import { toast } from 'sonner';
import Image from 'next/image';
import { ShieldAlert, Mail, Phone, ArrowLeft } from 'lucide-react';
import { isDevelopment } from '../../next.config';

type Props = { children: React.ReactNode }

function PrivacyContext({
    children
}: Props) {
    const [isDevToolProtection, setIsDevToolProtection] = React.useState(false);
    const [isTabHidden, setIsTabHidden] = React.useState(false);
    const [keyBindingProtection, setKeyBindingProtection] = React.useState(false);
    useEffect(() => {
        if (isDevelopment) return;
        document.addEventListener('contextmenu', (event) => {
            event.preventDefault();
            toast.warning("Right-click is disabled for security reasons.");
        });

        document.addEventListener('selectstart', (e) => {
            e.preventDefault();
            return false;
        });

        window.addEventListener('blur', () => {
            setIsTabHidden(true);
            toast.warning("We noticed you switched tabs or clicked outside the browser. For your security, we recommend staying on our site.");
        });

        window.addEventListener('focus', () => {
            setIsTabHidden(false);
            toast.success("Welcome back!");
        });
        document.addEventListener('keydown', function (event) {
            if (event.ctrlKey || event.altKey || event.metaKey) {
                event.preventDefault();
                toast.warning("Control, Alt, and Command shortcuts are disabled.");
                setKeyBindingProtection(true);
                return false;
            }
            if (event.keyCode >= 112 && event.keyCode <= 123) {
                toast.warning("Function keys are disabled.");
                event.preventDefault();
                setKeyBindingProtection(true);
                return false;
            }
        });
        window.addEventListener('keyup', function (event) {
            if (event.key === 'Alt') {
                event.preventDefault();
                toast.warning("Alt key is disabled.");
                setKeyBindingProtection(true);
            }
        });
    }, [])

    function returnToSite() {
        setIsTabHidden(false);
        setKeyBindingProtection(false);
        setIsDevToolProtection(false);
        toast.success("Welcome back!");
    }

    if (isDevToolProtection || isTabHidden || keyBindingProtection) {
        return (
            <div className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden">
                {/* Background glow blobs */}
                <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-red-700/20 blur-[120px] pointer-events-none" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-blue-800/20 blur-[120px] pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-lg w-full">
                    {/* Logo */}
                    <Image
                        src="/Logo-Dark-Theme.svg"
                        alt="Connecting Cyber Networks"
                        width={160}
                        height={50}
                        className="h-12 w-auto object-contain mb-10"
                    />

                    {/* Shield icon */}
                    <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-red-500/10 border border-red-500/20 mb-6">
                        <ShieldAlert size={36} className="text-red-400" />
                    </div>

                    {/* Heading */}
                    <h1 className="text-2xl font-bold text-white mb-3 leading-snug">
                        Content Protected
                    </h1>
                    <p className="text-sm text-white/50 leading-relaxed mb-8">
                        This page is protected. We detected that you navigated away or left the browser window. Please return to our site to continue securely.
                    </p>

                    {/* Return button */}
                    <button
                        onClick={returnToSite}
                        className="flex items-center gap-2 btn btn-sm bg-white/10 hover:bg-white/15 border border-white/10 text-white rounded-xl px-5 py-2.5 text-sm font-medium transition-colors mb-10"
                    >
                        <ArrowLeft size={14} />
                        Return to Site
                    </button>

                    {/* Divider */}
                    <div className="w-full border-t border-white/10 mb-8" />

                    {/* Contact */}
                    <p className="text-xs text-white/30 mb-4 uppercase tracking-widest font-medium">Need Help?</p>
                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
                        <a
                            href="mailto:info@connectingcybernetworks.in"
                            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm text-white/70 hover:text-white"
                        >
                            <Mail size={13} className="text-blue-400 shrink-0" />
                            info@connectingcybernetworks.in
                        </a>
                        <a
                            href="tel:+918591130192"
                            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm text-white/70 hover:text-white"
                        >
                            <Phone size={13} className="text-emerald-400 shrink-0" />
                            +91 85911 30192
                        </a>
                    </div>

                    <p className="text-xs text-white/20 mt-10">
                        © Connecting Cyber Networks 2025
                    </p>
                </div>
            </div>
        )
    }
    return <>{children}</>
}

export default PrivacyContext