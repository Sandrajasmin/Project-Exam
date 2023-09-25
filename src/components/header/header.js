import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import LogOutBtn from '../logout';
import getAvatar from '../getAvatar';
import { handleLogout } from '../../utils/auth';

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
    const userEmail = localStorage.getItem('email');
    const userName = localStorage.getItem('userName');

    console.log(accessToken);
    return (
        <nav>
            <div className="mx-auto max-w-7xl px-2 py-5 sm:px-6 lg:px-8 ">
                <div className="fixed left-0 right-0 top-0 z-30 bg-white md:relative">
                    <div className="relative my-5 flex h-16 items-center justify-between bg-white md:my-0">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button
                                type="button"
                                className="my-5 inline-flex items-center justify-center rounded-md p-2 text-black"
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
                        <div className="flex flex-1 justify-center sm:items-stretch  sm:justify-between ">
                            <div className="flex flex-shrink-0 items-center">
                                <NavLink to="/" className="">
                                    <img className="block" src={Logo} alt="Holidaze logo" />
                                </NavLink>
                            </div>
                            <div className="mt-5 hidden text-center font-body sm:ml-6 sm:block">
                                <div className="desktop">
                                    {accessToken ? (
                                        <div className="flex items-center font-body text-base">
                                            <div className="relative text-left">
                                                <NavLink
                                                    className="mx-5 border-b border-black hover:font-medium"
                                                    to="/venues"
                                                >
                                                    Travel
                                                </NavLink>
                                                <NavLink
                                                    className="mx-5 border-b border-black hover:font-medium"
                                                    to="/dashboard"
                                                >
                                                    Dashboard
                                                </NavLink>
                                            </div>

                                            <NavLink className="pl-5" to="/dashboard">
                                                {getAvatar()}
                                            </NavLink>
                                        </div>
                                    ) : (
                                        <div>
                                            <NavLink
                                                className="mx-5 border-b border-black hover:font-medium"
                                                to="/venues"
                                                role="menuitem"
                                                onClick={closeMenu}
                                            >
                                                Venues
                                            </NavLink>
                                            <NavLink
                                                className="mx-5 border-b border-black hover:font-medium"
                                                to="/register"
                                                role="menuitem"
                                                onClick={closeMenu}
                                            >
                                                Register
                                            </NavLink>
                                            <NavLink
                                                className="mx-5 border-b border-black hover:font-medium"
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
                className={`fixed left-0 top-20 z-20 ${
                    isMenuOpen ? 'flex' : 'hidden'
                } z-30 flex h-full w-full justify-center bg-white bg-clip-padding backdrop-blur-2xl backdrop-filter md:hidden`}
                onBlur={closeMenu}
            >
                {accessToken ? (
                    <div className="flex flex-col items-center gap-5 px-2 pb-3 pt-10 font-body text-base">
                        <div className="flex w-24 flex-col gap-5 ">
                            <NavLink to="/venues" className="border-b border-black pb-2">
                                Travel
                            </NavLink>
                            <NavLink
                                className="border-b border-black pb-2"
                                to="/dashboard"
                                onClick={closeMenu}
                            >
                                Dashboard
                            </NavLink>
                        </div>
                        <div className="">
                            <NavLink
                                className="flex flex-col items-center gap-3 rounded-md px-10 py-4 text-black"
                                to="/dashboard"
                                onClick={closeMenu}
                            >
                                <div className="flex flex-col items-center gap-2">
                                    {getAvatar()}
                                    {userName}
                                    {userEmail}
                                </div>
                                <div className="font-light">
                                    <LogOutBtn handleLogout={handleLogout} />
                                </div>
                            </NavLink>
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
                        <NavLink
                            className="block py-2"
                            to="log-in"
                            role="menuitem"
                            onClick={closeMenu}
                        >
                            Log in
                        </NavLink>
                    </div>
                )}
            </div>
        </nav>
    );
}
