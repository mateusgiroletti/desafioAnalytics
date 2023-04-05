import { useEffect, useState } from "react";
import "./styles.css";

function Main() {
    const [colors, setColors] = useState([]);
    const [timer, setTimer] = useState(30);
    const [filled, setFilled] = useState(100);
    const [isRunning, setIsRunning] = useState(false);
    const [historic, setHistoric] = useState([]);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    useEffect(() => {
        if (isRunning) {
            if (timer > 0) {
                setTimeout(() => {
                    setTimer(prev => prev -= 1);
                    setFilled(prev => prev -= 3.33);
                }, 1000);
            }

            if (timer === 0) {
                setScore(prev => prev -= 2);
                setTimeout(() => {
                    setTimer(30);
                    setFilled(100);
                    generateColors();
                }, 1000);
            }
        } else {
            setTimer(30);
            setFilled(100);
            setScore(0);
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

        setColors(colorsArray);
    }

    function getCorrectColor() {
        const correctColor = colors.find(color => color.correct);

        return correctColor?.hex;
    }

    function checkColor(color) {
       
        if (color.correct) {
            console.log("acertou");
            setScore(prev => prev += 5);

            if (score > highScore) {
                setHighScore(score);
            }

        } else {
            console.log("errou");
            setScore(prev => prev -= 1);
        }

        const newHistoric = {
            "guessedColor": color.hex,
            "correctColor": color.correct ? color.hex : getCorrectColor(),
            "timeScore": 30 - timer
        };

        setHistoric([...historic, newHistoric]);

    }

    function restarGame() {
        setIsRunning(false);
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

                <button className="button-restart" onClick={() => restarGame()}>RESTART</button>

                <div className="score-information">
                    <div className="high-score">
                        <span>HIGH SCORE</span>
                        <span>{highScore}</span>
                    </div>
                    <div className="score">
                        <span>SCORE</span>
                        <span>{score}</span>
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
                            { opacity: "0.30", background: "#f9bc6b" }
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
                isRunning &&
                (
                    <div className="color-options">
                        {
                            colors.map((color) => {
                                return (
                                    <button key={color.hex} className="button-option" onClick={() => checkColor(color)}>#{color.hex}</button>
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