import React from 'react'

type Props = {
    className?: string
    gradientWidth?: number
}

function RadialGradientComb({ className, gradientWidth }: Props) {
    return (
        <div className={`${className}`} style={{ width: gradientWidth, height: gradientWidth }}>
            <div data-layer="Blob gradient behind student" className={`w-[1105.06px] max-w-dvw h-[1061.22px] left-0 top-0 absolute opacity-20 blur-[200px] max-h-dvh overflow-hidden`}>
                <div data-svg-wrapper data-layer="Vector" className="Vector left-0 top-[51.17px] absolute">
                    <svg width="593" height="562" viewBox="0 0 593 562" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.38766 318.425C-16.741 231.214 13.2489 127.64 79.538 65.2362C140.685 7.67398 235.208 34.4579 318.863 27.0908C396.635 20.2417 486.71 -28.557 544.152 24.3195C601.323 76.9457 552.284 170.653 558.925 248.073C565.023 319.163 615.231 390.25 580.907 452.803C543.923 520.205 464.028 557.758 387.215 561.009C315.129 564.061 261.193 507.888 200.479 468.906C129.555 423.369 33.5772 399.163 9.38766 318.425Z" fill="#2EC4B6" />
                    </svg>
                </div>
                <div data-svg-wrapper data-layer="Vector" className="Vector left-[140.55px] top-[389.92px] absolute">
                    <svg width="676" height="572" viewBox="0 0 676 572" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M84.737 289.503C71.2703 201.154 -37.3368 115.209 13.4247 41.6553C63.677 -31.16 180.58 10.9435 268.114 23.7897C327.444 32.4966 368.618 75.6556 422.627 101.708C506.151 141.997 630.471 129.144 664.972 215.221C700.328 303.429 637.729 404.914 571.459 473.025C511.317 534.838 421.482 542.618 335.918 553.417C250.584 564.187 147.766 596.288 88.4695 533.986C30.0563 472.611 97.5045 373.264 84.737 289.503Z" fill="#8C24FF" />
                    </svg>
                </div>
                <div data-svg-wrapper data-layer="Vector" className="Vector left-[381.63px] top-[95.86px] absolute">
                    <svg width="469" height="614" viewBox="0 0 469 614" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.375849 363.312C-5.63363 278.897 61.4555 211.52 119.96 150.371C170.714 97.3223 233.388 65.1418 304.199 45.7551C391.362 21.8919 499.219 -33.879 564.432 28.6837C630.185 91.7655 551.796 200.903 560.466 291.609C568.544 376.136 654.758 457.453 612.448 531.072C569.426 605.929 462.726 605.097 376.625 611.489C296.543 617.434 216.542 609.657 149.509 565.441C76.8486 517.514 6.5568 450.136 0.375849 363.312Z" fill="#F1C40E" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default RadialGradientComb