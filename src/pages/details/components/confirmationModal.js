import PropTypes from 'prop-types';

export const Modal = ({ isOpen, onClose, children }) => {
    const modalClasses = `fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? 'visible' : 'hidden'
    }`;
    return (
        <div className={modalClasses}>
            <div className="modal-overlay absolute inset-0 bg-black opacity-70"></div>
            <div className="modal-container lg:w-4/4 z-50 mx-auto w-11/12 overflow-y-auto bg-white shadow-lg md:max-w-md">
                <div className="modal-content px-6 py-10 text-left md:mx-10 lg:py-14">
                    <button
                        className="modal-close absolute right-0 top-0 mr-10 mt-14"
                        onClick={onClose}
                    >
                        <svg
                            className="h-6 w-6 fill-current text-black"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path
                                className="heroicon-ui"
                                d="M14.35 14.35a1 1 0 0 1-1.42 0L10 11.41l-2.93 2.93a1 1 0 0 1-1.42-1.42L8.59 10 5.66 7.07a1 1 0 0 1 1.42-1.42L10 8.59l2.93-2.93a1 1 0 0 1 1.42 1.42L11.41 10l2.93 2.93a1 1 0 0 1 0 1.42z"
                            />
                        </svg>
                    </button>
                    {children}
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};
