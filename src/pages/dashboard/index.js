import React from 'react';
import ProfileCard from './components/ProfileComponent';
import BackgroundImage from '../../assets/img/hero_img.jpeg';
import EditPersonalia from './components/personalia';

const userName = localStorage.getItem('userName');

function Dashboard() {
    return (
        <>
            <div className="mx-auto my-16 flex max-w-4xl flex-col items-center bg-lightgrey pb-10">
                <div className="">
                    <div className="relative flex flex-col items-center justify-center">
                        <div className="relative">
                            <img
                                src={BackgroundImage}
                                className="w-full opacity-60 "
                                alt="Background Image"
                            />
                            <div className="absolute left-0 top-0 h-full w-full bg-darkBlue opacity-70"></div>
                        </div>
                        <div className="absolute bottom-20 px-5 text-white">
                            <h1 className="font-heading text-3xl font-bold">Hello {userName}</h1>
                            <p className="font-body text-base font-thin">
                                This is your profile page. You can see the progress youve made with
                                your work and manage your listing and bookings
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative bottom-5 mx-10 w-[260px] bg-white">
                    <div className="flex flex-col">
                        <ProfileCard />
                    </div>
                </div>
                <div className="w-[260px] bg-white">
                    <EditPersonalia />
                </div>
            </div>
        </>
    );
}

export default Dashboard;
