export default function chartService(req) {
    const {
        g1 = 1,
        g2 = 1,
        g3 = 1,
        g4 = 1,
        r = 1,
        size = 400,
        bg = "777",
    } = req;
    // const chartWidth = size;

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

    const halfSquare = size / 2;

    let fill = "#cc0000";
    let stroke = "none";

    if (g1 === 1 && g2 === 1 && g3 === 1 && g4 === 1) {
        fill = "#cc000000";
        stroke = "#000000";
    }

    function getGCoord(quadrant, score) {
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

    const svgElement = `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M ${getGCoord("g1", g1)} L ${getGCoord(
        "g2",
        g2
    )} L ${getGCoord("g3", g3)} L ${getGCoord("g4", g4)} L ${getGCoord(
        "g1",
        g1
    )} Z" fill="#${bg}"/>
        <path d="M ${getGCoord("g1", g1)} L ${getGCoord(
        "g2",
        g2
    )} L ${getGCoord("g3", g3)} L ${getGCoord("g4", g4)} L ${getGCoord(
        "g1",
        g1
    )} Z" fill="#FF0000" fill-opacity="${getOpacity(r)}"/>
    </svg>
    `;

    return svgElement;
}
