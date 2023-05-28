import React, { useEffect, useRef, useState } from 'react';
import Logo from '../../assets/img/logo_small.webp';
// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import DefaultAvatar from '../../assets/img/defaultAvatar.png';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu();
            }
        }

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    function closeMenu() {
        setIsMenuOpen(false);
    }

    const accessToken = localStorage.getItem('accessToken');
    const avatar = localStorage.getItem('avatar');
    const userName = localStorage.getItem('userName');

    let userAvatar;

    if (avatar) {
        userAvatar = <img src={avatar} alt="avatar" className="h-8 w-8 rounded-full" />;
    } else {
        userAvatar = <img src={DefaultAvatar} alt="avatar" className=" h-8 w-8 rounded-full" />;
    }

    return (
        <nav>
            <div className="mx-auto max-w-7xl px-2 py-5 sm:px-6 lg:px-8 ">
                <div className="fixed left-0 right-0 top-0 z-30 md:relative ">
                    <div className="relative flex h-16 items-center justify-between bg-white">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-md p-2 text-black"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                                onClick={toggleMenu}
                                ref={menuRef}
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
                        <div className="flex flex-1 justify-center sm:items-stretch sm:justify-between ">
                            <div className="flex flex-shrink-0 items-center ">
                                <NavLink to="/" className="">
                                    <img
                                        className="block h-12 w-12"
                                        src={Logo}
                                        alt="Holidaze logo"
                                    />
                                </NavLink>
                            </div>
                            <div className="hidden text-center font-body sm:ml-6 sm:block">
                                <div className="desktop">
                                    {accessToken ? (
                                        <div className="flex items-center pt-8 font-body text-base">
                                            <div className="relative inline-block text-left">
                                                <NavLink
                                                    className="border-r border-black px-5"
                                                    to="/venues"
                                                >
                                                    Travel
                                                </NavLink>
                                                <NavLink
                                                    to="/createVenue"
                                                    className="border-r border-black px-5"
                                                >
                                                    Create Venue
                                                </NavLink>
                                            </div>

                                            <NavLink
                                                className="border-r border-black px-5"
                                                to="/bookings"
                                            >
                                                Bookings
                                            </NavLink>
                                            <NavLink
                                                className="border-r border-black px-5"
                                                to="/dashboard"
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
                                                role="menuitem"
                                                onClick={closeMenu}
                                            >
                                                Venues
                                            </NavLink>
                                            <NavLink
                                                className=" border-r border-black px-5"
                                                to="/register"
                                                role="menuitem"
                                                onClick={closeMenu}
                                            >
                                                Register
                                            </NavLink>
                                            <NavLink
                                                className="pl-5"
                                                to="/log-in"
                                                role="menuitem"
                                                onClick={closeMenu}
                                            >
                                                Log in
                                            </NavLink>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={`fixed left-0 top-16 z-20 ${
                    isMenuOpen ? 'flex' : 'hidden'
                } z-30 flex h-full w-full justify-center bg-white bg-clip-padding backdrop-blur-2xl backdrop-filter md:hidden`}
                onBlur={closeMenu}
            >
                {accessToken ? (
                    <div className="flex flex-col gap-5 px-2 pb-3 pt-10">
                        <div className="flex flex-col gap-5 font-body text-base">
                            <NavLink
                                to="/venues"
                                className="border-b border-black pb-2"
                            >
                                Travel
                            </NavLink>
                            <NavLink
                                to="/createVenue"
                                className="border-b border-black pb-2"
                            >
                                Create Venue
                            </NavLink>
                            <NavLink
                                className="border-b border-black pb-2"
                                to="/bookings"
                                onClick={closeMenu}
                            >
                                Bookings
                            </NavLink>
                            <NavLink
                                className="border-b border-black pb-2"
                                to="/dashboard"
                                onClick={closeMenu}
                            >
                                Dashboard
                            </NavLink>
                            <div className="">
                                <NavLink
                                    className="flex items-center gap-2 rounded-md bg-blue px-3 py-2 font-bold text-white"
                                    to="/dashboard"
                                    onClick={closeMenu}
                                >
                                    {userAvatar}
                                    {userName}
                                </NavLink>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-1 px-2 pb-3 pt-2 font-body">
                        <NavLink
                            className="block py-2"
                            to="/venues"
                            role="menuitem"
                            onClick={closeMenu}
                        >
                            Venues
                        </NavLink>
                        <NavLink
                            className="block py-2"
                            to="/register"
                            role="menuitem"
                            onClick={closeMenu}
                        >
                            Register
                        </NavLink>
                        <NavLink className="block py-2" to="#" role="menuitem" onClick={closeMenu}>
                            Log in
                        </NavLink>
                    </div>
                )}
            </div>
        </nav>
    );
}
