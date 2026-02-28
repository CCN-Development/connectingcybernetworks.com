import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'
import RadialGradientComb from '@/components/custom/RadialGradientComb'
import * as z from 'zod';
import { Button } from '@/components/ui/button'

function Footer() {
    return (
        <footer className="relative bg-black text-black dark:text-gray-300 overflow-hidden pt-10">
            {/* Layer 1 – Radial gradient blobs (bottom) */}
            <RadialGradientComb className='absolute top-[0%] left-[70%] w-[200px] h-[200px] rotate-120' />

            {/* Layer 2 – Curve image */}
            <img src="/creatives/curverfooter.svg" className='absolute inset-0 w-full h-full object-cover z-10' alt="" />

            {/* Layer 3 – Linear gradient overlay */}
            <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/80 via-black/0 to-black/0" />

            {/* Layer 4 – Footer content */}
            <div className="relative z-30 max-w-7xl mx-auto px-4 lg:px-6 pt-14 pb-8 h-full">
                {/* Main Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_2fr_1.5fr] gap-10">

                    {/* Brand */}
                    <div className="flex flex-col gap-5">
                        <Link href="/">
                            <Image
                                src="/Logo-Dark-Theme.svg"
                                alt="Connecting Cyber Networks"
                                width={180}
                                height={55}
                                className="h-14 w-auto object-contain hidden dark:block"
                            />
                            <Image
                                src="/Logo-Light-Theme.svg"
                                alt="Connecting Cyber Networks"
                                width={180}
                                height={55}
                                className="h-14 w-auto object-contain dark:hidden"
                            />
                        </Link>
                        <p className="text-sm text-gray-900 dark:text-gray-400 leading-relaxed max-w-xs">
                            Since its inception in November 2019, Connecting Cyber Networks has been committed to providing the highest quality, needs-based training interventions to its clients, both locally and internationally.
                        </p>
                        {/* Social Icons */}
                        <div className="flex items-center gap-3">
                            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                                className="flex items-center justify-center w-9 h-9 rounded-full border border-white/20 hover:border-primary hover:text-primary transition-colors">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </Link>
                            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                                className="flex items-center justify-center w-9 h-9 rounded-full border border-white/20 hover:border-primary hover:text-primary transition-colors">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </Link>
                            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                                className="flex items-center justify-center w-9 h-9 rounded-full border border-white/20 hover:border-primary hover:text-primary transition-colors">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                </svg>
                            </Link>
                            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                                className="flex items-center justify-center w-9 h-9 rounded-full border border-white/20 hover:border-primary hover:text-primary transition-colors">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <nav>
                        <h6 className=" text-sm font-semibold mb-4 tracking-wide">Quick Links</h6>
                        <ul className="flex flex-col gap-3">
                            {[
                                { label: 'Cyber Security Professional', href: '/programs/job-guaranteed' },
                                { label: 'Certification Courses', href: '/programs/certifications' },
                                { label: 'Refund Policy', href: '/refund-policy' },
                                { label: 'Terms & Conditions', href: '/terms' },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-sm text-gray-900 dark:text-gray-400 hover:dark:text-white transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Company */}
                    <nav>
                        <h6 className=" text-sm font-semibold mb-4 tracking-wide">Company</h6>
                        <ul className="flex flex-col gap-3">
                            {[
                                { label: 'About Us', href: '/about' },
                                { label: 'Career', href: '/career' },
                                { label: 'Gallery', href: '/gallery' },
                                { label: 'Privacy Policy', href: '/privacy-policy' },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-sm text-gray-900 dark:text-gray-400 hover:dark:text-white transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Address */}
                    <div>
                        <h6 className=" text-sm font-semibold mb-4 tracking-wide">Contact</h6>
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={15} className="shrink-0 mt-0.5 text-gray-900 dark:text-gray-400" />
                                <span className="text-sm text-gray-900 dark:text-gray-400 leading-relaxed">
                                    Vaastu Darshan, B-602, Azad Rd, near BMC Ward Office, Gundavali, Andheri East, Mumbai, Maharashtra 400069
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={14} className="shrink-0 text-gray-900 dark:text-gray-400" />
                                <Link href="tel:+918591130192" className="text-sm text-gray-900 dark:text-gray-400 hover:dark:text-white transition-colors">
                                    +91 85911 30192
                                </Link>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={14} className="shrink-0 text-gray-900 dark:text-gray-400" />
                                <Link href="tel:+917777097791" className="text-sm text-gray-900 dark:text-gray-400 hover:dark:text-white transition-colors">
                                    +91 77770 97791
                                </Link>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={14} className="shrink-0 text-gray-900 dark:text-gray-400" />
                                <Link href="mailto:info@connectingcybernetworks.in" className="text-sm text-gray-900 dark:text-gray-400 hover:dark:text-white transition-colors break-all">
                                    info@connectingcybernetworks.in
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h6 className=" text-sm font-semibold mb-4 tracking-wide">Subscribe to our Newsletter</h6>
                        <form className="flex flex-col gap-3" >
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="input input-sm bg-white/5 border border-white/15 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary w-full rounded-2xl py-5"
                            />
                            <Button type="submit" className="w-full bg-[#2F53AD] hover:bg-primary/90 text-white rounded-2xl py-3">
                                Subscribe
                            </Button>
                        </form>
                    </div>
                </div>

                {/* Divider + Copyright */}
                <div className="mt-12 pt-6 border-t-2 border-white/40 text-center">
                    <p className="text-sm text-gray-500">© Connecting Cyber Networks 2025</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer