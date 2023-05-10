import React from 'react';
import { Link } from 'react-router-dom';
import DefaultAvatar from '../../assets/img/defaultAvatar.png';

function Dashboard() {
    const userName = localStorage.getItem('userName');
    const email = localStorage.getItem('email');
    const avatar = localStorage.getItem('avatar');

    let userAvatar;

    if (avatar) {
        userAvatar = <img src={avatar} alt="avatar" className=" ounded-full" />;
    } else {
        userAvatar = <img src={DefaultAvatar} alt="avatar" className=" h-8 w-8 rounded-full" />;
    }

    return (
        <div id="dashboard" className="hidden sm:block ">
            <aside className="sticky top-0  flex h-screen flex-col items-center rounded-md bg-gradient-to-r from-blue to-[#1798CE] lg:h-full">
                <div className="py-20 flex flex-col items-center">
                    <img src={userAvatar} />
                    <p className="font-body text-white">{userName}</p>
                    <p className="font-body text-white text-sm">{email}</p>
                </div>
                <div className="flex flex-col gap-5 px-16 font-body text-white">
                    <div className="items-base flex gap-2">
                        <i className="fa fa-user" aria-hidden="true"></i>
                        <Link to="/">Dashboard</Link>
                    </div>
                    <div className="items-base flex gap-2">
                        <i className="fa-solid fa-person-walking-luggage"></i>
                        <Link to="/">Bookings</Link>
                    </div>
                    <div className="items-base flex gap-2">
                        <i className="fa-sharp fa-solid fa-house-chimney"></i>
                        <Link to="/venueManager">Venus</Link>
                    </div>
                    <div className="items-base flex gap-2">
                        <i className="fa-solid fa-door-open"></i>
                        <Link to="/">Sign out</Link>
                    </div>
                </div>
            </aside>
        </div>
    );
}

export default Dashboard;
