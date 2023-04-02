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
                <button className="button-option">#FFBA5C</button>
                <button className="button-option">#976DD0</button>
                <button className="button-option">#FDE0AF</button>
                <button className="button-option">#976DD0</button>
                <button className="button-option">#FDE0AF</button>
            </div>

        </main>
    );
}

export default Main;