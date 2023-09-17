import React from 'react';
import { Link } from 'react-router-dom';
import PoolHouse from '../../../assets/img/poolhouse.webp';
import TerraseHouse from '../../../assets/img/terassehouse.webp';
import TownHouse from '../../../assets/img/townhouse.webp';
import ModernHouse from '../../../assets/img/modernpoolhouse.webp';
import AmericanHouse from '../../../assets/img/americanHouse.webp';
import AspenHouse from '../../../assets/img/aspenhouse.webp';

function Category() {
    return (
        <div className="mx-auto max-w-7xl">
            <div className="mx-5 mb-10">
                <h2 className="font-heading text-4xl font-extrabold">TOP RATED HOMES</h2>
                <hr className="h-[3px] w-96 bg-black"></hr>
            </div>
            <div className="mx-5 grid grid-cols-2 gap-5 lg:my-5 lg:grid lg:grid-cols-4 lg:grid-rows-[300px_minmax(300px,1fr)]">
                <Link
                    to="/venues"
                    className="relative transition duration-500 hover:scale-105 hover:opacity-90"
                >
                    <img
                        className="h-full w-full object-cover shadow-md"
                        src={PoolHouse}
                        alt="House with Pool"
                    />
                </Link>
                <Link
                    to="/venues"
                    className="relative col-start-1 row-start-2 transition duration-500 hover:scale-105 hover:opacity-90"
                >
                    <img
                        className="h-full w-full object-cover shadow-md"
                        src={TerraseHouse}
                        alt="Back side of house"
                    />
                </Link>
                <Link
                    to="/venues"
                    className="relative row-span-2 transition duration-500 hover:scale-105 hover:opacity-90"
                >
                    <img
                        className="h-full w-full object-cover shadow-md"
                        src={TownHouse}
                        alt="Colorfull town house"
                    />
                </Link>
                <Link
                    to="/venues"
                    className="relative col-span-2 transition duration-500 hover:scale-105 hover:opacity-90"
                >
                    <img
                        className="h-full w-full object-cover shadow-md"
                        src={ModernHouse}
                        alt="Modern Pool House"
                    />
                </Link>
                <Link
                    to="/venues"
                    className="relative transition duration-500 hover:scale-105 hover:opacity-90"
                >
                    <img
                        className="h-full w-full object-cover shadow-md"
                        src={AmericanHouse}
                        alt="Street house in front"
                    />
                </Link>
                <Link
                    to="/venues"
                    className="relative transition duration-500 hover:scale-105 hover:opacity-90"
                >
                    <img
                        className="h-full w-full object-cover shadow-md"
                        src={AspenHouse}
                        alt="House in aspen"
                    />
                </Link>
            </div>
        </div>
    );
}

export default Category;
