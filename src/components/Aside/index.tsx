import { CheckCircle, XCircle } from "@phosphor-icons/react";
import "./styles.css";

function Aside() {
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

            <div className="history-result">
                <ul>
                    <li>
                        <div className="correct-choice">
                            <div className="correct-color" style={{ background: "#77D353" }}>
                                <span>#77D353</span>
                            </div>

                            <div className="score-time">
                                <CheckCircle size={32} weight="duotone" color="#96c482" />
                                <span>2s</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="wrong-choice">
                            <div className="choice-color" style={{ background: "#537ED3", marginRight: "1rem" }}>
                                <span>#537ED3</span>
                            </div>

                            <div className="choice-color" style={{ background: "#071F50" }}>
                                <span>#071F50</span>
                            </div>

                            <div className="score-time">
                                <XCircle size={32} weight="duotone" color="#ec9090" />
                                <span>2s</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="correct-choice">
                            <div className="correct-color" style={{ background: "#77D353" }}>
                                <span>#77D353</span>
                            </div>

                            <div className="score-time">
                                <CheckCircle size={32} weight="duotone" color="#96c482" />
                                <span>2s</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default Aside;