import React from 'react';
import { Link } from 'react-router-dom';
import ScandinaviaImg from '../../../assets/img/scandinavia.png';
import FrenchImg from '../../../assets/img/french.png';
import CottageImg from '../../../assets/img/cottage.png';
import BeachImg from '../../../assets/img/beach.png';
import LuxImg from '../../../assets/img/lux.png';
import MansionImg from '../../../assets/img/mansion.png';

function Category() {
    return (
        <div className="mx-auto max-w-6xl my-12 pb-24 px-5">
            <h2 className="font-body text-4xl font-extrabold">
                Find a second home that suites your style{' '}
            </h2>
            <div className="lg:my-5 lg:grid lg:grid-cols-4 lg:lg:grid-rows-[100px_minmax(100px,1fr)200px] lg:gap-5">
                {/* section one */}
                <div className="my-5 grid grid-cols-2 grid-rows-[100px_minmax(100px,_1fr)_100px] gap-5 md:grid-rows-[100px_minmax(100px,_1fr)_200px] lg:col-span-2 lg:my-0 lg:grid-rows-[100px_minmax(118px,1fr)_200px]">
                    <Link to="/venues" className="relative col-span-2 row-span-2">
                        <img
                            className="h-full w-full rounded-lg object-cover"
                            src={CottageImg}
                            alt="cottage"
                        />
                        <p className="sp absolute bottom-5 right-5 font-body text-xl font-bold text-white md:bottom-10 md:right-10 md:text-4xl">
                            Cottage
                        </p>
                    </Link>

                    <Link to="/venues" className="relative h-24 md:h-48 lg:h-[200px]">
                        <img
                            className="h-full w-full rounded-lg object-cover"
                            src={ScandinaviaImg}
                            alt="cottage"
                        />
                        <p className="absolute bottom-0 right-2 font-body text-xl font-bold text-white md:text-4xl">
                            Scandinavian
                        </p>
                    </Link>

                    <Link to="/venues" className="relative h-24 md:h-48 lg:h-[200px]">
                        <img
                            className="h-full w-full rounded-lg object-cover"
                            src={FrenchImg}
                            alt="cottage"
                        />
                        <p className="absolute -bottom-1 right-1 font-body text-xl font-bold text-white md:text-4xl">
                            French
                        </p>
                    </Link>
                </div>

                {/* section two */}
                <div className="my-5 grid grid-rows-3 gap-5 lg:col-start-3 lg:my-0 lg:grid-rows-[100px_minmax(118px,1fr)200px]">
                    <Link to="/venues" className="relative row-span-3">
                        <img
                            className="h-full w-full rounded-lg object-cover"
                            src={BeachImg}
                            alt="cottage"
                        />
                        <p className="absolute right-5 top-5 font-body text-2xl font-bold text-white md:text-4xl">
                            Beach
                        </p>
                    </Link>
                </div>

                {/* section three */}
                <div className="grid grid-cols-2 gap-5 lg:grid-cols-1">
                    <Link to="/venues" className="relative h-24 md:h-48 lg:h-[240px]">
                        <img
                            className="h-full w-full rounded-lg object-cover"
                            src={LuxImg}
                            alt="cottage"
                        />
                        <p className="absolute bottom-1 left-1 font-body text-xl font-bold text-white md:text-4xl">
                            Lux
                        </p>
                    </Link>
                    <Link to="/venues" className="relative h-24 md:h-48 lg:row-start-2 lg:h-[200px]">
                        <img
                            className="h-full w-full rounded-lg object-cover"
                            src={MansionImg}
                            alt="cottage"
                        />
                        <p className="absolute bottom-0 left-1 font-body text-xl font-bold text-white md:text-4xl">
                            Mansion
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Category;
