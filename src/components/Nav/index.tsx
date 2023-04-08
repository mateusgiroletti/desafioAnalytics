import { useContext, useState } from "react";
import "./styles.css";
import { GameContext } from "../../contexts/gameContext";
import Modal from "../Modal";

function Nav() {
    const [typeModal, setTypeModal] = useState("");
    const { resetAllData, toggleModal, nickname, handleNickname, levelGame, setLevelGame } = useContext(GameContext);

    function handleModal(type: string) {
        setTypeModal(type);
        toggleModal();
    }

    return (
        <>
            <nav>
                <div className="setting">
                    <button onClick={() => resetAllData()}>Reset All Data</button>
                    <button onClick={() => handleModal("nickname")}>Change Nickname</button>
                    <button onClick={() => handleModal("levelGame")}>Change Level</button>
                </div>
            </nav>

            {typeModal === "nickname" ?
                (
                    <Modal modalTitle="Insert Your Nickname">
                        <div>
                            <label htmlFor="nickname">Nickname</label>
                            <input
                                type="text"
                                id="nickname"
                                placeholder="Input your nickname"
                                value={nickname}
                                onChange={(e) => handleNickname(e)}
                                maxLength={9}
                            />
                        </div>
                    </Modal >
                ) : (
                    <Modal modalTitle="Change Level Game">
                        <div className="select-level-game">
                            <label htmlFor="level-game">Level Game</label>
                            <select
                                id="level-game"
                                onChange={(e) => setLevelGame(e.target.value)}
                                value={levelGame}
                            >
                                <option value="2" >Easy</option>
                                <option value="3" >Medium</option>
                                <option value="4" >Hard</option>
                            </select>
                        </div>
                    </Modal >
                )
            }
        </>
    );
}

export default Nav;