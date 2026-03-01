import React from "react";
import { Clock, Award, BookOpen, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import GradientBorderCTA from "../custom/GradientBorderCTA";

/* ─── Course Data ───────────────────────────────────────────────────── */

const courses = [
    {
        id: "ccna",
        title: "CCNA (Cisco Certified Network Associate)",
        icon: "🖧",
        duration: "2 months",
        certificate: true,
        modules: 35,
        includedIn: "Cyber Security Professional Program",
        background: "/backgrounds/card1.svg"
    },
    {
        id: "ceh",
        title: "CEH (Certified Ethical Hacker)",
        icon: "🛡️",
        duration: "3 months",
        certificate: true,
        modules: 20,
        includedIn: "Cyber Security Professional Program",
        background: "/backgrounds/card2.svg"
    },
    {
        id: "comptia-security",
        title: "CompTIA Security+",
        icon: "🔐",
        duration: "2 months",
        certificate: true,
        modules: 28,
        includedIn: "Cyber Security Associate Program",
        background: "/backgrounds/card3.svg"
    },
    {
        id: "palo-alto",
        title: "Palo Alto Firewall (PCNSA)",
        icon: "🔥",
        duration: "2 months",
        certificate: true,
        modules: 22,
        includedIn: "Cyber Security Professional Program",
        background: "/backgrounds/card2.svg"
    },
    {
        id: "ccnp-security",
        title: "CCNP Security (Cisco Certified Network Professional)",
        icon: "🌐",
        duration: "3 months",
        certificate: true,
        modules: 40,
        includedIn: "Cyber Security Expert Program",
        background: "/backgrounds/card3.svg"
    },
    {
        id: "checkpoint",
        title: "Checkpoint Firewall (CCSA)",
        icon: "🧱",
        duration: "2 months",
        certificate: true,
        modules: 18,
        includedIn: "Cyber Security Professional Program",
        background: "/backgrounds/card1.svg"
    },
];

/* ─── Component ─────────────────────────────────────────────────────── */

function PopularCourses() {
    return (
        <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-5">
                {/* ── Header ── */}
                <div className="flex flex-col items-center text-center gap-4 mb-12">
                    <div className="px-6 md:py-1 dark:bg-[#0E1116] rounded-[99px] outline-2 -outline-offset-2 outline-teal-400 inline-flex justify-center items-center gap-2.5">
                        <span className="text-teal-400 text-xs md:text-md font-normal leading-7">
                            Our Courses
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-semibold">
                        <span className="dark:text-zinc-300">Popular Certification </span>
                        <span className="bg-linear-to-b from-[#426ACC] to-[#8EAFFF] bg-clip-text text-transparent">
                            Courses
                        </span>
                    </h2>

                    <p className="dark:text-stone-400 text-stone-600 max-w-2xl text-sm md:text-base">
                        Short-term certifications to sharpen your skills and boost
                        employability. Explore from networking to ethical hacking — all in
                        one place.
                    </p>
                </div>

                {/* ── Course Cards Grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="group relative rounded-2xl overflow-hidden bg-linear-to-r to-teal-300/80  via-primary/50 from-violet-500/30  transition-all duration-300 hover:scale-[1.02]"
                        >
                            {/* Card Background — user will handle */}
                            <div className="absolute inset-0 bg-linear-60 from-[#2a1035] via-[#1a1a2e] to-[#0d1b2a] opacity-80" style={{
                                background: `url(${course.background})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }} />

                            {/* Card Content */}
                            <div className="relative z-10 p-6 flex flex-col justify-between h-full min-h-55">
                                {/* Top: Icon + Title */}
                                <div className="flex items-start gap-3">
                                    <h3 className="text-white font-semibold text-base md:text-lg leading-snug">
                                        {course.title}
                                    </h3>
                                </div>

                                {/* Bottom: Meta + Included */}
                                <div className="mt-auto pt-6 flex flex-col gap-3">
                                    {/* Meta Pills */}
                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className="inline-flex items-center gap-1.5 bg-white/10 text-white/80 text-xs px-3 py-1.5 rounded-full">
                                            <Clock className="w-3.5 h-3.5" />
                                            {course.duration}
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 bg-white/10 text-white/80 text-xs px-3 py-1.5 rounded-full">
                                            <Award className="w-3.5 h-3.5" />
                                            Earn Certificate
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 bg-white/10 text-white/80 text-xs px-3 py-1.5 rounded-full">
                                            <BookOpen className="w-3.5 h-3.5" />
                                            {course.modules} Modules
                                        </span>
                                    </div>

                                    {/* Included In */}
                                    <div className="flex items-center gap-1.5 text-white/60 text-xs">
                                        <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                                        <span>Included in {course.includedIn}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── CTA Button ── */}
                <div className="flex justify-center mt-12">
                    <Link
                        href="/courses"
                    >
                        <GradientBorderCTA
                            colors={
                                ["#3b82f6", "#0b1220"]
                            }
                            text="View all Courses"
                            className="bg-primary-foreground text-black dark:text-white "
                        />

                    </Link>

                </div>
            </div>
        </section>
    );
}

export default PopularCourses;