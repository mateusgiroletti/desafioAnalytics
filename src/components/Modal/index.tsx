import { useContext } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { GameContext } from "../../contexts/gameContext";

function Modal({ children, modalTitle }) {
    const { modal, toggleModal } = useContext(GameContext);

    return ReactDOM.createPortal(
        <>
            <div
                className="modal"
                id="my-modal"
                style={modal ? { display: "block" } : { display: "none" }}
            >
                <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-container">
                    <div className="modal-title">
                        <h2>{modalTitle}</h2>
                    </div>
                    <div className="modal-content">
                        {children}
                        <button onClick={() => toggleModal()}>Save</button>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById("modal-root") as Element
    );
}

export default Modal;