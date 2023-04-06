import { useContext, useEffect, useState } from "react";
import "./styles.css";
import { GameContext } from "../../contexts/gameContext";

const TIME_GAME = 30;

function Main() {
    const [colors, setColors] = useState([]);
    const [timer, setTimer] = useState(TIME_GAME);
    const [filled, setFilled] = useState(100);
    const [isRunning, setIsRunning] = useState(false);
    const [score, setScore] = useState(0);
    const [disabledButton, setDisabledButton] = useState(false);

    const { historic, setHistoric, highScore, setHighScore, resetHistoric } = useContext(GameContext);

    useEffect(() => {
        let intervalId;
        if (isRunning) {
            if (timer > 0) {
                intervalId = setInterval(() => {
                    setTimer(prev => prev -= 1);
                    setFilled(prev => prev -= 3.33);
                }, 1000);
            }

            if (timer === 0) {
                setDisabledButton(true);
                setScore(prev => prev -= 2);
                clearInterval(intervalId);
                intervalId = setInterval(() => {
                    setTimer(TIME_GAME);
                    setFilled(100);
                    generateColors();
                    setDisabledButton(false);
                }, 1000);
            }

        }

        return () => clearInterval(intervalId);

    }, [timer, isRunning]);

    function startGame() {
        setIsRunning(true);
        setDisabledButton(false);
        generateColors();
        resetHistoric();
    }

    function generateColors() {
        const colorsArray = [];
        const correctColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
        colorsArray.push({
            "hex": correctColor,
            "correct": true
        });

        for (let index = 0; index < 2; index++) {
            const randomColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
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

    function checkAnswer(color) {
        setDisabledButton(true);

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

        setHistoric([newHistoric, ...historic]);
        setTimer(0);

    }

    function restarGame() {
        setIsRunning(false);
        setTimer(TIME_GAME);
        setFilled(100);
        setScore(0);
        setDisabledButton(true);
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
                        onClick={() => startGame()}
                    >
                        Start
                    </button>
                </div>

            </div>

            {
                !disabledButton &&
                (
                    <div className="color-options">
                        {
                            colors.map((color) => {
                                return (
                                    <button
                                        key={color.hex}
                                        className="button-option"
                                        onClick={() => checkAnswer(color)}
                                        disabled={disabledButton}
                                    >
                                        #{color.hex}
                                    </button>
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