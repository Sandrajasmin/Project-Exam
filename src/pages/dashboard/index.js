import React from 'react';
import ProfileCard from './components/profileCard';
import TravelCard from './components/travelCard';
import HostingCard from './components/hostingCard';
import NewsFeed from './components/newsFeed';

function Dashboard() {
    return (
        <div className="lg:grid-row-3 mx-auto my-20 grid max-w-4xl grid-rows-1 justify-center gap-5">
            <div className="">
                <ProfileCard />
            </div>
            <div className="lg:col-start-2">
                <TravelCard />
            </div>
            <div className="md:row-start-2 lg:col-span-2 lg:col-start-1 ">
                <HostingCard />
            </div>
            <div className="md:col-start-2 md:row-start-2 lg:col-start-3 lg:row-span-2 lg:row-start-1">
                <NewsFeed />
            </div>
        </div>
    );
}

export default Dashboard;
