"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    Clock,
    BadgeCheck,
    BarChart3,
    Monitor,
    Briefcase,
    ArrowRight,
    ChevronRight,
} from "lucide-react";
import RadialGradientComb from "../custom/RadialGradientComb";

/* ─── Data ──────────────────────────────────────────────────────────── */

export const roleCards = [
    {
        id: "cyber-associate",
        railTitle: "Cyber Security Associate",
        title: "Cyber Security Associate",
        level: "Beginner",
        durationMonths: 9,
        jobGuarantee: false,
        shortDescription:
            "Learn the fundamentals of protecting systems, networks, and data. Build strong basics in security concepts, Linux, networking, and incident response.",
        ifYouLike:
            "learning security basics, exploring how attacks work, and building a strong foundation for a security career",
        stats: { medianSalaryInr: 250000, jobsAvailable: 15000 },
        metaPills: ["9 months", "Foundation", "Beginner"],
        coursesCovered: [
            "CompTIA Security+ (Prep)",
            "Linux Fundamentals",
            "Networking Basics",
            "SIEM Basics",
            "Incident Response",
        ],
        chips: ["Security+", "Linux", "Networking", "SIEM", "IR"],
        icon: { name: "shield", emoji: "🛡️" },
        theme: { accent: "#0ea5a5", gradient: ["#0ea5a5", "#0b1220"] },
        iconFile: "/creatives/rocket11.svg"
    },
    {
        id: "cyber-professional",
        railTitle: "Cyber Security Professional",
        title: "Cyber Security Professional",
        level: "Intermediate",
        durationMonths: 15,
        jobGuarantee: true,
        shortDescription:
            "Level up into real-world defensive security. Train on network security, ethical hacking basics, firewalls, and incident handling with practical labs.",
        ifYouLike:
            "solving problems, securing digital information, learning how hackers think, and protecting organizations from cyber risks",
        stats: { medianSalaryInr: 300000, jobsAvailable: 20000 },
        metaPills: ["15 months", "Job Guarantee", "Intermediate"],
        coursesCovered: [
            "CCNA (Networking)",
            "CEH (Ethical Hacking)",
            "Palo Alto Firewall",
            "CCNP Security",
            "Checkpoint Firewall (CCSA)",
        ],
        chips: ["CCNA", "CEH", "Palo Alto", "CCNP Sec", "CCSA"],
        icon: { name: "target", emoji: "🎯" },
        theme: { accent: "#3b82f6", gradient: ["#3b82f6", "#0b1220"] },
        iconFile: "/creatives/precision11.svg"
    },
    {
        id: "cyber-expert",
        railTitle: "Cyber Security Expert",
        title: "Cyber Security Expert",
        level: "Advanced",
        durationMonths: 18,
        jobGuarantee: true,
        shortDescription:
            "Go deep into security engineering, SOC operations, threat hunting, and hardening. Work on advanced labs and real-world playbooks.",
        ifYouLike:
            "digging into logs, threat hunting, building detections, and designing secure enterprise environments",
        stats: { medianSalaryInr: 650000, jobsAvailable: 12000 },
        metaPills: ["18 months", "Job Guarantee", "Advanced"],
        coursesCovered: [
            "SOC Analyst (Advanced)",
            "Threat Hunting",
            "EDR & Detection Engineering",
            "Malware Analysis (Basics)",
            "Cloud Security (AWS/Azure)",
        ],
        chips: ["SOC", "Threat Hunt", "EDR", "Malware", "Cloud Sec"],
        icon: { name: "radar", emoji: "📡" },
        theme: { accent: "#8b5cf6", gradient: ["#8b5cf6", "#0b1220"] },
        iconFile: "/creatives/shield11.svg"
    },
    {
        id: "master-ethical-hacking",
        railTitle: "Master in Ethical Hacking & Penetration Testing",
        title: "Master in Ethical Hacking & Penetration Testing",
        level: "Expert",
        durationMonths: 12,
        jobGuarantee: false,
        shortDescription:
            "Become an offensive security specialist. Learn recon, exploitation, web app pentesting, and reporting the way professionals do it.",
        ifYouLike:
            "breaking things legally, exploiting vulnerabilities, writing clear reports, and improving security by thinking like an attacker",
        stats: { medianSalaryInr: 800000, jobsAvailable: 9000 },
        metaPills: ["12 months", "Expert Track", "Hands-on Labs"],
        coursesCovered: [
            "Web App Pentesting (OWASP Top 10)",
            "Network Pentesting",
            "Active Directory Attacks",
            "Privilege Escalation",
            "Reporting & Remediation",
        ],
        chips: ["OWASP", "Pentest", "AD", "Privesc", "Reporting"],
        icon: { name: "bug", emoji: "🐞" },
        theme: { accent: "#d946ef", gradient: ["#d946ef", "#0b1220"] },
        iconFile: "/creatives/bug11.svg"
    },
    {
        id: "master-network-security",
        railTitle: "Master in Network Security",
        title: "Master in Network Security",
        level: "Expert",
        durationMonths: 14,
        jobGuarantee: true,
        shortDescription:
            "Specialize in securing enterprise networks. Deep dive into routing/switching security, VPNs, NAC, segmentation, and firewall strategy.",
        ifYouLike:
            "designing secure networks, locking down traffic, and building resilient infrastructure that doesn't fall apart under pressure",
        stats: { medianSalaryInr: 750000, jobsAvailable: 11000 },
        metaPills: ["14 months", "Job Guarantee", "Expert"],
        coursesCovered: [
            "Advanced Routing & Switching Security",
            "VPNs & Secure Tunneling",
            "Network Access Control (NAC)",
            "Segmentation & Zero Trust Basics",
            "Firewall Architecture (Advanced)",
        ],
        chips: ["VPN", "NAC", "Segmentation", "Zero Trust", "Firewalls"],
        icon: { name: "globe-lock", emoji: "🌐" },
        theme: { accent: "#f59e0b", gradient: ["#f59e0b", "#0b1220"] },
        iconFile: "/creatives/web11.svg"
    },
];

type RoleCard = (typeof roleCards)[number];

/* ─── Helpers ───────────────────────────────────────────────────────── */

function formatSalary(n: number) {
    return "₹" + n.toLocaleString("en-IN") + "+";
}

function formatJobs(n: number) {
    return n.toLocaleString("en-IN") + "+";
}

/* ─── Collapsed Rail ────────────────────────────────────────────────── */

function CollapsedRail({
    card,
    onClick,
}: {
    card: RoleCard;
    onClick: () => void;
}) {
    return (
        <button
            onClick={onClick}
            className="relative h-full w-full flex flex-col items-center justify-between py-6 px-10 overflow-hidden rounded-2xl cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 group dark:bg-black"
            aria-label={`Expand ${card.title}`}
        >
            <div data-svg-wrapper data-layer="shape" className="Shape left-0 top-0 absolute">
                <svg width="146" height="635" viewBox="0 0 146 635" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter={`url(#filter-rail-${card.id})`}>
                        <path d="M-11.248 558.051C-18.3136 758.494 18.704 910.561 26.768 929H-70V6.10352e-05H74C29.072 76.4677 -4.1824 357.608 -11.248 558.051Z" fill={`url(#grad-rail-${card.id})`} />
                    </g>
                    <defs>
                        <filter id={`filter-rail-${card.id}`} x="-142" y="-72" width="288" height="1073" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="36" result={`blur-rail-${card.id}`} />
                        </filter>
                        <linearGradient id={`grad-rail-${card.id}`} x1="25.232" y1="464.5" x2="-20.464" y2="464.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor={card.theme.gradient[0]} />
                            <stop offset="1" stopColor={card.theme.gradient[1]} stopOpacity="0.75" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Vertical title */}
            <div className="flex-1 flex items-center justify-center">
                <span
                    className="dark:text-white/80 font-semibold text-sm whitespace-nowrap group-hover:dark:text-white transition-colors"
                    style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                >
                    {card.railTitle}
                </span>
            </div>

            {/* Icon badge */}
            <div
                className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl text-2xl"
                style={{ background: `${card.theme.gradient[0]}20` }}
            >
                <img src={card.iconFile} alt={card.title} className="w-full h-full" />
            </div>
        </button>
    );
}

/* ─── Expanded Card ─────────────────────────────────────────────────── */

function ExpandedCard({ card }: { card: RoleCard }) {
    return (
        <div className="relative h-full w-full flex flex-col p-8 overflow-hidden rounded-2xl dark:bg-black">

            <div data-svg-wrapper data-layer="shape" className="absolute top-0 left-0 w-full">
                <svg width="100%" height="166" viewBox="0 0 779 166" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter={`url(#filter-exp-${card.id})`}>
                        <path d="M220.949 8.752C20.5065 1.6864 -131.561 38.704 -150 46.768V-50H779V94C702.532 49.072 421.392 15.8176 220.949 8.752Z" fill={`url(#grad-exp-${card.id})`} />
                    </g>
                    <defs>
                        <filter id={`filter-exp-${card.id}`} x="-222" y="-122" width="1073" height="288" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="36" result={`blur-exp-${card.id}`} />
                        </filter>
                        <linearGradient id={`grad-exp-${card.id}`} x1="314.5" y1="45.232" x2="314.5" y2="-0.463997" gradientUnits="userSpaceOnUse">
                            <stop stopColor={card.theme.accent} />
                            <stop offset="1" stopColor={card.theme.accent} stopOpacity="0.75" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="relative z-10 flex flex-col h-full gap-5">
                {/* Title row */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="flex items-center gap-4"
                >
                    <div
                        className="flex items-center justify-center w-12 h-12 rounded-xl text-2xl shrink-0"
                        style={{ background: `${card.theme.accent}25` }}
                    >
                        <img src={card.iconFile} alt={card.title} className="w-full h-full" />
                    </div>
                    <h3 className="dark:text-white text-xl font-bold leading-tight">{card.title}</h3>
                </motion.div>

                {/* Description */}
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.3 }}
                >
                    <p className="dark:text-white/60 text-sm leading-relaxed line-clamp-3">
                        {card.shortDescription}
                    </p>
                    <button className="dark:text-white/80 hover:dark:text-white text-sm underline underline-offset-4 mt-1 transition-colors">
                        Read more
                    </button>
                </motion.div>

                {/* Meta pills */}
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    className="flex flex-wrap items-center gap-2"
                >
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 dark:text-white/70 text-xs font-medium">
                        <Clock size={12} />
                        {card.durationMonths} months
                    </span>
                    {card.jobGuarantee && (
                        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 dark:text-white/70 text-xs font-medium">
                            <BadgeCheck size={12} />
                            Job Guarantee
                        </span>
                    )}
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 dark:text-white/70 text-xs font-medium">
                        <BarChart3 size={12} />
                        {card.level}
                    </span>
                </motion.div>

                {/* If you like */}
                <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.3 }}
                    className="text-sm dark:text-white/50 leading-relaxed"
                >
                    <span className="font-semibold dark:text-white/80">If you like : </span>
                    {card.ifYouLike}
                </motion.p>

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                    className="flex items-center gap-4 text-xs dark:text-white/50"
                >
                    <span className="flex items-center gap-1.5">
                        <Monitor size={13} className="dark:text-white/40" />
                        <span className="dark:text-white/80 font-semibold">{formatSalary(card.stats.medianSalaryInr)}</span>{" "}
                        median salary
                    </span>
                    <span className="w-px h-4 bg-white/15" />
                    <span className="flex items-center gap-1.5">
                        <Briefcase size={13} className="dark:text-white/40" />
                        <span className="dark:text-white/80 font-semibold">{formatJobs(card.stats.jobsAvailable)}</span> jobs
                        available
                    </span>
                </motion.div>

                {/* Courses + chips */}
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.3 }}
                    className="mt-auto"
                >
                    <p className="text-xs dark:text-white/30 mb-2.5">
                        {card.coursesCovered.length} Courses Covered in this program :
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {card.coursesCovered.map((course) => (
                            <span
                                key={course}
                                className="px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors"
                                style={{
                                    borderColor: `${card.theme.accent}30`,
                                    color: card.theme.accent,
                                    background: `${card.theme.accent}08`,
                                }}
                            >
                                {course}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* CTA arrow */}
            </div>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="absolute bottom-0 right-0"
            >
                <button
                    className="flex items-center justify-center w-20 h-14 rounded-full bg-white text-black shadow-2xl hover:scale-105 active:scale-95 transition-transform"
                    aria-label="View program details"
                >
                    <ArrowRight size={20} />
                </button>
            </motion.div>
        </div>
    );
}

/* ─── Role Card (switch between states) ─────────────────────────────── */

function RoleCardItem({
    card,
    isActive,
    onActivate,
}: {
    card: RoleCard;
    isActive: boolean;
    onActivate: () => void;
}) {
    return (
        <motion.div
            layout
            className="h-130 rounded-2xl overflow-hidden shrink-0"
            style={{
                boxShadow: isActive ? `0 0 60px ${card.theme.accent}15` : "none",
            }}
            animate={{
                width: isActive ? "min(700px, 50vw)" : "124px",
            }}
            transition={{
                layout: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                width: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
            }}
            role="button"
            tabIndex={0}
            aria-expanded={isActive}
            aria-label={card.title}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    if (!isActive) onActivate();
                }
            }}
        >
            <AnimatePresence>
                {isActive ? (
                    <motion.div
                        key="expanded"
                        className="h-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <ExpandedCard card={card} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="collapsed"
                        className="h-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <CollapsedRail card={card} onClick={onActivate} />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

/* ─── Mobile Card (vertical accordion) ──────────────────────────────── */

function MobileCard({
    card,
    isActive,
    onActivate,
}: {
    card: RoleCard;
    isActive: boolean;
    onActivate: () => void;
}) {
    return (
        <motion.div
            layout
            className="w-full rounded-2xl overflow-hidden"
            style={{
                boxShadow: isActive ? `0 0 40px ${card.theme.accent}15` : "none",
            }}
        >
            {/* Header — always visible */}
            <button
                onClick={onActivate}
                className="w-full flex items-center gap-4 p-4 text-left"
                style={{
                    background: `linear-gradient(135deg, ${card.theme.accent}12, ${card.theme.gradient[1]})`,
                }}
            >
                <div
                    className="flex items-center justify-center w-10 h-10 rounded-xl text-xl shrink-0"
                    style={{ background: `${card.theme.accent}20` }}
                >
                    {card.icon.emoji}
                </div>
                <span className="flex-1 dark:text-white font-semibold text-sm">{card.title}</span>
                <ChevronRight
                    size={16}
                    className={`dark:text-white/40 transition-transform duration-300 ${isActive ? "rotate-90" : ""}`}
                />
            </button>

            {/* Expandable body */}
            <AnimatePresence initial={false}>
                {isActive && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden relative"
                    >
                        <div
                            className="p-5 pt-5 flex flex-col gap-4"
                            style={{
                                background: `linear-gradient(135deg, ${card.theme.accent}80, ${card.theme.gradient[1]})`,
                            }}
                        >
                            <p className="dark:text-white/60 text-sm leading-relaxed">{card.shortDescription}</p>

                            <div className="flex flex-wrap gap-2">
                                {card.metaPills.map((pill) => (
                                    <span
                                        key={pill}
                                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 dark:text-white/70 text-xs"
                                    >
                                        {pill}
                                    </span>
                                ))}
                            </div>

                            <p className="text-xs dark:text-white/50">
                                <span className="font-semibold dark:text-white/80">If you like : </span>
                                {card.ifYouLike}
                            </p>

                            <div className="flex flex-wrap items-center gap-3 text-xs dark:text-white/50">
                                <span>
                                    <span className="dark:text-white/80 font-semibold">
                                        {formatSalary(card.stats.medianSalaryInr)}
                                    </span>{" "}
                                    median salary
                                </span>
                                <span className="w-px h-3 bg-white/15" />
                                <span>
                                    <span className="dark:text-white/80 font-semibold">
                                        {formatJobs(card.stats.jobsAvailable)}
                                    </span>{" "}
                                    jobs available
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-1.5">
                                {card.coursesCovered.map((c) => (
                                    <span
                                        key={c}
                                        className="px-2.5 py-1 rounded-md text-[11px] font-medium border"
                                        style={{
                                            borderColor: `${card.theme.accent}30`,
                                            color: card.theme.accent,
                                            background: `${card.theme.accent}08`,
                                        }}
                                    >
                                        {c}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-end pt-1 absolute right-4 bottom-4">
                                <button
                                    className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black"
                                    aria-label="View program details"
                                >
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

/* ─── Main Component ────────────────────────────────────────────────── */

function PackageView() {
    const [activeId, setActiveId] = useState(roleCards[1].id);

    const handleActivate = useCallback((id: string) => {
        setActiveId(id);
    }, []);

    return (
        <section className="py-10 px-4 relative">
            <img src="/creatives/curve3.svg" className='w-full absolute bottom-[-500px]' alt="" />
            <RadialGradientComb className="bottom-0"/>
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-14">
                    <div className="inline-flex px-5 py-1 rounded-full border border-teal-400/50 text-teal-400 text-xs font-medium mb-5">
                        Our Programs
                    </div>

                    <div data-layer="Why We're the Smart Choice" className="justify-start"><span className="dark:text-zinc-300 text-4xl font-semibold ">Choose your </span><span className="bg-linear-to-b from-[#426ACC] to-[#8EAFFF] bg-clip-text text-transparent text-4xl font-semibold ">Role</span></div>
                    <p className="text-sm md:text-base text-gray-500 dark:dark:text-white/40 max-w-5xl mt-10 mx-auto">
                        Pick the path that matches your skills — Associate, Professional, Expert or Master — and grow
                        with us.
                    </p>
                </div>

                {/* Desktop: Horizontal Accordion */}
                <div className="hidden lg:flex gap-3 justify-center">
                    {roleCards.map((card) => (
                        <RoleCardItem
                            key={card.id}
                            card={card}
                            isActive={activeId === card.id}
                            onActivate={() => handleActivate(card.id)}
                        />
                    ))}
                </div>

                {/* Mobile: Vertical Accordion */}
                <div className="lg:hidden flex flex-col gap-3">
                    {roleCards.map((card) => (
                        <MobileCard
                            key={card.id}
                            card={card}
                            isActive={activeId === card.id}
                            onActivate={() => handleActivate(card.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PackageView;
