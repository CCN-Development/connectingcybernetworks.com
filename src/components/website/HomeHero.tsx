import BagSVG from '@/assets/icons/bag.svg'
import ClockSVG from '@/assets/icons/clock.svg'
import LaptopSafeSVG from '@/assets/icons/laptop-safe.svg'
import React from 'react'
import GradientBorderCTA from '../custom/GradientBorderCTA'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'

type Props = {}

function HomeHero({ }: Props) {
    return (
        <div className=" relative flex min-h-screen items-center flex-col gap-5 bg-[url('/backgrounds/mainhero-dark.png')] dark:bg-[url('/backgrounds/mainhero.png')] pt-30 md:pt-25 lg: xl:pt-30 px-10 overflow-hidden" style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>

            <div data-layer="Frame 1707478616" className=" md:hidden     justify-center w-full items-center gap-4">
                <div data-layer="Frame 1707478622" className="Frame1707478622 flex justify-center items-center gap-3 mt-2 bg-white/10 p-3 px-10 rounded-full">
                    <div data-svg-wrapper data-layer="Layer_1" className="Layer1 relative invert dark:invert-0">
                        <BagSVG />
                    </div>
                    <div data-layer="100% Job Placement" className="JobPlacement justify-start text-zinc-800 dark:text-zinc-200 text-xs md:text-base font-medium leading-6">100% Job Placement</div>
                </div>
                <div data-layer="Line 23" className="Line23 w-5 h-0 origin-top-left rotate-90  outline-1 outline-offset-[-0.50px] outline-white/0"></div>
                <div data-layer="Frame 1707478620" className="Frame1707478620 flex justify-center items-center gap-3 mt-2 bg-white/10 p-3 px-10 rounded-full">
                    <div data-svg-wrapper data-layer="Layer_1" className="Layer1 relative invert dark:invert-0">
                        <LaptopSafeSVG />
                    </div>
                    <div data-layer="Hands-on Learning" className="HandsOnLearning justify-start text-zinc-800 dark:text-zinc-200 text-xs md:text-base font-medium leading-6">Hands-on Learning</div>
                </div>
                <div data-layer="Line 24" className="Line24 w-5 h-0 origin-top-left rotate-90  outline-1 outline-offset-[-0.50px] outline-white/0"></div>
                <div data-layer="Frame 1707478621" className="Frame1707478621 flex justify-center items-center gap-3 mt-2 bg-white/10 p-3 px-10 rounded-full">
                    <div data-svg-wrapper data-layer="Layer_1" className="Layer1 relative invert dark:invert-0">
                        <ClockSVG />
                    </div>
                    <div data-layer="24/7 Expert Support" className="7ExpertSupport justify-start text-zinc-800 dark:text-zinc-200 text-xs md:text-base font-medium leading-6">24/7 Expert Support</div>
                </div>
            </div>
            <div data-layer="Frame 1707478616" className="Frame1707478616 hidden md:inline-flex px-6 py-3 bg-black/10 dark:bg-white/10 rounded-[99px]  justify-start items-center gap-4">
                <div data-layer="Frame 1707478622" className="Frame1707478622 flex justify-start items-center gap-3">
                    <div data-svg-wrapper data-layer="Layer_1" className="Layer1 relative invert dark:invert-0">
                        <BagSVG />
                    </div>
                    <div data-layer="100% Job Placement" className="JobPlacement justify-start text-zinc-800 dark:text-zinc-200 text-xs md:text-base font-medium leading-6">100% Job Placement</div>
                </div>
                <div data-layer="Line 23" className="Line23 w-5 h-0 origin-top-left rotate-90  outline-1 outline-offset-[-0.50px] outline-white/0"></div>
                <div data-layer="Frame 1707478620" className="Frame1707478620 flex justify-start items-center gap-3">
                    <div data-svg-wrapper data-layer="Layer_1" className="Layer1 relative invert dark:invert-0">
                        <LaptopSafeSVG />
                    </div>
                    <div data-layer="Hands-on Learning" className="HandsOnLearning justify-start text-zinc-800 dark:text-zinc-200 text-xs md:text-base font-medium leading-6">Hands-on Learning</div>
                </div>
                <div data-layer="Line 24" className="Line24 w-5 h-0 origin-top-left rotate-90  outline-1 outline-offset-[-0.50px] outline-white/0"></div>
                <div data-layer="Frame 1707478621" className="Frame1707478621 flex justify-start items-center gap-3">
                    <div data-svg-wrapper data-layer="Layer_1" className="Layer1 relative invert dark:invert-0">
                        <ClockSVG />
                    </div>
                    <div data-layer="24/7 Expert Support" className="7ExpertSupport justify-start text-zinc-800 dark:text-zinc-200 text-xs md:text-base font-medium leading-6">24/7 Expert Support</div>
                </div>
            </div>
            <div data-layer="Hero Title Text" data-property-1="Frame 427320814" className="HeroTitleText inline-flex justify-center flex-wrap items-center gap-4 z-1">
                <div data-layer="Empowering You in" className="EmpoweringYouIn text-4xl md:text-6xl font-semibold ">Empowering You in</div>
                <span className="text-rotate text-4xl md:text-6xl font-bold ">
                    <span className="">
                        <span className='bg-linear-to-b from-[#426ACC] to-[#8EAFFF] bg-clip-text text-transparent'>Cyber Security</span>
                        <span className='bg-linear-to-b from-[#426ACC] to-[#8EAFFF] bg-clip-text text-transparent'>Ethical Hacking</span>
                        <span className='bg-linear-to-b from-[#426ACC] to-[#8EAFFF] bg-clip-text text-transparent'>Networking</span>
                        <span className='bg-linear-to-b from-[#426ACC] to-[#8EAFFF] bg-clip-text text-transparent'>CCNA</span>
                        <span className='bg-linear-to-b from-[#426ACC] to-[#8EAFFF] bg-clip-text text-transparent'>Palo Alto</span>
                        <span className='bg-linear-to-b from-[#426ACC] to-[#8EAFFF] bg-clip-text text-transparent'>Checkpoint</span>
                    </span>
                </span>
            </div>
            <div data-layer="From beginner to expert, gain skills, confidence, and guaranteed career opportunities in the fast-growing cyber industry." className="FromBeginnerToExpertGainSkillsConfidenceAndGuaranteedCareerOpportunitiesInTheFastGrowingCyberIndustry  text-center justify-start text-zinc-800 dark:text-zinc-300 text-xl font-normalleading-8 z-1">From beginner to expert, gain skills, confidence, and guaranteed career opportunities in the fast-growing cyber industry.</div>



            <div className='flex md:gap-2 flex-wrap md:flex-nowrap justify-center gap-5 items-center z-1'>

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
                    className='px-10 py-4'
                />
                <Button
                    variant="outline"
                    className='px-20 py-6 has-[>svg]:px-10 rounded-full dark:bg-white dark:text-black dark:hover:bg-white'

                >
                    Explore Programs
                    <ArrowRight className='ml-2' />
                </Button>

            </div>


            <div
                className='absolute hidden dark:block inset-0 w-full h-full pointer-events-none z-0 bg-[linear-gradient(to_bottom,transparent_80%,rgba(0,0,0,0.9)_100%)]'
            />
            <img src="/assets/shield.png" alt="Shield" className='  animate-bounce duration-2000 w-40 dark:w-36 absolute bottom-40 dark:bottom-40 dark:md:bottom-30' />
            <div className='dark:hidden' style={{
                width: "6000px",
                height: "6000px",
                background:"white",
                borderRadius:"50%",
                position:"absolute",
                top:"85%",
            }}/>
        </div>
    )
}

export default HomeHero