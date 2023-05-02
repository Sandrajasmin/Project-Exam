import React from 'react';
import { NavLink } from 'react-router-dom';
import HeroImg from './../../../assets/img/heroimg.webp';

export default function HeroSection() {
  return (
    <div className="w-full flex-row-reverse justify-center md:flex">
      <img
        className="h-[365px] w-[425px] lg:h-[515px] lg:w-[600px] xl:h-[700px] xl:w-[800px]"
        src={HeroImg}
        alt="House with garden at night"
      />
      <div className="flex flex-col gap-5 bg-blue px-5 py-10 text-white md:justify-center md:px-14 lg:w-[450px] xl:w-full xl:px-36">
        <h1 className="font-heading text-4xl font-extrabold">FIND YOUR SECOND HOME</h1>
        <p className=" font-body text-base">
          Find your perfect stay to an amazing price in over 191 countries. Book your stay now!{' '}
        </p>
        <NavLink
          className="rounded-md bg-bluegreen px-28 py-3 text-center font-body font-bold text-black"
          to="#"
        >
          View
        </NavLink>
      </div>
    </div>
  );
}
