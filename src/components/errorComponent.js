import React from 'react';
import PropTypes from 'prop-types';

const ErrorComponent = ({ message }) => {
    return (
        <div className="my-4 bg-darkBrown px-4 py-3 text-black shadow-md" role="alert">
            <div className="flex items-center">
                <div className="">
                    <svg
                        className="mr-4 h-6 w-6 fill-current text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M6.293 6.293a1 1 0 0 1 1.414 0L10 8.586l2.293-2.293a1 1 0 1 1 1.414 1.414L11.414 10l2.293 2.293a1 1 0 0 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 0-1.414z" />
                    </svg>
                </div>
                <div>
                    <p className="font-body font-bold">Sorry, an error occurred</p>
                    <p className="font-body text-sm">{message}</p>
                </div>
            </div>
        </div>
    );
};

ErrorComponent.propTypes = {
    message: PropTypes.string.isRequired
};

export default ErrorComponent;
