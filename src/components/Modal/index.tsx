import { useContext } from "react";
import ReactDOM from "react-dom";

import { GameContext } from "../../contexts/gameContext";

import styles from "./styles.module.css";

type ModalProps = {
    children: JSX.Element;
    modalTitle: string;
}

function Modal({ children, modalTitle }: ModalProps) {
    const { modal, toggleModal } = useContext(GameContext);

    return ReactDOM.createPortal(
        <>
            <div
                className={styles.modal}
                id="my-modal"
                style={modal ? { display: "block" } : { display: "none" }}
            >
                <div onClick={() => toggleModal()} className={styles.overlay}></div>
                <div className={styles.modalContainer}>
                    <div className={styles.modalTitle}>
                        <h2>{modalTitle}</h2>
                    </div>
                    <div className={styles.modalContent}>
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