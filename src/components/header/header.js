import React, { useState } from 'react';
import Logo from '../../assets/img/logo_small.webp';
// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import DefaultAvatar from '../../assets/img/defaultAvatar.png';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    const accessToken = localStorage.getItem('accessToken');
    const avatar = localStorage.getItem('avatar');

    let userAvatar;

    if (avatar) {
        userAvatar = <img src={avatar} alt="avatar" className=" ounded-full" />;
    } else {
        userAvatar = <img src={DefaultAvatar} alt="avatar" className=" h-8 w-8 rounded-full" />;
    }

    return (
        <nav>
            <div className="mx-auto max-w-7xl px-2 py-5 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-md p-2 text-black"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                            onClick={toggleMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <svg
                                    className="h-6 w-6"
                                    viewBox="0 0 28 28"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6.125 6.125L21.875 21.875"
                                        stroke="black"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M21.875 6.125L6.125 21.875"
                                        stroke="black"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                    <div className="flex flex-1 justify-center sm:items-stretch sm:justify-between">
                        <div className="flex flex-shrink-0 items-center">
                            <NavLink to="/">
                                <img className="block h-12 w-12" src={Logo} alt="Holidaze logo" />
                            </NavLink>
                        </div>
                        <div className="hidden text-center font-body sm:ml-6 sm:block">
                            <div className="">
                                {accessToken ? (
                                    <div className="flex items-center pt-8 font-body text-base">
                                        <div className="relative inline-block text-left">
                                            <NavLink className="border-r border-black pr-5">
                                                <button onClick={toggleMenu} className="">
                                                    Venues
                                                </button>{' '}
                                                <i className="fa fa-angle-down"></i>
                                            </NavLink>
                                            <div
                                                className={`${
                                                    isMenuOpen ? 'flex' : 'hidden'
                                                } absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                                                role="menu"
                                                aria-orientation="vertical"
                                                aria-labelledby="menu-button"
                                                tabIndex="-1"
                                            >
                                                <div className="py-1" role="none">
                                                    <NavLink
                                                        to="/venues"
                                                        className="block px-4 py-2 text-sm text-gray-700"
                                                        role="menuitem"
                                                        tabIndex="-1"
                                                        id="menu-item-0"
                                                    >
                                                        Travel
                                                    </NavLink>
                                                    <NavLink
                                                        to="/createVenue"
                                                        className="block px-4 py-2 text-sm text-gray-700"
                                                        role="menuitem"
                                                        tabIndex="-1"
                                                        id="menu-item-1"
                                                    >
                                                        Create Venue
                                                    </NavLink>
                                                    <NavLink
                                                        to="/manageVenues"
                                                        className="block px-4 py-2 text-sm text-gray-700"
                                                        role="menuitem"
                                                        tabIndex="-1"
                                                        id="menu-item-2"
                                                    >
                                                        Manage Venue
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>

                                        <NavLink
                                            className="border-r border-black px-5"
                                            to="/bookings"
                                        >
                                            Bookings
                                        </NavLink>
                                        <NavLink
                                            className="border-r border-black px-5"
                                            to="/Dashboard"
                                        >
                                            Dashboard
                                        </NavLink>
                                        <NavLink className="pl-5" to="/dashboard">
                                            {userAvatar}
                                        </NavLink>
                                    </div>
                                ) : (
                                    <div>
                                        <NavLink
                                            className="border-r border-black pr-5"
                                            to="/venues"
                                        >
                                            Venues
                                        </NavLink>
                                        <NavLink
                                            className=" border-r border-black px-5"
                                            to="/register"
                                        >
                                            Register
                                        </NavLink>
                                        <NavLink className="pl-5" to="/log-in">
                                            Log in
                                        </NavLink>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`fixed left-0 top-20 z-20 ${
                    isMenuOpen ? 'flex' : 'hidden'
                } z-30 flex h-[calc(100vh_-_80px)] w-full justify-center  bg-opacity-50 bg-clip-padding backdrop-blur-lg backdrop-filter lg:hidden`}
            >
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <NavLink className="block py-2" to="/venues">
                        Listings
                    </NavLink>
                    <NavLink className="block py-2" to="#">
                        Register
                    </NavLink>
                    <NavLink className="block py-2" to="#">
                        Log in
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}
