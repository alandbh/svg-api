export default function galleryService(req) {
    const {
        g1 = 1,
        g2 = 1,
        g3 = 1,
        g4 = 1,
        r = 1,
        size = 220,
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

    function dx(score) {
        if (String(score).length === 3) {
            return -8;
        } else if (String(score).length === 4) {
            return -12;
        }
        return 0;
    }

    const svgGallery = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_464_380)">
    <path d="M ${getGCoord("g1")} L ${getGCoord("g2")} L ${getGCoord(
        "g3"
    )} L ${getGCoord("g4")} L ${getGCoord("g1")} Z" fill="#${bg}"/>
    <path d="M ${getGCoord("g1")} L ${getGCoord("g2")} L ${getGCoord(
        "g3"
    )} L ${getGCoord("g4")} L ${getGCoord(
        "g1"
    )} Z" fill="#${red}" fill-opacity="${getOpacity(r)}"/>
    </g>
    <rect width="3" height="3" fill="black"/>
    <rect x="217" width="3" height="3" fill="black"/>
    <rect x="217" y="217" width="3" height="3" fill="black"/>
    <rect y="217" width="3" height="3" fill="black"/>
    <defs>
    <clipPath id="clip0_464_380">
    <rect width="${size}" height="${size}" fill="white" transform="translate(${size}) rotate(90)"/>
    </clipPath>
    </defs>
    </svg>    
    `;

    return svgGallery;
}
