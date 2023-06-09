import { useContext, useEffect, useState } from "react";
import { GameContext } from "../../contexts/gameContext";

import styles from "./styles.module.css";

const TIME_GAME = 30;

type ColorProps = {
    hex: string;
    correct: boolean;
}

function Main() {
    const [colors, setColors] = useState<ColorProps[]>([]);
    const [timer, setTimer] = useState(TIME_GAME);
    const [filled, setFilled] = useState(100);
    const [isRunning, setIsRunning] = useState(false);
    const [score, setScore] = useState(0);
    const [disabledButton, setDisabledButton] = useState(false);

    const { setHistoric, highScore, setHighScore, resetHistoric, levelGame, nickname } = useContext(GameContext);

    useEffect(() => {
        let intervalId: ReturnType<typeof setInterval>;

        if (isRunning) {
            if (timer > 0) {
                intervalId = setInterval(() => {
                    setTimer(prevState => prevState -= 1);
                    setFilled(prevState => prevState -= 3.33);
                }, 1000);
            }

            if (timer === 0) {
                if (!disabledButton) {
                    setDisabledButton(true);
                    setScore(prevState => prevState -= 2);
                }

                intervalId = setInterval(() => {
                    setTimer(TIME_GAME);
                    setFilled(100);
                    generateColors();
                    setDisabledButton(false);
                }, 1000);
            }

            checkHighScore();

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
        const colorsArray: Array<ColorProps> = [];
        const correctColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
        colorsArray.push({
            "hex": correctColor,
            "correct": true
        });

        for (let index = 0; index < Number(levelGame); index++) {
            const randomColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
            colorsArray.push({
                "hex": randomColor,
                "correct": false
            });
        }

        colorsArray.sort(() => Math.random() - 0.5);

        setColors(colorsArray);
    }

    function getCorrectColor() {
        const correctColor = colors.find(color => color.correct);

        return correctColor?.hex;
    }

    function checkAnswer(color: ColorProps) {
        setDisabledButton(true);

        if (color.correct) {
            setScore(prevState => prevState += 5);
        } else {
            setScore(prevState => prevState -= 1);
        }

        const newHistoric = {
            "guessedColor": color.hex,
            "correctColor": color.correct ? color.hex : getCorrectColor(),
            "timeScore": 30 - timer,
            "player": nickname ?? null
        };

        setHistoric(prevState => [
            newHistoric,
            ...prevState
        ]);

        setTimer(0);
    }

    function restarGame() {
        setIsRunning(false);
        setTimer(TIME_GAME);
        setFilled(100);
        setScore(0);
        setDisabledButton(true);
    }

    function checkHighScore() {
        if (score > highScore) {
            setHighScore(score);
        }
    }

    return (
        <main>
            <div className={styles.title}>
                <h1>Guess the color</h1>
            </div>

            <div className={styles.mainInformations}>
                <div className={styles.remaningTime}>
                    <span>REMAINING TIME (s)</span>
                    <span>{timer}</span>
                </div>

                <button className={styles.buttonRestart} onClick={() => restarGame()}>RESTART</button>

                <div className={styles.scoreInformation}>
                    <div className={styles.highScore}>
                        <span>HIGH SCORE</span>
                        <span>{highScore}</span>
                    </div>
                    <div className={styles.score}>
                        <span>SCORE</span>
                        <span>{score}</span>
                    </div>
                </div>
            </div>

            <div className={styles.selectColor}>
                <div className={styles.timeBar}>
                    <div style={{
                        height: "100%",
                        width: `${filled}%`,
                        backgroundColor: "#a0a7b0",
                        transition: "width 1s"
                    }}>

                    </div>
                </div>


                <div className={styles.colorToGuess}>
                    <div className={styles.color} style={
                        isRunning ?
                            { opacity: "1", background: `#${getCorrectColor()}` } :
                            { opacity: "0.30", background: "#f9bc6b" }
                    }></div>
                    <button
                        className={styles.buttonStart}
                        style={
                            isRunning ? { display: "none" } : { display: "block" }
                        }
                        onClick={() => startGame()}
                        data-testid="start-game"
                    >
                        Start
                    </button>
                </div>

            </div>

            {!disabledButton && (
                <div className={styles.colorOptions}>
                    {
                        colors.map((color) => {
                            return (
                                <button
                                    key={color.hex}
                                    className={styles.buttonOption}
                                    onClick={() => checkAnswer(color)}
                                    disabled={disabledButton}
                                >
                                    #{color.hex}
                                </button>
                            );
                        })
                    }

                </div>
            )}

        </main>

    );
}

export default Main;