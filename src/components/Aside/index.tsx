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
                        <div>
                            
                        </div>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default Aside;