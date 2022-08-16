const svgElementWithMask = `<svg
            xmlns="http://www.w3.org/2000/svg"
            width="${squareWidth}"
            height="${squareWidth}"
            fill="#00ff00"
            viewBox="0 0 ${squareWidth} ${squareWidth}"
        >
            <mask
                id="mask0_395_5"
                style="mask-type: alpha"
                width="${squareWidth}"
                height="${squareWidth}"
                x="0"
                y="0"
                fill="#00ff00"
                maskUnits="userSpaceOnUse"
            >
                <path
                    fill="#00ff00"
                    stroke="${stroke}"
                    d="M ${getGCoord("g1", g1)} L ${getGCoord(
    "g2",
    g2
)} L ${getGCoord("g3", g3)} L ${getGCoord("g4", g4)} L ${getGCoord("g1", g1)} Z"
                ></path>
            </mask>
            <g mask="url(#mask0_395_5)">
                <path
                    fill="#999"
                    d="M0 0H ${squareWidth} V ${squareWidth} H0z"
                ></path>
                <g fill="red" filter="url(#filter0_f_395_5)">
                    <path
                        fill-opacity="${getOpacity(r)}"
                        d="M-${halfSquare} -${halfSquare}H${halfSquare}V${halfSquare}H-${halfSquare}z"
                    ></path>
                    <path
                        fill-opacity="${getOpacity(r)}"
                        d="M${halfSquare} -${halfSquare}H${
    halfSquare * 3
}V${halfSquare}H${halfSquare}z"
                    ></path>
                    <path
                        fill-opacity="${getOpacity(r)}"
                        d="M${halfSquare} ${halfSquare}H${halfSquare * 3}V${
    halfSquare * 3
}H${halfSquare}z"
                    ></path>
                    <path
                        fill-opacity="${getOpacity(r)}"
                        d="M-${halfSquare} ${halfSquare}H${halfSquare}V${
    halfSquare * 3
}H-${halfSquare}z"
                    ></path>
                </g>
            </g>
            <defs>
                <filter
                    id="filter0_f_395_5"
                    width="${halfSquare * 5}"
                    height="${halfSquare * 5}"
                    x="${-halfSquare * 1.5}"
                    y="${-halfSquare * 1.5}"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood
                        floodOpacity="0"
                        result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    ></feBlend>
                    <feGaussianBlur
                        result="effect1_foregroundBlur_395_5"
                        stdDeviation="${squareWidth / 10}"
                    ></feGaussianBlur>
                </filter>
            </defs>
        </svg>`;
