import { useEffect, useState } from "react";
import "./styles.css";

function Main() {
    const [colors, setColors] = useState([]);
    const [timer, setTimer] = useState(5);
    const [filled, setFilled] = useState(100);
    const [isRunning, setIsRunning] = useState(false);


    useEffect(() => {
        if (isRunning) {
            if (timer > 0) {
                setTimeout(() => {
                    setTimer(prev => prev -= 1);
                    setFilled(prev => prev -= 20);
                }, 1000);
            }

            if (timer === 0) {
                setTimeout(() => {
                    setTimer(5);
                    setFilled(100);
                    generateColors();
                }, 1000);
            }
        }


    }, [timer, isRunning]);

    function handleTimer() {
        setIsRunning(true);
        generateColors();
    }

    function generateColors() {
        const colorsArray = [];
        const correctColor = Math.floor(Math.random() * 16777215).toString(16);
        colorsArray.push({
            "hex": correctColor,
            "correct": true
        });

        for (let index = 0; index < 2; index++) {
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            colorsArray.push({
                "hex": randomColor,
                "correct": false
            });

        }

        console.log(colorsArray);

        setColors(colorsArray);
    }

    function getCorrectColor() {
        const correctColor = colors.find(color => color.correct);

        return correctColor?.hex;
    }

    function verificColor(color) {
        if (color.correct) {
            return alert("acertou");
        }
        return alert("errouuu");
    }

    return (
        <main>
            <div className="title">
                <h1>Guess the color</h1>
            </div>

            <div className="main-informations">
                <div className="remaning-time">
                    <span>REMAINING TIME (s)</span>
                    <span>{timer}</span>
                </div>

                <button className="button-restart">RESTART</button>

                <div className="score-information">
                    <div className="high-score">
                        <span>HIGH SCORE</span>
                        <span>13</span>
                    </div>
                    <div className="score">
                        <span>SCORE</span>
                        <span>12</span>
                    </div>
                </div>
            </div>

            <div className="select-color">
                <div className="time-bar">
                    <div style={{
                        height: "100%",
                        width: `${filled}%`,
                        backgroundColor: "#a0a7b0",
                        transition: "width 1s"
                    }}>

                    </div>
                </div>


                <div className="color-to-guess" >
                    <div className="color" style={
                        isRunning ?
                            { opacity: "1", background: `#${getCorrectColor()}` } :
                            { opacity: "0.5", background: "#f9bc6b" }
                    }></div>
                    <button
                        className="button-start"
                        style={
                            isRunning ? { display: "none" } : { display: "block" }
                        }
                        onClick={() => handleTimer()}
                    >
                        Start
                    </button>
                </div>

            </div>

            {
                colors &&
                (
                    <div className="color-options">
                        {
                            colors.map((color) => {
                                return (
                                    <button key={color.hex} className="button-option" onClick={() => verificColor(color)}>#{color.hex}</button>
                                );
                            })
                        }

                    </div>
                )
            }

        </main>
    );
}

export default Main;