import React from 'react';
// import { fetchProfile } from '../../../store/modules/profileSlice';
import DefaultAvatar from '../../../assets/img/defaultAvatar.png';
function ProfileCard() {
    const avatar = localStorage.getItem('avatar');
    const userName = localStorage.getItem('userName');
    const userEmail = localStorage.getItem('email');

    const renderAvatar = () => {
        if (avatar) {
            return (
                <div className="h-28 w-28 rounded-full">
                    <img src={avatar} alt="avatar" className="h-full w-full rounded-full" />
                </div>
            );
        } else {
            return <img src={DefaultAvatar} alt="avatar" className="h-20 w-20 rounded-full" />;
        }
    };

    return (
        <div className="relative flex h-[300px] w-[300px] flex-col items-center justify-center rounded-md bg-gradient-to-t from-blue to-[#2890BB] md:w-[330px] lg:w-[290px]">
            <div className="absolute right-0 top-0">
                <i className="fa-solid fa-pencil float-right p-5 text-white"></i>
            </div>
            {renderAvatar()}
            <div className="text-center font-heading font-bold text-white">
                <span className="pr-2">Hi 👋</span>
                {userName}
                <div className="font-light">{userEmail}</div>
            </div>
        </div>
    );
}

export default ProfileCard;
