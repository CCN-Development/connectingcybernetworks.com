"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
    ChevronDown,
    ShieldCheck,
    Award,
    Briefcase,
    FileText,
    MessageSquare,
    BookOpen,
    MapPin,
    Library,
    ArrowRight,
    Menu,
    X,
    Laptop,
    Network,
    Users,
    GraduationCap,
    Newspaper,
    HeadphonesIcon,
} from "lucide-react";
import RotatingGradientButton from "@/components/custom/RotatingGradientButton";
import GradientBorderCTA from "@/components/custom/GradientBorderCTA";

// ─── Nav Config ──────────────────────────────────────────────────────────────
type NavChild = {
    icon: React.ElementType;
    label: string;
    description: string;
    href: string;
};

type NavItem =
    | { label: string; href: string; children?: undefined }
    | { label: string; href?: undefined; children: NavChild[] };

const navItems: NavItem[] = [
    // { label: "Home", href: "/" },
    {
        label: "Training",
        children: [
            {
                icon: ShieldCheck,
                label: "Job Guaranteed Programs",
                description: "Programs with 100% placement support.",
                href: "/programs/job-guaranteed",
            },
            {
                icon: Award,
                label: "All Certification Courses",
                description: "Specialized certifications to sharpen expertise.",
                href: "/programs/certifications",
            },
        ],
    },
    {
        label: "Placement",
        children: [
            {
                icon: Briefcase,
                label: "Our Placement",
                description: "Explore our student success stories",
                href: "/placement/our-placement",
            },
            {
                icon: FileText,
                label: "Hire from Us",
                description: "Hire Skilled Professionals trained by CCN",
                href: "/placement/hire-from-us",
            }
        ],
    },
    {
        label: "Resources",
        children: [
            {
                icon: BookOpen,
                label: "Blogs",
                description: "Insights and tips to stay ahead in cybersecurity.",
                href: "/resources/blogs",
            },
            {
                icon: MapPin,
                label: "Media",
                description: "Explore CCN news, events, and stories.",
                href: "/resources/media",
            }
        ],
    },
    { label: "IT Solutions", href: "https://www.ccnitsolutions.com/" },
];

function DropdownItem({ item, onClose }: { item: NavChild; onClose: () => void }) {
    const Icon = item.icon;
    return (
        <li>
            <Link
                href={item.href}
                onClick={onClose}
                className="group flex items-center gap-4 px-4 py-3 rounded-sm hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
                <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-xs bg-white/10 dark:bg-white/10">
                    <Icon size={15} />
                </span>
                <span className="flex-1 min-w-0">
                    <p className="text-xs font-semibold  leading-snug">{item.label}</p>
                    <p className="text-[8px] text-gray-600 dark:text-base-content/60  mt-0.5 leading-snug">{item.description}</p>
                </span>
                <ArrowRight
                    size={14}
                    className="shrink-0 text-gray-600 dark:text-base-content/30  group-hover:translate-x-0.5 transition-all"
                />
            </Link>
        </li>
    );
}

function DesktopDropdown({ item }: { item: NavItem & { children: NavChild[] } }) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div ref={ref} className="relative "
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <button
                onClick={() => setOpen((v) => !v)}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors
                    ${open
                        ? "text-primary-400"
                        : "text-black dark:text-white"
                    }`}
                aria-expanded={open}
            >
                {item.label}
                <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                />
            </button>

            {open && (
                <div className="absolute top-full  w-80 z-50 rounded-xs animate-in fade-in slide-in-from-top-50 duration-150 ">
                    <div className="rounded-sm backdrop-blur-2xl shadow-2xl overflow-hidden p-2">
                        <ul className="space-y-0.5">
                            {item.children.map((child) => (
                                <DropdownItem key={child.href} item={child} onClose={() => setOpen(false)} />
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

function MobileNavItem({ item, onClose }: { item: NavItem; onClose: () => void }) {
    const [open, setOpen] = useState(false);

    if (!item.children) {
        return (
            <li>
                <Link
                    href={item.href}
                    onClick={onClose}
                    className="block px-4 py-3 text-sm font-medium text-base-content/80 hover:text-base-content hover:bg-white/5 rounded-xl transition-colors"
                >
                    {item.label}
                </Link>
            </li>
        );
    }

    return (
        <li>
            <button
                onClick={() => setOpen((v) => !v)}
                className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-base-content/80 hover:text-base-content hover:bg-white/5 rounded-md transition-colors"
            >
                {item.label}
                <ChevronDown size={14} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
            </button>
            {open && (
                <ul className="ml-2 bg-white/5 backdrop-blur-3xl mt-1 space-y-0.5 border-l-2 border-white/10 pl-3">
                    {item.children.map((child) => {
                        const Icon = child.icon;
                        return (
                            <li key={child.href}>
                                <Link
                                    href={child.href}
                                    onClick={onClose}
                                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors"
                                >
                                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 text-primary-400 shrink-0">
                                        <Icon size={15} />
                                    </span>
                                    <span>
                                        <p className="text-sm font-medium text-base-content leading-snug">{child.label}</p>
                                        <p className="text-xs text-base-content/50 leading-snug mt-0.5">{child.description}</p>
                                    </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            )}
        </li>
    );
}

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? " shadow-lg"
                : "bg-transparent"
                }`}
        >
            <div className="absolute inset-0 backdrop-blur-xl bg-base-100/10 -z-10 pointer-events-none" />
            <div className="navbar flex justify-between max-w-7xl mx-auto px-4 lg:px-6 min-h-17">
                <div className="">
                    <Link href="/" className="shrink-0">
                        <Image
                            src={"/Logo-Dark-Theme.svg"}
                            alt="Connecting Cyber Networks"
                            width={200}
                            height={60}
                            priority
                            className="hidden dark:block h-16 w-auto object-contain"
                        />
                        <Image
                            src={"/Logo-Light-Theme.svg"}
                            alt="Connecting Cyber Networks"
                            width={200}
                            height={60}
                            priority
                            className="block dark:hidden h-16 w-auto object-contain"
                        />
                    </Link>
                </div>

                <nav className=" hidden lg:flex">
                    <ul className="flex items-center gap-1">
                        {navItems.map((item) =>
                            item.children ? (
                                <li key={item.label}>
                                    <DesktopDropdown item={item} />
                                </li>
                            ) : (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="px-3 py-2 text-sm text-black dark:text-white font-medium  rounded-lg transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            )
                        )}
                    </ul>
                </nav>
                <div className=" flex items-center gap-2">
                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center gap-2">
                        <Link
                            href="/book-demo"

                        >
                            <GradientBorderCTA
                                text="Book a Free Demo"
                                colors={[
                                    
                                    "#0E193400",
                                    "#0E193400",
                                    "#0E193400",
                                    "#2F53AD",
                                    "#2F53AD",
                                    "#ffffff75",
                                    "#2F53AD",
                                    "#2F53AD",
                                    "#0E193400",
                                    "#0E193400",
                                 
                                ]}
                                borderWidth={2}
                                textBgColor="#000000"
                                textBgHoverColor="#000000"
                            />
                        </Link>

                        <Link
                            href="https://lms.connectingcybernetworks.com"
                            onClick={() => setMobileOpen(false)}
                        >
                            <RotatingGradientButton text="Login" className="w-full"
                                colors={[
                                    "#2F53AD",
                                    "#0E1934",
                                    "#0E1934",
                                ]}
                                borderWidth={2}
                            />
                        </Link>
                    </div>

                    {/* Theme Toggle */}
                    <ThemeToggle />

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setMobileOpen((v) => !v)}
                        className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-base-content/80 hover:bg-white/5 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {mobileOpen && (
                <div className="lg:hidden border-t border-white/10 bg-base-100/95 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
                    <div className="max-w-7xl mx-auto px-4 py-4">
                        <ul className="space-y-1">
                            {navItems.map((item) => (
                                <MobileNavItem
                                    key={item.label}
                                    item={item}
                                    onClose={() => setMobileOpen(false)}
                                />
                            ))}
                        </ul>
                        {/* Mobile CTAs */}
                        <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-white/10">
                            <Link
                                href="/book-demo"
                                onClick={() => setMobileOpen(false)}
                                className="btn btn-primary btn-sm w-full rounded-lg text-sm font-semibold"
                            >
                                Book a Free Demo
                            </Link>
                            <Link
                                href="https://lms.connectingcybernetworks.com"
                                onClick={() => setMobileOpen(false)}
                            >
                                <RotatingGradientButton text="Login" className="w-full"
                                    colors={[
                                        "red", "blue"
                                    ]}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;