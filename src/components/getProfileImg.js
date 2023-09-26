import React from 'react';
import DefaultImage from '../assets/img/default_house.jpeg';

function getProfileImage() {
    const avatar = localStorage.getItem('avatar');

    let userImage;

    if (avatar) {
        userImage = <img src={avatar} alt="avatar" className="h-8 w-8 rounded-full" />;
    } else {
        userImage = <img src={DefaultImage} alt="avatar" className=" h-8 w-8 rounded-full" />;
    }

    return <div>{userImage}</div>;
}

export default getProfileImage;
