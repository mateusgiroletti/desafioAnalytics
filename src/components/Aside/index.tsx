import { useContext } from "react";
import { GameContext } from "../../contexts/gameContext";

import GameHistoric from "../GameHistoric";

import styles from "./styles.module.css";

function Aside() {
    const { historic } = useContext(GameContext);

    return (
        <aside>
            <div className={styles.asideHeader}>
                <h1>Current/Latest Game</h1>
            </div>

            <div className={styles.historicInformation}>
                <span>Guessed Color</span>
                <span>Correct color</span>
                <span>Score</span>
                <span>Player</span>
            </div>

            {historic && <GameHistoric gameHistoric={historic} />}
        </aside>
    );
}

export default Aside;