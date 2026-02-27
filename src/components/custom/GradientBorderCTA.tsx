import React from 'react'

type Props = {
    text: string;
    onClick?: () => void;
    colors?: string[];
    borderWidth?: number;
    className?: string;
    textBgColor?: string;
    textBgHoverColor?: string;
    buttonShadowColor?: string;

}

function GradientBorderCTA({
    text,
    onClick,
    colors = ["#6366f1", "#22d3ee", "#a855f7", "#6366f1"],
    borderWidth = 2,
    className = "",
    textBgColor = "#0E1934",
    textBgHoverColor = "#2F53AD",
    buttonShadowColor
}: Props) {
    const colorStops = [...colors, colors[0]].join(", ");

    return (
        <button
            onClick={onClick}
            style={{ padding: borderWidth, boxShadow: buttonShadowColor ? `0 0 10px ${buttonShadowColor}` : "none" }}
            className={`relative overflow-hidden rounded-4xl cursor-pointer  ${className} ${buttonShadowColor ? ` shadow-[0 0 10px ${buttonShadowColor}]` : ""}`}

        >
            <span
                aria-hidden="true"
                style={{
                    background: `linear-gradient(-175deg,${colorStops})`,
                }}
                className="absolute inset-0  rounded-full"
            />
            <span className={`relative z-10 flex items-center justify-center gap-2 rounded-4xl bg-[black] px-5 py-2 text-sm font-semibold text-base-content transition-colors hover:bg-[${textBgHoverColor}] active:bg-base-300 ${className}`}>
                {text}
            </span>
        </button>
    );

}

export default GradientBorderCTA