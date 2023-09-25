import React from 'react';

function getAvatar() {
    const avatar = localStorage.getItem('avatar');
    const userName = localStorage.getItem('userName');
    const firstLetter = userName ? userName.charAt(0).toUpperCase() : '';

    let userAvatar;

    if (avatar) {
        userAvatar = <img src={avatar} alt="avatar" className="h-8 w-8 rounded-full" />;
    } else {
        userAvatar = (
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-400 shadow-sm shadow-gray-700">
                <span className="font-heading font-bold text-white">{firstLetter}</span>
            </div>
        );
    }

    return <div>{userAvatar}</div>;
}

export default getAvatar;
