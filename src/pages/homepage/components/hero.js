import React from 'react';
import { Link } from 'react-router-dom';
import HeroImg from './../../../assets/img/hero_sircle.webp';
import HeroText from './animation/textanimation';

export default function HeroSection() {
    return (
        <div>
            <div className="w-full mx-auto max-w-5xl mb-20">
                <div className="relative flex justify-center my-10">
                    <div className="absolute left-5 top-14 md:left-20 lg:left-30 md:top-20 z-10 w-[700px] text-black">
                        <div className="font-heading text-xl md:text-4xl font-extrabold">
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

                    <div className="absolute right-10 -bottom-5 md:bottom-20 lg:right-[40px] lg:bottom-20 flex lg:w-72 flex-col gap-5 text-center">
                        <Link to="/venues">
                            <div className="font-heading text-xl p-2 md:text-4xl font-extrabold bg-blue md:p-5 rounded-md text-white">
                                <h1 className="">
                                    TRAVEL NOW
                                </h1>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
}
