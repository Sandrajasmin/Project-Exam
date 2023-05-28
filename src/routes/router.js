// import useState
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/homepage/index';
import Venues from '../pages/venues/index';
import DetailPage from '../pages/detail/index';
import RegisterUser from '../pages/register';
import LogIn from '../pages/signin/index';
import DashBoard from '../pages/dashboard/index';
import VenueDashboard from '../pages/hosting/venues/index';
import CreateVenue from '../pages/createvenue/index';
import HostBooking from '../pages/hosting/bookings/index';
import BookingById from '../pages/hosting/bookingById';
import EditVenue from '../pages/editvenue/index';
import Travel from '../pages/travel/index';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/venues" element={<Venues />} exact />
            <Route path="/venue/:id" element={<DetailPage />} exact />
            <Route path="/register" element={<RegisterUser />} />
            <Route path="/log-in" element={<LogIn />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/venueManager" element={<VenueDashboard />} />
            <Route path="/bookingManager" element={<HostBooking />} />
            <Route path="/bookings" element={<Travel />} />
            <Route path="/bookings/:id" element={<BookingById />} />
            <Route path="/createVenue" element={<CreateVenue />} />
            <Route path="/editVenue/:id" element={<EditVenue />} />
        </Routes>
    );
}

export default App;
