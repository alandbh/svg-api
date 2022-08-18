export default function ideaService(req) {
    const {
        g1 = 1,
        g2 = 1,
        g3 = 1,
        g4 = 1,
        r = 1,
        size = 336,
        bg = "ccc",
        red = "ff0000",
    } = req;
    // const chartWidth = size;

    function getOpacity(score) {
        if (!score || score <= 1) {
            return 0;
        } else if (score > 4) {
            return 1;
        }

        return score / 4;
    }

    function getCornerOpacity(score) {
        return score < 1 ? 0 : 1;
    }

    const halfSquare = size / 2;

    function getGCoord(quadrant) {
        let score = req[quadrant];
        if (score > 4) {
            score = 4;
        } else if (score < 1) {
            score = 1;
        }

        const quadrantMapping = {
            g1: `${halfSquare - (halfSquare * score) / 4} ${
                halfSquare - (halfSquare / 4) * score
            }`,
            g2: `${(halfSquare * score) / 4 + halfSquare} ${
                halfSquare - (halfSquare / 4) * score
            }`,
            g3: `${(halfSquare * score) / 4 + halfSquare} ${
                halfSquare + (halfSquare / 4) * score
            }`,
            g4: `${halfSquare - (halfSquare * score) / 4} ${
                halfSquare + (halfSquare / 4) * score
            }`,
        };
        return quadrantMapping[quadrant];
    }

    const svgIdea = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_465_51)">
    <g clip-path="url(#clip1_465_51)">
    <rect width="${size}" height="${size}" fill="black"/>
    <path d="M1.67993 1.00977L335.03 335.244" stroke="#2E2E2E" stroke-width="1.3456"/>
    <path d="M1.44666 335.713L335.275 0.999649" stroke="#2E2E2E" stroke-width="1.3456"/>
    </g>
    <rect x="0.619235" y="0.619235" width="334.762" height="334.762" stroke="#2E2E2E" stroke-width="1.23847"/>
    <path d="M ${getGCoord("g1")} L${getGCoord("g2")}L${getGCoord(
        "g3"
    )}L${getGCoord("g4")}L${getGCoord("g1")}Z" fill="#${bg}"/>
    <path d="M${getGCoord("g1")}L${getGCoord("g2")}L${getGCoord(
        "g3"
    )}L${getGCoord("g4")}L${getGCoord(
        "g1"
    )}Z" fill="#${red}" fill-opacity="${getOpacity(r)}"/>
    <path d="M0 ${size - 4}H4V336H0L0 ${size - 4}Z" fill="#666666"/>
    <path d="M${size - 4} ${size - 4}H336V336H${size - 4}V${
        size - 4
    }Z" fill="#666666"/>
    <path d="M${size - 4} 0L336 0V4H${size - 4}V0Z" fill="#666666"/>
    <path d="M0 0L4 0V4H0L0 0Z" fill="#666666"/>
    <path d="M0 0L4 0V4H0L0 0Z" fill="white" fill-opacity="${getCornerOpacity(
        g1
    )}"/>
    <path d="M${size - 4} 0L336 0V4H${
        size - 4
    }V0Z" fill="white" fill-opacity="${getCornerOpacity(g2)}"/>
    <path d="M${size - 4} ${size - 4}H336V336H${size - 4}V${
        size - 4
    }Z" fill="white" fill-opacity="${getCornerOpacity(g3)}"/>
    <path d="M0 ${size - 4}H4V336H0L0 ${
        size - 4
    }Z" fill="white" fill-opacity="${getCornerOpacity(g4)}"/>
    </g>
    <defs>
    <clipPath id="clip0_465_51">
    <rect width="${size}" height="${size}" fill="white"/>
    </clipPath>
    <clipPath id="clip1_465_51">
    <rect width="${size}" height="${size}" fill="white"/>
    </clipPath>
    </defs>
    </svg>    
    `;

    return svgIdea;
}
