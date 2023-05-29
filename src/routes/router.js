import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
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

function requireAuth(component) {
    const accessToken = localStorage.getItem('accessToken');
    const loggedIn = Boolean(accessToken);

    return loggedIn ? component : <Navigate to="/log-in" />;
}

function App() {

    return (
        <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/venues" element={<Venues />} exact />
            <Route path="/venue/:id" element={<DetailPage />} exact />
            <Route path="/register" element={<RegisterUser />} />
            <Route path="/log-in" element={<LogIn />} />
            <Route path="/dashboard" element={requireAuth(<DashBoard />)} />
            <Route path="/venueManager" element={requireAuth(<VenueDashboard />)} />
            <Route path="/bookingManager" element={requireAuth(<HostBooking />)} />
            <Route path="/bookings" element={requireAuth(<Travel />)} />
            <Route path="/bookings/:id" element={requireAuth(<BookingById />)} />
            <Route path="/createVenue" element={requireAuth(<CreateVenue />)} />
            <Route path="/editVenue/:id" element={requireAuth(<EditVenue />)} />
        </Routes>
    );
}

export default App;
