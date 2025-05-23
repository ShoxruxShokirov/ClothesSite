import { useEffect, useRef } from 'react'

export function Modal({ isOpen, onClose, title, description, submitText }) {
    const modalRef = useRef(null);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        const handleClickOutside = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.addEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div 
            className={`about-modal ${isOpen ? 'active' : ''}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div 
                className="modal-content"
                ref={modalRef}
            >
                <button 
                    className="modal-close"
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    ×
                </button>
                <h2 id="modal-title">{title}</h2>
                <p>{description}</p>
                <button 
                    className="modal-submit"
                    onClick={onClose}
                    aria-label={submitText}
                >
                    {submitText}
                </button>
            </div>
        </div>
    );
} 