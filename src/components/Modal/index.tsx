import { useContext, useEffect, useState } from "react";

import "./styles.css";
import { GameContext } from "../../contexts/gameContext";

function Modal(props) {
    const { modal, setModal } = useContext(GameContext);

    useEffect(() => {
        console.log(props);
        if (props.open) {
            setModal(true);
        }
    }, []);

    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <>
            <div
                className="modal"
                id="my-modal"
                style={modal ? { display: "block" } : { display: "none" }}>
                <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-content">
                    <label htmlFor="nickname">Inssert your nickname:</label>
                    <input type="text" id="nickname" />

                    <button>Save</button>
                </div>
            </div>
        </>
    );
}

export default Modal;