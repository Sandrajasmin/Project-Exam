import './style.css'; // Import your CSS file here
import React from 'react';

export default function HeroSection() {
    return (
        <div className="hero-section max-w-8xl relative">
            <div className="content absolute bottom-20 w-full md:bottom-40 lg:bottom-60">
                <h1 className="text-center font-heading text-2xl font-bold text-white lg:text-5xl">
                    FIND YOUR SECOND HOME
                </h1>
                <p className="px-10 text-center font-body text-sm text-white">
                    Find your perfect stay at an amazing price in over 191 countries. Book your stay
                    now!
                </p>
            </div>
        </div>
    );
}
