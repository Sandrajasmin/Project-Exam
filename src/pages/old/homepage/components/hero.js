import React from 'react';
import { Link } from 'react-router-dom';
import HeroImg from './../../../assets/img/hero_sircle.webp';
import HeroText from './animation/textanimation';

export default function HeroSection() {
    return (
        <div>
            <div className="mx-auto mb-20 w-full max-w-5xl ">
                <div className="relative my-12 flex justify-center ">
                    <div className="lg:left-30 absolute left-5 top-14 z-10 text-black md:left-20 md:top-20 md:w-[700px]">
                        <div className="font-heading text-xl font-extrabold md:text-4xl">
                            <h1 className="">WHERE DO YOU WANT TO GO</h1>
                            <HeroText />
                        </div>
                    </div>
                    <div className="w-72 md:w-[600px] lg:w-[700px]">
                        <img
                            className="z-0 h-full w-full drop-shadow-lg"
                            src={HeroImg}
                            alt="House with garden at night"
                        />
                    </div>

                    <div className="absolute -bottom-5 right-10 flex flex-col gap-5 text-center md:bottom-20 lg:bottom-20 lg:right-[40px] lg:w-72">
                        <Link to="/venues">
                            <div className="rounded-md bg-blue p-2 font-heading text-xl font-extrabold text-white md:p-5 md:text-4xl">
                                <h1 className="">TRAVEL NOW</h1>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
