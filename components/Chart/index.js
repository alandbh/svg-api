import { useEffect } from "react";
let widthTimeout;
let squareWidth;

export default function Chart({ generate, score, result, width }) {
    squareWidth = width;
    useEffect(() => {
        clearTimeout(widthTimeout);

        widthTimeout = setTimeout(() => {}, 1000);
    }, [width]);
    const halfSquare = squareWidth / 2;
    const oneSixth = squareWidth / 6;
    const oneThird = squareWidth / 3;

    const offSet = squareWidth / 10;
    const scoreMap = {
        score1: {
            1: `${halfSquare - offSet} ${halfSquare - offSet}`,
            2: `${halfSquare - oneSixth} ${halfSquare - oneSixth}`,
            3: `${halfSquare - oneThird} ${halfSquare - oneThird}`,
            4: `0 0`,
        },
        score2: {
            1: `${halfSquare + offSet} ${halfSquare - offSet}`,
            2: `${halfSquare + oneSixth} ${halfSquare - oneSixth}`,
            3: `${halfSquare + oneThird} ${halfSquare - oneThird}`,
            4: `${squareWidth} 0`,
        },
        score3: {
            1: `${halfSquare + offSet} ${halfSquare + offSet}`,
            2: `${halfSquare + oneSixth} ${halfSquare + oneSixth}`,
            3: `${halfSquare + oneThird} ${halfSquare + oneThird}`,
            4: `${squareWidth} ${squareWidth}`,
        },
        score4: {
            1: `${halfSquare - offSet} ${halfSquare + offSet}`,
            2: `${halfSquare - oneSixth} ${halfSquare + oneSixth}`,
            3: `${halfSquare - oneThird} ${halfSquare + oneThird}`,
            4: `0 ${squareWidth}`,
        },
    };

    const opacityMap = {
        1: "0",
        2: "0.33",
        3: "0.66",
        4: "1",
    };

    const scoreResultMap = {
        score1: opacityMap,
        score2: opacityMap,
        score3: opacityMap,
        score4: opacityMap,
    };

    let fill = "#cc0000";
    let stroke = "none";

    if (
        score.score1 === 1 &&
        score.score2 === 1 &&
        score.score3 === 1 &&
        score.score4 === 1
    ) {
        fill = "#cc0000";
        stroke = "#000000";
    }

    function getGCoord(quadrant, score) {
        const quadrantMapping = {
            g1: `${width / 2 - ((width / 2) * score) / 4} ${
                width / 2 - (width / 2 / 4) * score
            }`,
            g2: `${((width / 2) * score) / 4 + width / 2} ${
                width / 2 - (width / 2 / 4) * score
            }`,
            g3: `${((width / 2) * score) / 4 + width / 2} ${
                width / 2 + (width / 2 / 4) * score
            }`,
            g4: `${width / 2 - ((width / 2) * score) / 4} ${
                width / 2 + (width / 2 / 4) * score
            }`,
        };
        return quadrantMapping[quadrant];
    }

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={squareWidth}
            height={squareWidth}
            fill="none"
            viewBox={`0 0 ${squareWidth} ${squareWidth}`}
        >
            <mask
                id="mask0_395_5"
                style={{ maskType: "alpha" }}
                width={squareWidth}
                height={squareWidth}
                x="0"
                y="0"
                maskUnits="userSpaceOnUse"
            >
                <path
                    fill={fill}
                    stroke={stroke}
                    d={`M ${getGCoord("g1", score.score1)} L ${getGCoord(
                        "g2",
                        score.score2
                    )} L ${getGCoord("g3", score.score3)} L ${getGCoord(
                        "g4",
                        score.score4
                    )} L ${getGCoord("g1", score.score1)} Z`}
                ></path>
            </mask>
            <g mask="url(#mask0_395_5)">
                <path
                    fill="#999"
                    d={`M0 0H ${squareWidth} V ${squareWidth} H0z`}
                ></path>
                <g fill="red" filter="url(#filter0_f_395_5)">
                    <path
                        fillOpacity={scoreResultMap.score1[result.score1]}
                        d={`M-${halfSquare} -${halfSquare}H${halfSquare}V${halfSquare}H-${halfSquare}z`}
                    ></path>
                    <path
                        fillOpacity={scoreResultMap.score2[result.score2]}
                        d={`M${halfSquare} -${halfSquare}H${
                            halfSquare * 3
                        }V${halfSquare}H${halfSquare}z`}
                    ></path>
                    <path
                        fillOpacity={scoreResultMap.score3[result.score3]}
                        d={`M${halfSquare} ${halfSquare}H${halfSquare * 3}V${
                            halfSquare * 3
                        }H${halfSquare}z`}
                    ></path>
                    <path
                        fillOpacity={scoreResultMap.score4[result.score4]}
                        d={`M-${halfSquare} ${halfSquare}H${halfSquare}V${
                            halfSquare * 3
                        }H-${halfSquare}z`}
                    ></path>
                </g>
            </g>
            <defs>
                <filter
                    id="filter0_f_395_5"
                    width={halfSquare * 5}
                    height={halfSquare * 5}
                    x={-halfSquare * 1.5}
                    y={-halfSquare * 1.5}
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
                        stdDeviation={squareWidth / 10}
                    ></feGaussianBlur>
                </filter>
            </defs>
        </svg>
    );
}
