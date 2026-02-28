import React from 'react'

type Props = {
    components: React.ReactNode[]
    duration?: number
    gap?: number
    pauseOnHover?: boolean,
    className?: string
}

function AutoPlaySlider({
    components,
    duration = 30,
    gap = 24,
    pauseOnHover = true,
    className = "",
}: Props) {
    const items = [...components, ...components]

    return (
        <div className={`relative w-full overflow-hidden ${className}`}>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10 bg-linear-to-r from-white dark:from-black to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10 bg-linear-to-l from-white dark:from-black to-transparent" />

            <div
                className={`flex items-center w-max ${pauseOnHover ? 'hover:paused' : ''}`}
                style={{
                    gap: `${gap}px`,
                    animation: `marquee ${duration}s linear infinite`,
                }}
            >
                {items.map((component, index) => (
                    <div key={index} className="shrink-0">
                        {component}
                    </div>
                ))}
            </div>

            <style>{`
                @keyframes marquee {
                    from { transform: translateX(0); }
                    to   { transform: translateX(-50%); }
                }
            `}</style>
        </div>
    )
}

export default AutoPlaySlider
