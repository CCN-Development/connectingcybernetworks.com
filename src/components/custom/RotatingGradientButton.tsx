type Props = {
    text: string;
    onClick?: () => void;
    colors?: string[];
    borderWidth?: number;
    duration?: number;
    className?: string;
    textBgColor?: string;
    textBgHoverColor?: string;
    buttonShadowColor?: string;
};

function RotatingGradientButton({
    text,
    onClick,
    colors = ["#6366f1", "#22d3ee", "#a855f7", "#6366f1"],
    borderWidth = 2,
    duration = 3,
    className = "",
    textBgColor = "#0E1934",
    textBgHoverColor = "#2F53AD",
    buttonShadowColor 
}: Props) {
    const colorStops = [...colors, colors[0]].join(", ");
    const conicGradient = `conic-gradient(from 0deg, ${colorStops})`;

    return (
        <button
            onClick={onClick}
            style={{ padding: borderWidth, boxShadow: buttonShadowColor ? `0 0 10px ${buttonShadowColor}` : "none" }}
            className={`relative overflow-hidden rounded-4xl cursor-pointer  ${className} ${buttonShadowColor ? ` shadow-[0 0 10px ${buttonShadowColor}]` : ""}`}

        >
            <span
                aria-hidden="true"
                style={{
                    background: conicGradient,
                    animationDuration: `${duration}s`,
                }}
                className="absolute inset-0 scale-300 animate-spin rounded-full"
            />

            <span className={`relative z-10 flex items-center justify-center gap-2 rounded-4xl bg-[#0E1934] px-5 py-1.5 text-sm font-semibold text-base-content transition-colors hover:bg-[${textBgHoverColor}] active:bg-base-300`}>
                {text}
            </span>
        </button>
    );
}

export default RotatingGradientButton;



