import "./style.scss"
import { useEffect, useState } from "react";

function Modal(props) {
    const {
        children,
        handleShowModal,
        title,
        description,
        buttons,
        showCloseButton = true,
        closeOnClickOutside = true,
        closeOnEscape = true
    } = props;

    const [isClosing, setIsClosing] = useState(false);

    function handleCloseModal() {
        setIsClosing(true);
        setTimeout(() => {
            handleShowModal(false);
            setIsClosing(false);
        }, 300); // Match this with the animation duration in SCSS
    }

    function handleKeyDown(event) {
        if (closeOnEscape && event.key === "Escape") {
            handleCloseModal();
        }
    }

    function handleWrapperClick(event) {
        if (closeOnClickOutside && event.target === event.currentTarget) {
            handleCloseModal();
        }
    }

    useEffect(() => {
        if (closeOnEscape) {
            document.addEventListener("keydown", handleKeyDown);
            return () => {
                document.removeEventListener("keydown", handleKeyDown);
            }
        }
    }, [closeOnEscape]);

    // Add cleanup effect to reset closing state when modal is unmounted
    useEffect(() => {
        return () => {
            setIsClosing(false);
        };
    }, []);

    return (
        <section className={`modal-wrapper ${isClosing ? 'closing' : ''}`} onClick={handleWrapperClick}>
            <div className="modal-content">
                {showCloseButton && (
                    <span id="close-modal" onClick={handleCloseModal}>&times;</span>
                )}
                {children ? (
                    children
                ) : (
                    <>
                        {title && <h1 className="modal-title">{title}</h1>}
                        {description && <p className="modal-description">{description}</p>}
                        {buttons && (
                            <div className="modal-buttons">
                                {buttons.map((button, index) => (
                                    <button
                                        key={index}
                                        className={button.className}
                                        onClick={button.onClick}
                                    >
                                        {button.text}
                                    </button>
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>
        </section>
    );
}

export default Modal; 