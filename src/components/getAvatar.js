import React from 'react';

function getAvatar({ size, fontsize, shadowDepth }) {
    const avatar = localStorage.getItem('avatar');
    const userName = localStorage.getItem('userName');
    const firstLetter = userName ? userName.charAt(0).toUpperCase() : '';

    // Calculate dynamic class names based on the size prop
    const sizeClasses = `h-${size} w-${size}`;

    // Calculate dynamic shadow class based on the shadowDepth prop
    const shadowClass = shadowDepth ? `shadow-${shadowDepth}` : ''; // Use shadow-<depth> class if shadowDepth is provided

    let userAvatar;

    if (avatar) {
        userAvatar = (
            <img
                src={avatar}
                alt="avatar"
                className={`${sizeClasses} rounded-full ${shadowClass} bg-white`}
            />
        );
    } else {
        userAvatar = (
            <div
                className={`flex ${sizeClasses} items-center justify-center rounded-full bg-slate-400 ${shadowClass}`}
            >
                <span className={`font-heading font-bold text-white text-${fontsize}`}>
                    {firstLetter}
                </span>
            </div>
        );
    }

    return <div>{userAvatar}</div>;
}

export default getAvatar;
