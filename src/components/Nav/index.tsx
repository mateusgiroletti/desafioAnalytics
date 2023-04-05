import { useContext } from "react";
import "./styles.css";
import { GameContext } from "../../contexts/gameContext";

function Nav() {
    const { resetAllData } = useContext(GameContext);

    return (
        <nav>
            <div className="setting">
                <button onClick={() => resetAllData()}>Reset All Data</button>
                <button>Change Nickname</button>
            </div>
        </nav>
    );
}

export default Nav;