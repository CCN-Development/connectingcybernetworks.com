import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import RadialGradientComb from "../custom/RadialGradientComb";

/* ─── Blog Data ─────────────────────────────────────────────────────── */

const blogs = [
    {
        id: "career-in-cybersecurity",
        title: "How to Start a Career in Cyber Security After College",
        readTime: "15 Minutes read",
        image: "/backgrounds/blog-placeholder.svg",
        slug: "#",
    },
    {
        id: "cracking-ccna",
        title: "Beginner's Guide to Cracking the CCNA Exam",
        readTime: "10 Minutes read",
        image: "/backgrounds/blog-placeholder.svg",
        slug: "#",
    },
    {
        id: "career-ethical-hacking",
        title: "How to Kick Start Your Career in Ethical Hacking",
        readTime: "5 Minutes read",
        image: "/backgrounds/blog-placeholder.svg",
        slug: "#",
    },
    {
        id: "soc-analyst-roadmap",
        title: "SOC Analyst Roadmap: Skills You Need in 2026",
        readTime: "8 Minutes read",
        image: "/backgrounds/blog-placeholder.svg",
        slug: "#",
    },
];

function HomeBlogs() {
    return (
        <section className="py-16 md:py-10 relative ">
            {/* Layer 1: Curve background */}
            <img
                src="/creatives/curve4.svg"
                className="pointer-events-none absolute -top-full left-0 w-full select-none"
                alt=""
            />

            {/* Layer 2: Radial gradient */}
            <RadialGradientComb className="absolute -top-[20%] -left-[20%]" />
            <RadialGradientComb className="absolute -bottom-[20%] -right-[20%]" />

            {/* Layer 3: Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-5">
                {/* ── Header ── */}
                <div className="flex flex-col items-center text-center gap-3 mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold">
                        <span className="dark:text-zinc-300">Our </span>
                        <span className="bg-linear-to-b from-[#426ACC] to-[#8EAFFF] bg-clip-text text-transparent">
                            Blogs
                        </span>
                    </h2>
                    <p className="dark:text-stone-400 text-stone-600 max-w-xl text-sm md:text-base">
                        Stay updated with the latest in cybersecurity, career tips, and
                        industry insights.
                    </p>
                </div>

                {/* ── Blog Cards (horizontal scroll) ── */}
                <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="snap-start shrink-0 w-85 md:w-95 flex items-stretch gap-4 group"
                        >
                            {/* Image */}
                            <div className="shrink-0 w-28 h-28 md:w-36 md:h-36 rounded-xl overflow-hidden">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col justify-center gap-2 min-w-0">
                                <span className="text-[10px] md:text-xs font-medium tracking-wider dark:text-stone-400 text-stone-500 ">
                                    {blog.readTime}
                                </span>
                                <h3 className="dark:text-white text-zinc-900 font-semibold text-sm md:text-base leading-snug line-clamp-3">
                                    {blog.title}
                                </h3>
                                <Link
                                    href={blog.slug}
                                    className="inline-flex items-center gap-1.5 text-xs md:text-sm dark:text-white/70 text-zinc-600 transition-colors mt-1"
                                >
                                    Read More
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── CTA Button ── */}
                <div className="flex justify-center mt-10">
                    <Link
                        href="/blogs"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-white dark:text-white text-zinc-800 hover:bg-white/10 transition-colors duration-200 text-sm font-medium"
                    >
                        View All
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default HomeBlogs;