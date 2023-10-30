import React from 'react';
import ProfileCard from './components/ProfileComponent';
import BackgroundImage from '../../assets/img/hero_img.jpeg';
import EditPersonalia from './components/personalia';

const userName = localStorage.getItem('userName');

function Dashboard() {
    return (
        <>
            <div className="mx-auto max-w-6xl flex flex-col items-center bg-lightgrey pb-10 mt-10 md:mt-0">
                <div className="h-[250px] md:h-[300px] w-full">
                    <div className="h-full w-full object-cover">
                        <img
                            src={BackgroundImage}
                            className="h-full w-full object-cover opacity-20"
                            alt="Background Image"
                        />
                    </div>
                    <div className="absolute left-5 top-32 top- md:top-48 px-5 text-black lg:left-48 max-w-lg ">
                        <h1 className="font-heading text-3xl font-bold">Hello {userName}</h1>
                        <p className="font-body text-base ">
                            This is your profile page. You can see the progress youve made with your
                            work and manage your listing and bookings.
                        </p>
                    </div>
                </div>
                <div className="flex relative max-w-6xl bottom-5 flex-col items-center justify-evenly md:flex-row-reverse md:items-start w-full">
                    <div className=" w-[260px] md:w-1/3 bg-white">
                        <ProfileCard />
                    </div>
                    <div className="w-[260px] md:h-[482px] bg-white md:w-[500px] md:px-10 py-10">
                        <EditPersonalia />
                    </div>
                </div>
            </div>
            {/* <div className="mx-auto flex flex-col items-center bg-lightgrey pb-10">
                <div className="">
                    <div className=" md:h-[300px] md:w-full">
                        <div className="w-full h-full object-cover">
                            <img
                                src={BackgroundImage}
                                className="w-full h-full object-cover opacity-60"
                                alt="Background Image"
                            />
                            <div className="absolute left-0 top-0 h-full w-full bg-darkBlue opacity-70"></div>
                        </div>
                        <div className="absolute bottom-20 px-5 text-white w-full">
                            <h1 className="font-heading text-3xl font-bold">Hello {userName}</h1>
                            <p className="font-body text-base font-thin">
                                This is your profile page. You can see the progress youve made with
                                your work and manage your listing and bookings
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center md:flex-row-reverse'>
                    <div className="relative bottom-5 mx-10 w-[260px] bg-white md:w-full">
                        <div className="">
                            <ProfileCard />
                        </div>
                    </div>
                    <div className="w-[260px] bg-white relative md:bottom-[75px]">
                        <EditPersonalia />
                    </div>
                </div>
            </div> */}
        </>
    );
}

export default Dashboard;
