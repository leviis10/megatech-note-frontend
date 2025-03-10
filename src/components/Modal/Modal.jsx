import XMark from "../icons/XMark";

function Modal({ children, onClose }) {
    const closeModalHandler = function () {
        if (onClose == null) {
            return;
        }
        onClose();
    };

    return (
        <>
            <div className="overlay" onClick={closeModalHandler} />
            <div className="modal__container">
                <div className="modal__action">
                    <button className="modal__close-button-container" onClick={closeModalHandler}>
                        <XMark className="modal__close-button" />
                    </button>
                </div>

                {children}
            </div>
        </>
    );
}

export default Modal;
