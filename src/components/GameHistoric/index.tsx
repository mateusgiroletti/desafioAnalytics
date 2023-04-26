import { CheckCircle, XCircle } from "@phosphor-icons/react";

import styles from "./styles.module.css";

function GameHistoric({ gameHistoric }) {
    return (
        <div className={styles.historyResult}>
            <ul>
                {gameHistoric.map((historic, index) => {
                    const isCorrect = historic.correctColor === historic.guessedColor ? true : false;
                    return (
                        <li key={index}>
                            {
                                isCorrect ? (
                                    <div className={styles.correctChoice}>
                                        <div className={styles.correctColor} style={{ background: `#${historic.correctColor}` }}>
                                            <span>#{`${historic.correctColor}`}</span>
                                        </div>

                                        <div className={styles.scoreTime}>
                                            <CheckCircle size={32} weight="duotone" color="#96c482" />
                                            <span>{`${historic.timeScore}`}s</span>
                                        </div>

                                        <div className={styles.playerInfo}>
                                            {historic.player}
                                        </div>
                                    </div>
                                ) : (
                                    <div className={styles.wrongChoice}>
                                        <div className={styles.choiceColor} style={{ background: `#${historic.guessedColor}`, marginRight: "1rem" }}>
                                            <span>#{`${historic.guessedColor}`}</span>
                                        </div>

                                        <div className={styles.choiceColor} style={{ background: `#${historic.correctColor}` }}>
                                            <span>#{`${historic.correctColor}`}</span>
                                        </div>

                                        <div className={styles.scoreTime}>
                                            <XCircle size={32} weight="duotone" color="#ec9090" />
                                            <span>{`${historic.timeScore}`}s</span>
                                        </div>

                                        <div className={styles.playerInfo}>
                                            {historic.player}
                                        </div>
                                    </div>
                                )
                            }
                        </li>
                    );
                })}
            </ul>
        </div >
    );
}

export default GameHistoric;