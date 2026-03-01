import React from 'react'
import GradientBorderCTA from '../custom/GradientBorderCTA'

type Props = {}

function EndAsker({ }: Props) {
    return (
        <div className='container max-w-7xl m-auto py-10'>
            <div className="w-full  px-10 py-16 relative bg-blue-900/25 rounded-2xl inline-flex flex-col justify-start items-center gap-8 overflow-hidden">
                <div className="size-120 left-[50%] top-[-80.69px] absolute bg-blue-950 rounded-full blur-[250px] transform -translate-x-1/2" />
                <img className='absolute left-0 top-0 h-full' src="/creatives/l1.svg" alt="" />
                <img className='absolute right-0 top-0 h-full' src="/creatives/r1.svg" alt="" />

                <div className=" max-w-[70%] mx-auto my-5 absolute inset-0">
                    <img className='absolute left-0 top-10 h-10' src="/creatives/web1.svg" alt="" />
                    <img className='absolute right-0 top-10 h-10' src="/creatives/shield2.svg" alt="" />
                    <img className='absolute -left-20 bottom-0 h-10' src="/creatives/rocket1.svg" alt="" />
                    <img className='absolute -right-20 bottom-0 h-10' src="/creatives/bug1.svg" alt="" />
                    <img className='absolute left-1/2 -top-2 h-10' src="/creatives/precision1.svg" alt="" />

                </div>


                <h2 className='text-3xl font-bold text-white z-10 text-center'>
                    Ready to Start Your Cybersecurity Journey?
                </h2>
                <p>
                    Take the first step toward becoming a cyber professional and secure your future with hands-on learning with us.
                </p>


                <GradientBorderCTA
                    text="Book Your Free Demo"
                    colors={[
                        // Vibrant pink and purple, yello, teal, and blue gradients
                        "#FF0080",
                        "#FF4D00",
                        "#2EC4B6",
                        "#F1C40E",
                        "#7928CA",
                        "#0E1934",
                        "#0E1934",
                        "#0E1934",
                        "#0E1934",
                        "#0E1934",
                        "#0E1934",
                        "#0E1934",

                    ]}
                    className='bg-white text-black'
                />



            </div>
        </div>
    )
}

export default EndAsker