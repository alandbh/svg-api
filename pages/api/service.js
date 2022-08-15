const score = {
    score1: 3,
    score2: 4,
    score3: 3,
    score4: 2,
};
const result = {
    score1: 2,
    score2: 4,
    score3: 1,
    score4: 1,
};
const chartWidth = 400;

export default function chartService(req) {
    const { g1 = 1, g2 = 1, g3 = 1, g4 = 1, r = 1 } = req;

    function getOpacity(score) {
        if (!score || score < 1) {
            return 0;
        } else if (score > 4) {
            return 1;
        } else if (score >= 1 && score <= 1.6) {
            return 0;
        } else if (score > 1.6 && score <= 2.4) {
            return 0.3;
        } else if (score > 2.4 && score <= 3.4) {
            return 0.75;
        } else if (score > 3.4 && score <= 4) {
            return 1;
        }

        return score / 4;
    }

    const squareWidth = chartWidth;

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

    // return `<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
    // <ellipse cx="100" cy="50" rx="100" ry="50" />
    // </svg>`;

    const svg3 = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" fill="none" viewBox="0 0 300 300"><mask id="mask0_395_5" style="mask-type:alpha" width="300" height="300" x="0" y="0" maskUnits="userSpaceOnUse"><path fill="#cc0000" stroke="none" d="M 50 50 L 300 0 L 250 250 L 100 200 L 50 50 Z"></path></mask><g mask="url(#mask0_395_5)"><path fill="#666" d="M0 0H 300 V 300 H0z"></path><g fill="red" filter="url(#filter0_f_395_5)"><path fill-opacity="0.33" d="M-150 -150H150V150H-150z"></path><path fill-opacity="1" d="M150 -150H450V150H150z"></path><path fill-opacity="0" d="M150 150H450V450H150z"></path><path fill-opacity="0" d="M-150 150H150V450H-150z"></path></g></g><defs><filter id="filter0_f_395_5" width="750" height="750" x="-225" y="-225" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur result="effect1_foregroundBlur_395_5" stdDeviation="30"></feGaussianBlur></filter></defs></svg>
    `;

    const svg4 = `<svg
            xmlns="http://www.w3.org/2000/svg"
            width="${squareWidth}"
            height="${squareWidth}"
            fill="none"
            viewBox="0 0 ${squareWidth} ${squareWidth}"
        >
            <mask
                id="mask0_395_5"
                style="mask-type: alpha"
                width="${squareWidth}"
                height="${squareWidth}"
                x="0"
                y="0"
                maskUnits="userSpaceOnUse"
            >
                <path
                    fill="${fill}"
                    stroke="${stroke}"
                    d="M ${scoreMap.score1[g1]} L ${scoreMap.score2[g2]} L ${
        scoreMap.score3[g3]
    } L ${scoreMap.score4[g4]} L ${scoreMap.score1[g1]} Z"
                ></path>
            </mask>
            <g mask="url(#mask0_395_5)">
                <path
                    fill="#666"
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

    return svg4;
}
