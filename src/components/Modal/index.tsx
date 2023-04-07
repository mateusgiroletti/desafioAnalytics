import { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";

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

    return ReactDOM.createPortal(
        <>
            <div
                className="modal"
                id="my-modal"
                style={modal ? { display: "block" } : { display: "none" }}>
                <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-content">
                    <label htmlFor="nickname">Insert your nickname:</label>
                    <input type="text" id="nickname" />

                    <button>Save</button>
                </div>
            </div>
        </>,
        document.getElementById("modal-root") as Element
    );
}

export default Modal;