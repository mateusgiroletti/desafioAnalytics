import { CheckCircle, XCircle } from "@phosphor-icons/react";
import "./styles.css";
import { useContext } from "react";
import { GameContext } from "../../contexts/gameContext";

function Aside() {
    const { historic } = useContext(GameContext);

    return (
        <aside>
            <div className="aside-header">
                <h1>Current/Latest Game</h1>
            </div>

            <div className="history-information">
                <div>
                    <span>Guessed Color</span>
                </div>

                <div>
                    <span>Correct color</span>
                </div>

                <div>
                    <span>Score</span>
                </div>
            </div>

            {
                historic && (
                    <div className="history-result">
                        <ul>
                            {
                                historic.map((histo, index) => {
                                    const isCorrect = histo.correctColor === histo.guessedColor ? true : false;
                                    return (
                                        <li key={index}>
                                            {
                                                isCorrect ? (
                                                    <div className="correct-choice">
                                                        <div className="correct-color" style={{ background: `#${histo.correctColor}` }}>
                                                            <span>#{`${histo.correctColor}`}</span>
                                                        </div>

                                                        <div className="score-time">
                                                            <CheckCircle size={32} weight="duotone" color="#96c482" />
                                                            <span>{`${30 - histo.timeScore}`}s</span>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="wrong-choice">
                                                        <div className="choice-color" style={{ background: `#${histo.guessedColor}`, marginRight: "1rem" }}>
                                                            <span>#{`${histo.guessedColor}`}</span>
                                                        </div>

                                                        <div className="choice-color" style={{ background: `#${histo.correctColor}` }}>
                                                            <span>#{`${histo.correctColor}`}</span>
                                                        </div>

                                                        <div className="score-time">
                                                            <XCircle size={32} weight="duotone" color="#ec9090" />
                                                            <span>{`${30 - histo.timeScore}`}s</span>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                )
            }
        </aside>
    );
}

export default Aside;