// import useState
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './pages/homepage/index';
import Venues from './pages/venues/index';
import DetailPage from './pages/detail/index';
import RegisterUser from './pages/register';
import LogIn from './pages/signin/index';
import VenueDashboard from './pages/venuemanager/index';
import CreateVenue from './pages/createvenue/index';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/venues" element={<Venues />} />
                <Route path="/venue/:id" element={<DetailPage />} />
                <Route path="/register" element={<RegisterUser />} />
                <Route path="/log-in" element={<LogIn />} />
                <Route path="/venueManager" element={<VenueDashboard />} />
                <Route path="/createVenue" element={<CreateVenue />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
