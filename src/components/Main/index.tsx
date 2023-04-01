import "./styles.css";

function Main() {
    return (
        <main>
            <div className="title">
                <h1>Guess the color</h1>
            </div>

            <div className="main-informations">
                <div className="remaning-time">
                    <span>REMAINING TIME (s)</span>
                    <span>30</span>
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

                </div>

                <div className="color-to-guess" style={{ background: "#f9bc6b" }} >
                </div>
            </div>

            <div className="color-options">
                <div className="option">
                    <span>#FFBA5C</span>
                </div>

                <div className="option">
                    <span>#976DD0</span>
                </div>

                <div className="option">
                    <span>#FDE0AF</span>
                </div>
            </div>

        </main>
    );
}

export default Main;