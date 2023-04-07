import { useContext } from "react";
import "./styles.css";
import { GameContext } from "../../contexts/gameContext";

function Nav() {
    const { resetAllData, toggleModal } = useContext(GameContext);

    return (
        <nav>
            <div className="setting">
                <button onClick={() => resetAllData()}>Reset All Data</button>
                <button onClick={() => toggleModal()}>Change Nickname</button>
            </div>
        </nav>
    );
}

export default Nav;