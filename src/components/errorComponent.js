import React from 'react';
import PropTypes from 'prop-types';

const ErrorComponent = ({ message }) => {
    return (
        <div className="bg-beig my-4 px-4 py-3 text-black shadow-md" role="alert">
            <div className="flex">
                <div className="py-1">
                    <svg
                        className="mr-4 h-6 w-6 fill-current text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-8a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-3 0v-4A1.5 1.5 0 0 1 10 4z" />
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
