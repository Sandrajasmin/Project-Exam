import React from 'react';
import Logo from '../../assets/img/logo_small.png';
// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header className=" relative bg-white">
        <nav aria-label="Top" className="mx-auto max-w-6xl">
          <div className="">
            <div className="flex h-16 items-center">
              {/*Logo*/}
              <img src={Logo} />
              <div className="flex">{/* <NavLink to="/"></NavLink> */}</div>
              <div className="ml-auto flex items-center">
                <div className="flex flex-1 items-center justify-end space-x-2 lg:space-x-6">
                  <NavLink to="listings">Listings</NavLink>
                  {/* <NavLink
                    to="products"
                    className="font-body dark:text-green text-xs font-light text-black hover:text-gray-800 lg:text-sm">
                    All Products
                  </NavLink> */}
                  <p className="text-black">All Products</p>
                  <span className=" h-6 w-px bg-black" aria-hidden="true"></span>
                  {/* <NavLink
                    to="/contact-us"
                    className="font-body dark:text-green text-xs font-light text-black hover:text-gray-800 lg:text-sm">
                    Contact Us
                  </NavLink> */}
                  <p className=" text-black">Contact Us</p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
