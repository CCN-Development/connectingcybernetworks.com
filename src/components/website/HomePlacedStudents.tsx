import React from "react";
import RadialGradientComb from "../custom/RadialGradientComb";

/* ─── Placed Students Data ──────────────────────────────────────────── */

const placedStudents = [
    {
        id: "ramesh-yadav",
        name: "Ramesh Yadav",
        image: "/placed-students/place-holder-students.png",
        placedIn: {
            name: "Flaticon",
            logo: "/placement-partners/fluent.png",
        },
        skills: ["Cryptography", "Ethical Hacking"],
        moreSkills: 2,
    },
    {
        id: "sunil-patil",
        name: "Sunil Patil",
        image: "/placed-students/place-holder-students.png",
        placedIn: {
            name: "Flaticon",
            logo: "/placement-partners/fluent.png",
        },
        skills: ["Cryptography", "Ethical Hacking"],
        moreSkills: 2,
    },
    {
        id: "jyoti-singh",
        name: "Jyoti Singh",
        image: "/placed-students/place-holder-students.png",
        placedIn: {
            name: "Flaticon",
            logo: "/placement-partners/fluent.png",
        },
        skills: ["Cryptography", "Ethical Hacking"],
        moreSkills: 2,
    },
    {
        id: "veronica-dsouza",
        name: "Veronica Dsouza",
        image: "/placed-students/place-holder-students.png",
        placedIn: {
            name: "Flaticon",
            logo: "/placement-partners/fluent.png",
        },
        skills: ["Cryptography", "Ethical Hacking"],
        moreSkills: 2,
    },
    {
        id: "hemant-yadav",
        name: "Hemant Yadav",
        image: "/placed-students/place-holder-students.png",
        placedIn: {
            name: "Flaticon",
            logo: "/placement-partners/fluent.png",
        },
        skills: ["Cryptography", "Ethical Hacking"],
        moreSkills: 2,
    },
    {
        id: "anand-jha",
        name: "Anand Jha",
        image: "/placed-students/place-holder-students.png",
        placedIn: {
            name: "Flaticon",
            logo: "/placement-partners/fluent.png",
        },
        skills: ["Cryptography", "Ethical Hacking"],
        moreSkills: 2,
    },
    {
        id: "anand-jha",
        name: "Anand Jha",
        image: "/placed-students/place-holder-students.png",
        placedIn: {
            name: "Flaticon",
            logo: "/placement-partners/fluent.png",
        },
        skills: ["Cryptography", "Ethical Hacking"],
        moreSkills: 2,
    },
    {
        id: "anand-jha",
        name: "Anand Jha",
        image: "/placed-students/place-holder-students.png",
        placedIn: {
            name: "Flaticon",
            logo: "/placement-partners/fluent.png",
        },
        skills: ["Cryptography", "Ethical Hacking"],
        moreSkills: 2,
    },
    {
        id: "anand-jha",
        name: "Anand Jha",
        image: "/placed-students/place-holder-students.png",
        placedIn: {
            name: "Flaticon",
            logo: "/placement-partners/fluent.png",
        },
        skills: ["Cryptography", "Ethical Hacking"],
        moreSkills: 2,
    },
    {
        id: "anand-jha",
        name: "Anand Jha",
        image: "/placed-students/place-holder-students.png",
        placedIn: {
            name: "Flaticon",
            logo: "/placement-partners/fluent.png",
        },
        skills: ["Cryptography", "Ethical Hacking"],
        moreSkills: 2,
    },
    {
        id: "anand-jha",
        name: "Anand Jha",
        image: "/placed-students/place-holder-students.png",
        placedIn: {
            name: "Flaticon",
            logo: "/placement-partners/fluent.png",
        },
        skills: ["Cryptography", "Ethical Hacking"],
        moreSkills: 2,
    },
    {
        id: "anand-jha",
        name: "Anand Jha",
        image: "/placed-students/place-holder-students.png",
        placedIn: {
            name: "Flaticon",
            logo: "/placement-partners/fluent.png",
        },
        skills: ["Cryptography", "Ethical Hacking"],
        moreSkills: 2,
    },
];


function HomePlacedStudents() {
    return (
        <section className="py-16 md:py-24 relative">
            <RadialGradientComb className="absolute top-0" />
            <div className="max-w-7xl mx-auto px-5">
                {/* ── Header ── */}
                <div className="flex flex-col items-center text-center gap-4 mb-14">
                    <div className="px-6 md:py-1 dark:bg-[#0E1116] rounded-[99px] outline-2 -outline-offset-2 outline-teal-400 inline-flex justify-center items-center gap-2.5">
                        <span className="text-teal-400 text-xs md:text-md font-normal leading-7">
                            CCN&apos;s Community
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-semibold">
                        <span className="dark:text-zinc-300">Our </span>
                        <span className="bg-linear-to-b from-[#426ACC] to-[#8EAFFF] bg-clip-text text-transparent">
                            Alumni
                        </span>
                        <span className="dark:text-zinc-300">, Our </span>
                        <span className="bg-linear-to-b from-[#426ACC] to-[#8EAFFF] bg-clip-text text-transparent">
                            Pride
                        </span>
                    </h2>

                    <p className="dark:text-stone-400 text-stone-600 max-w-3xl text-sm md:text-base">
                        Proud to see our learners thriving at top companies worldwide,
                        shaping the future of cybersecurity with skills gained at CCN.
                    </p>
                </div>

                {/* ── Student Cards (horizontal scroll) ── */}
                <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-5 px-5">
                    {placedStudents.map((student) => (
                        <div
                            key={student.id}
                            className="snap-start shrink-0 w-64 rounded-2xl  bg-[#000000]/80 backdrop-blur-sm overflow-hidden flex flex-col"
                        >
                            <div data-layer="Frame 1707478705" className="Frame1707478705 w-72  relative bg-black/90 rounded-2xl shadow-[inset_0px_8px_24px_0px_rgba(47,83,173,0.24)] border-t border-blue-800/30 overflow-hidden">
                                <div data-layer="Ellipse 2012" className="Ellipse2012 w-32 h-40 left-[82.41px] top-[64.86px] absolute opacity-20 bg-indigo-400 rounded-full blur-[50px]" />
                                <div data-layer="Frame 1707478705" className="Frame1707478705 w-64 h-72 px-2.5 pt-5 pb-1 left-[12.41px] top-[107.86px] absolute bg-linear-270 from-black to-black/0 rounded-bl-xl rounded-br-xl" />
                                {/* Student Image */}
                                <div className="relative w-full aspect-square flex justify-center items-center pt-30 overflow-hidden">
                                    <img
                                        src={student.image}
                                        alt={student.name}
                                        className="w-[90%]"
                                    />
                                </div>

                                {/* Card Info */}
                                <div className="p-4 flex flex-col gap-2.5">
                                    {/* Name */}
                                    <h3 className="bg-linear-to-b from-[#426ACC] to-[#8EAFFF] bg-clip-text text-transparent font-semibold text-lg">
                                        {student.name}
                                    </h3>

                                    {/* Placed In */}
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs dark:text-stone-400 text-stone-500">
                                            Placed in :
                                        </span>
                                        <img
                                            src={student.placedIn.logo}
                                            alt={student.placedIn.name}
                                            className="h-5 object-contain invert dark:invert-0 opacity-80"
                                        />
                                    </div>

                                    {/* Skills */}
                                    <div className="flex items-center gap-1.5 flex-wrap">
                                        <span className="text-xs dark:text-stone-400 text-stone-500">
                                            Skills :
                                        </span>
                                        {student.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="text-[11px] px-2.5 py-0.5 rounded-full border border-white/15 dark:text-stone-300 text-stone-600"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                        {student.moreSkills > 0 && (
                                            <span className="text-[11px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400">
                                                +{student.moreSkills}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HomePlacedStudents;