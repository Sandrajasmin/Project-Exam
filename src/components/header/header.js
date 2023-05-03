import React, { useState } from 'react';
import Logo from '../../assets/img/logo_small.webp';
// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
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
                        <div className="hidden text-center sm:ml-6 sm:block">
                            <div className="flex space-x-4 pt-8 font-body text-base">
                                <NavLink className="border-r border-black pr-8" to="/venues">
                                    Listings
                                </NavLink>
                                <NavLink
                                    className="border-r border-black pr-8"
                                    to={{ pathname: '/register', state: { modal: true } }}
                                >
                                    Register
                                </NavLink>
                                <NavLink className="pr-8" to="#">
                                    Log in
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    {/* 
          IF USER LOGGED IN
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div> */}
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
