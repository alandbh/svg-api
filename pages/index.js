import Chart from "../components/Chart";
import { useState } from "react";

const initialScore = {
    score1: 3,
    score2: 4,
    score3: 3,
    score4: 2,
};
const initialScoreResult = {
    score1: 2,
    score2: 4,
    score3: 1,
    score4: 1,
};

export default function App() {
    const [score, setScore] = useState({ ...initialScore });
    const [scoreResult, setScoreResult] = useState({ ...initialScoreResult });
    const [decimal, setDecimal] = useState(0);

    function handleChangeRange(ev, scoreNumber) {
        let newScore = { ...score };
        newScore[scoreNumber] = Number(ev.target.value);

        setScore(newScore);
    }

    function handleChangeResult(ev, scoreNumber) {
        let newScoreResult = { ...scoreResult };
        newScoreResult[scoreNumber] = Number(ev.target.value);

        setScoreResult(newScoreResult);
    }

    const [chartWidth, setChartWidth] = useState(300);
    const [widthValue, setWidthValue] = useState(300);

    // let changeWidthDebouce;

    const handleChangeWidth = (ev) => {
        if (ev.key === "Enter") {
            setChartWidth(Number(ev.target.value));
        }
        // clearTimeout(changeWidthDebouce);

        // changeWidthDebouce = setTimeout(() => {}, 1000);
    };

    const [classToaster, setClassToaster] = useState("");

    function handleCopy() {
        const svgWrapper = document.querySelector(".svgWrapper");

        navigator.clipboard.writeText(svgWrapper.innerHTML);

        setClassToaster("on");

        setTimeout(() => {
            setClassToaster("off");
        }, 2000);

        setTimeout(() => {
            setClassToaster("");
        }, 2500);
    }

    function getGCoord(axis, score) {
        const axisMapping = {
            g1x: chartWidth / 2 - ((chartWidth / 2) * score) / 4,
            g1y: chartWidth / 2 - ((chartWidth / 2) * score) / 4,
            g2x: ((chartWidth / 2) * score) / 4 + chartWidth / 2,
            g2y: chartWidth / 2 - (chartWidth / 2 / 4) * score,
            g3x: ((chartWidth / 2) * score) / 4 + chartWidth / 2,
            g3y: chartWidth / 2 + (chartWidth / 2 / 4) * score,
            g4x: chartWidth / 2 - ((chartWidth / 2) * score) / 4,
            g4y: chartWidth / 2 + (chartWidth / 2 / 4) * score,
        };
        return axisMapping[axis].toFixed(2);
    }

    return (
        <div className="App">
            <div className="chartWrapper">
                <h3>⚠️ This approach is no longer accepted</h3>
                <div className="width-wrapper">
                    <label htmlFor="chartWidth">Chart Width:</label>
                    <div>
                        <input
                            value={widthValue}
                            onChange={(ev) => setWidthValue(ev.target.value)}
                            onKeyDown={(ev) => handleChangeWidth(ev)}
                            type="number"
                        />{" "}
                        px
                    </div>
                </div>
                <div
                    style={{ width: chartWidth, height: chartWidth }}
                    className="svgWrapper"
                >
                    <Chart
                        generate={decimal}
                        score={score}
                        result={scoreResult}
                        width={chartWidth}
                    ></Chart>
                </div>
                <br />
                <button onClick={handleCopy}>Copy This SVG </button>

                <small style={{ marginTop: 7 }}>
                    ...to paste it into Figma
                </small>
                <br />
                <small>(And be happy ❤️)</small>
                <div className={`toaster ${classToaster}`}>
                    Copied to clipboard!
                </div>
            </div>

            <div className="form-container">
                <div className="form">
                    <h1>Generate</h1>
                    <h2>Parameter 1</h2>
                    <input
                        onChange={(ev) => handleChangeRange(ev, "score1")}
                        type="range"
                        min="1"
                        max="4"
                        step="0.1"
                        value={score.score1}
                    />
                    <small>(score: {score.score1})</small>
                    <h2>Parameter 2</h2>
                    <input
                        onChange={(ev) => handleChangeRange(ev, "score2")}
                        type="range"
                        min="1"
                        max="4"
                        step="0.1"
                        value={score.score2}
                    />
                    <small>(score: {score.score2})</small>
                    <h2>Parameter 3</h2>
                    <input
                        onChange={(ev) => handleChangeRange(ev, "score3")}
                        type="range"
                        min="1"
                        max="4"
                        step="0.1"
                        value={score.score3}
                    />
                    <small>(score: {score.score3})</small>
                    <h2>Parameter 4</h2>
                    <input
                        onChange={(ev) => handleChangeRange(ev, "score4")}
                        type="range"
                        min="1"
                        max="4"
                        step="1"
                        value={score.score4}
                    />
                    <small>(score: {score.score4})</small>
                </div>

                <div className="form">
                    <h1>Result</h1>
                    <h2>Parameter 1</h2>
                    <input
                        onChange={(ev) => handleChangeResult(ev, "score1")}
                        type="range"
                        min="1"
                        max="4"
                        step="1"
                        value={scoreResult.score1}
                    />
                    <small>(score: {scoreResult.score1})</small>
                    <h2>Parameter 2</h2>
                    <input
                        onChange={(ev) => handleChangeResult(ev, "score2")}
                        type="range"
                        min="1"
                        max="4"
                        step="1"
                        value={scoreResult.score2}
                    />
                    <small>(score: {scoreResult.score2})</small>
                    <h2>Parameter 3</h2>
                    <input
                        onChange={(ev) => handleChangeResult(ev, "score3")}
                        type="range"
                        min="1"
                        max="4"
                        step="1"
                        value={scoreResult.score3}
                    />
                    <small>(score: {scoreResult.score3})</small>
                    <h2>Parameter 4</h2>
                    <input
                        onChange={(ev) => handleChangeResult(ev, "score4")}
                        type="range"
                        min="1"
                        max="4"
                        step="1"
                        value={scoreResult.score4}
                    />
                    <small>(score: {scoreResult.score4})</small>
                    <br />
                </div>
            </div>
        </div>
    );
}
