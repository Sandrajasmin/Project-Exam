import React from 'react';
import Logo from '../../assets/img/logo_small.png';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="">
      <div className="mx-auto max-w-7xl px-2 md:py-8 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <NavLink className="mb-4 flex items-center sm:mb-0" to="/">
            <img src={Logo} className="mr-3 h-8" alt="Flowbite Logo" />
            <span className="text-1xl self-center whitespace-nowrap font-body font-semibold">
              Holidaze
            </span>
          </NavLink>
          <ul className="mb-6 flex flex-wrap items-center font-body text-sm text-darkgrey sm:mb-0">
            <li>
              <NavLink href="#" className="mr-4 hover:underline md:mr-6 ">
                Homepage
              </NavLink>
            </li>
            <li>
              <NavLink href="#" className="mr-4 hover:underline md:mr-6 ">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink href="#" className="mr-4 hover:underline md:mr-6 ">
                Lisence
              </NavLink>
            </li>
            <li>
              <NavLink href="#" className="mr-4 hover:underline md:mr-6 ">
                Privacy
              </NavLink>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-darkgrey sm:mx-auto lg:my-8" />
        <span className="block font-body text-sm text-darkgrey sm:text-center">
          © 2023{' '}
          <a href="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
