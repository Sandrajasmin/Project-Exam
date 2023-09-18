import React from 'react';
import { NavLink } from 'react-router-dom';

function HostSection() {
    return (
        <div>
            <div className=" bg-gradient-to-t from-blue to-bluegreen">
                <div className="relative isolate px-6 lg:px-8">
                    <div
                        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                        aria-hidden="true"
                    ></div>
                    <div className="mx-auto max-w-2xl py-32 sm:py-48">
                        <div className="text-center">
                            <h2 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-6xl">
                                Do you want to become a host?
                            </h2>
                            <p className="mt-6 font-body text-lg leading-8 text-white">
                                Register now and within a few click you can rent out your home.
                                We’ll match you with a Superhost in your area, who’ll guide you from
                                your first question to your first guest – by phone, video call or
                                chat.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <NavLink
                                    to="#"
                                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue shadow-sm hover:bg-bluegreen hover:text-black"
                                >
                                    Get started
                                </NavLink>
                                <NavLink
                                    to="#"
                                    className="text-sm font-semibold leading-6 text-gray-900"
                                >
                                    Learn more <span aria-hidden="true">→</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HostSection;
