import React from 'react'
import RadialGradientComb from '../custom/RadialGradientComb'

type Props = {}

function Benefits({ }: Props) {
    return (
        <div className='relative'>

            <div className='min-h-screen   py-10'>
                <img src="/creatives/curver1.svg" className='absolute top-0 left-[-3%] h-[80%]' alt="" />
                <RadialGradientComb className='absolute top-[10%] left-[-40%] w-[500px] h-[500px]' />
                <RadialGradientComb className='absolute bottom-[40%] right-[0%] w-[500px] h-[500px]' />
                <img src="/creatives/curve2.svg" className='absolute bottom-[150px] right-0 h-[400px]' alt="" />
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-5 items-start">
                    {/* Left Side */}
                    <div className="flex items-start flex-col gap-4 md:sticky md:top-20">
                        <div className=" rounded-full flex items-center justify-center">
                            <div className=" px-6 md:py-1 dark:bg-[#0E1116] rounded-[99px] outline-2 -outline-offset-2 outline-teal-400 inline-flex justify-center items-center gap-2.5">
                                <div data-layer="Benefits" className="Benefits justify-start text-teal-400 text-xs md:text-md font-normal leading-7">Benefits</div>
                            </div>
                        </div>
                        <div>
                            <div data-layer="Why We're the Smart Choice" className="justify-start"><span className="dark:text-zinc-300 text-4xl font-semibold ">Why We&apos;re the </span><span className="bg-linear-to-b from-[#426ACC] to-[#8EAFFF] bg-clip-text text-transparent text-4xl font-semibold ">Smart Choice</span></div>
                            <div data-layer="Learn by doing. Grow for life. Get placed for sure." className="justify-start dark:text-stone-300 md:text-lg leading-7">Learn by doing. Grow for life. Get placed for sure.</div>
                        </div>

                        <div className=" grid grid-cols-1 md:grid-cols-2 bg-[#24408220] w-full p-5 rounded-lg backdrop-blur-xl">
                            <div className=' absolute left-[49.9%] h-full w-[1px] bg-gradient-to-b from-[#00000000] via-[#ffffff55] to-[#00000000] rounded-full self-start hidden md:block' />
                            <div className=' absolute top-[49.9%] w-full h-[1px] bg-gradient-to-r from-[#00000000] via-[#ffffff55] to-[#00000000] rounded-full self-start hidden md:block' />
                            <div className="flex items-start gap-4 flex-col p-5">
                                <h4 className='font-bold text-xl'>
                                    20+
                                </h4>
                                <p>
                                    Courses
                                </p>
                            </div>
                            <div className="flex items-start gap-4 flex-col p-5">
                                <h4 className='font-bold text-xl'>
                                    1000+
                                </h4>
                                <p>
                                    Students Placed
                                </p>
                            </div>
                            <div className="flex items-start gap-4 flex-col p-5">
                                <h4 className='font-bold text-xl'>
                                    200+
                                </h4>
                                <p>
                                    Placement Partner
                                </p>
                            </div>
                            <div className="flex items-start gap-4 flex-col p-5">
                                <h4 className='font-bold text-xl'>
                                    10+
                                </h4>
                                <p>
                                    Certifications
                                </p>
                            </div>




                        </div>

                    </div>
                    {/* Right Side */}
                    <div className="flex items-start gap-4 flex-col">
                        <div className="hover-3d">

                            <div data-layer="Why CCN Card" className="card self-stretch p-10 relative bg-white/5 rounded-md border-t border-white/10 inline-flex flex-col justify-start items-start gap-6 overflow-hidden">
                                <div className=" relative">
                                    <img src="/creatives/shield1.svg" alt="" />
                                </div>
                                <div data-layer="Frame 1707478631" className="self-stretch flex flex-col justify-start items-start gap-3">
                                    <div className="self-stretch justify-start  text-xl font-semibold leading-8">Guaranteed Placement</div>
                                    <div data-layer="We don’t just promise—we commit in writing. Your job is 100% guaranteed, or your fees are refunded." className="self-stretch justify-start text-zinc-800 dark:text-zinc-300 text-base font-normal  leading-6">We don’t just promise—we commit in writing. Your job is 100% guaranteed, or your fees are refunded.</div>
                                </div>
                                <div data-layer="Rectangle 13" className="Rectangle13 w-[789px] h-28 left-[-34px] top-[-72px] absolute bg-gradient-to-b from-blue-800 to-blue-800/0 blur-3xl" />
                            </div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>

                        </div>

                        <div className="hover-3d">

                            <div data-layer="Why CCN Card" className="card self-stretch p-10 relative bg-white/5 rounded-md border-t border-white/10 inline-flex flex-col justify-start items-start gap-6 overflow-hidden">
                                <div className=" relative">
                                    <img src="/creatives/infi1.svg" alt="" />
                                </div>
                                <div data-layer="Frame 1707478631" className="self-stretch flex flex-col justify-start items-start gap-3">
                                    <div className=" self-stretch justify-start  text-xl font-semibold leading-8">Learn by Doing</div>
                                    <div data-layer="We don’t just promise—we commit in writing. Your job is 100% guaranteed, or your fees are refunded." className=" self-stretch justify-start text-zinc-800 dark:text-zinc-300 text-base font-normal  leading-6">Master skills through 80% practical, hands-on training with 24/7 lab access, making you industry-ready from day one.</div>
                                </div>
                                <div data-layer="Rectangle 13" className="Rectangle13 w-[789px] h-28 left-[-34px] top-[-72px] absolute bg-gradient-to-b from-blue-800 to-blue-800/0 blur-3xl" />
                            </div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="hover-3d">

                            <div data-layer="Why CCN Card" className="card self-stretch p-10 relative bg-white/5 rounded-md border-t border-white/10 inline-flex flex-col justify-start items-start gap-6 overflow-hidden">
                                <div className=" relative">
                                    <img src="/creatives/badge1.svg" alt="" />
                                </div>
                                <div data-layer="Frame 1707478631" className="self-stretch flex flex-col justify-start items-start gap-3">
                                    <div className=" self-stretch justify-start  text-xl font-semibold leading-8">Lifetime Value</div>
                                    <div data-layer="We don’t just promise—we commit in writing. Your job is 100% guaranteed, or your fees are refunded." className=" self-stretch justify-start text-zinc-800 dark:text-zinc-300 text-base font-normal  leading-6">Free course upgrades, unlimited consultations, and repeat batches anytime—your growth never stops.</div>
                                </div>
                                <div data-layer="Rectangle 13" className="Rectangle13 w-[789px] h-28 left-[-34px] top-[-72px] absolute bg-gradient-to-b from-blue-800 to-blue-800/0 blur-3xl" />
                            </div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="hover-3d">

                            <div data-layer="Why CCN Card" className="card self-stretch p-10 relative bg-white/5 rounded-md border-t border-white/10 inline-flex flex-col justify-start items-start gap-6 overflow-hidden">
                                <div className=" relative">
                                    <img src="/creatives/bag1.svg" alt="" />
                                </div>
                                <div data-layer="Frame 1707478631" className="self-stretch flex flex-col justify-start items-start gap-3">
                                    <div className=" self-stretch justify-start  text-xl font-semibold leading-8">Expert Mentorship</div>
                                    <div data-layer="We don’t just promise—we commit in writing. Your job is 100% guaranteed, or your fees are refunded." className=" self-stretch justify-start text-zinc-800 dark:text-zinc-300 text-base font-normal  leading-6">Learn directly from certified industry professionals who bring real-world insights, not just theory.</div>
                                </div>
                                <div data-layer="Rectangle 13" className="Rectangle13 w-[789px] h-28 left-[-34px] top-[-72px] absolute bg-gradient-to-b from-blue-800 to-blue-800/0 blur-3xl" />
                            </div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="hover-3d">

                            <div data-layer="Why CCN Card" className="card self-stretch p-10 relative bg-white/5 rounded-md border-t border-white/10 inline-flex flex-col justify-start items-start gap-6 overflow-hidden">
                                <div className=" relative">
                                    <img src="/creatives/shield1.svg" alt="" />
                                </div>
                                <div data-layer="Frame 1707478631" className="self-stretch flex flex-col justify-start items-start gap-3">
                                    <div className=" self-stretch justify-start  text-xl font-semibold leading-8">Career-Ready Skills</div>
                                    <div data-layer="We don’t just promise—we commit in writing. Your job is 100% guaranteed, or your fees are refunded." className=" self-stretch justify-start text-zinc-800 dark:text-zinc-300 text-base font-normal  leading-6">Build confidence with soft skills training, mock interviews, and globally recognized certifications that employers value.</div>
                                </div>
                                <div data-layer="Rectangle 13" className="Rectangle13 w-[789px] h-28 left-[-34px] top-[-72px] absolute bg-gradient-to-b from-blue-800 to-blue-800/0 blur-3xl" />
                            </div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Benefits