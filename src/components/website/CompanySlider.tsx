import React from 'react'
import AutoPlaySlider from '../custom/AutoPlaySlider'

type Props = {}

function CompanySlider({ }: Props) {
    return (
        <div className='dark:bg-black py-20'>
            <div data-layer="Trusted by 150+ Leading Companies" className=" text-center justify-start"><span className="text-zinc-800 dark:text-zinc-300 text-4xl font-bold  ">Trusted by </span><span className="bg-linear-to-b from-[#426ACC] to-[#8EAFFF] bg-clip-text text-transparent text-4xl font-bold  ">150+</span><span className="text-zinc-800 dark:text-zinc-300 text-4xl font-bold  "> Leading Companies</span></div>
            <div data-layer="We collaborate with top companies to ensure you land where you deserve." className="WeCollaborateWithTopCompaniesToEnsureYouLandWhereYouDeserve  text-center justify-start text-zinc-800 dark:text-zinc-300 text-xl font-normal  leading-8">We collaborate with top companies to ensure you land where you deserve.</div>


            <AutoPlaySlider
                className='mt-20'
                components={[
                    <img src="/assets/company-logos/amazon.png" alt="Amazon" className='w-40 grayscale' />,
                    <img src="/assets/company-logos/google.png" alt="Google" className='w-40 grayscale' />,
                    <img src="/assets/company-logos/microsoft.png" alt="Microsoft" className='w-40 grayscale' />,
                    <img src="/assets/company-logos/facebook.png" alt="Facebook" className='w-40 grayscale' />,
                    <img src="/assets/company-logos/apple.png" alt="Apple" className='w-40 grayscale' />,
                    <img src="/assets/company-logos/ibm.png" alt="IBM" className='w-40 grayscale' />,
                    <img src="/assets/company-logos/oracle.png" alt="Oracle" className='w-40 grayscale' />,
                    <img src="/assets/company-logos/salesforce.png" alt="Salesforce" className='w-40 grayscale' />,
                ]}
            />
        </div>
    )
}

export default CompanySlider