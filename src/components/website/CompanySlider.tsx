import React from 'react'
import AutoPlaySlider from '../custom/AutoPlaySlider'

type Props = {}

function CompanySlider({ }: Props) {
    return (
        <div className='dark:bg-black py-20'>
            <div data-layer="Trusted by 150+ Leading Companies" className=" text-center justify-start"><span className="text-zinc-800 dark:text-zinc-300 text-4xl font-bold  ">Trusted by </span><span className="bg-linear-to-b from-[#426ACC] to-[#8EAFFF] bg-clip-text text-transparent text-4xl font-bold  ">150+</span><span className="text-zinc-800 dark:text-zinc-300 text-4xl font-bold  "> Leading Companies</span></div>
            <div data-layer="We collaborate with top companies to ensure you land where you deserve." className="WeCollaborateWithTopCompaniesToEnsureYouLandWhereYouDeserve  text-center justify-start text-zinc-800 dark:text-zinc-300 text-xl font-normal  leading-8">We collaborate with top companies to ensure you land where you deserve.</div>


            <AutoPlaySlider
                className='mt-20 container m-auto'
                components={[
                    <img src="/placement-partners/airtel.png" alt="Airtel" className='h-15 ' />,
                    <img src="/placement-partners/wysetek.png" alt="Wysetek" className='h-15 ' />,
                    <img src="/placement-partners/acl digital.png" alt="ACL Digital" className='h-15 ' />,
                    <img src="/placement-partners/cohesive-technologies.png" alt="Cohesive Technologies" className='h-15 ' />,
                    <img src="/placement-partners/wipro.png" alt="Wipro" className='h-15 ' />,
                    <img src="/placement-partners/brisk.png" alt="Brisk" className='h-15 ' />,
                    <img src="/placement-partners/Cisco_logo-1000px (1).png" alt="Cisco" className='h-15 ' />,
                    <img src="/placement-partners/alphatec.png" alt="Alphatec" className='h-15 ' />,
                ]}
            />
        </div>
    )
}

export default CompanySlider