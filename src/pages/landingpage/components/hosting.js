import React from 'react';
import { NavLink } from 'react-router-dom';

function HostSection() {
    return (
        <div className="mx-auto my-40 max-w-7xl">
            <div className="mx-5 flex justify-end">
                <div className="max-w-xl">
                    <h2 className="text-end font-heading text-7xl font-bold">
                        WANT TO BECOME A HOST?
                    </h2>
                    <hr className="my-7 h-[3px] max-w-2xl bg-black" />
                    <p className="text-end font-body">
                        Register now and within a few click you can rent out your home. We’ll match
                        you with a Superhost in your area, who’ll guide you from your first question
                        to your first guest – by phone, video call or chat.
                    </p>
                </div>
            </div>
            <div className="mx-5 mt-10 flex items-center justify-end gap-x-6">
                <NavLink
                    to="#"
                    className=" bg-darkBrown px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lightBeig hover:text-black hover:transition-colors"
                >
                    Get started
                </NavLink>
                <NavLink to="#" className="text-sm font-semibold leading-6 text-gray-900">
                    Learn more <span aria-hidden="true">→</span>
                </NavLink>
            </div>
        </div>
    );
}

export default HostSection;
