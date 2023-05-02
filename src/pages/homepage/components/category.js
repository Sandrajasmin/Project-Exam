import React from 'react';
import ScandinaviaImg from '../../../assets/img/scandinavia.png';
import FrenchImg from '../../../assets/img/french.png';
import CottageImg from '../../../assets/img/cottage.png';
import BeachImg from '../../../assets/img/beach.png';

function Category() {
  return (
    <div className="mx-auto max-w-7xl px-2 py-12">
      <h2 className="font-body text-4xl font-extrabold">
        Find a second home that suites your style{' '}
      </h2>
      <div className="lg:my-5 lg:grid lg:grid-cols-4 lg:lg:grid-rows-[100px_minmax(100px,1fr)200px] lg:gap-5">
        {/* section one */}
        <div className="my-5 grid grid-cols-2 grid-rows-[100px_minmax(100px,_1fr)_100px] gap-5 md:grid-rows-[100px_minmax(100px,_1fr)_200px] lg:col-span-2 lg:my-0 lg:grid-rows-[100px_minmax(118px,1fr)_200px]">
          <div className="relative col-span-2 row-span-2">
            <img className="h-full w-full rounded-lg object-cover" src={CottageImg} alt="cottage" />
            <p className="absolute bottom-5 right-5 font-body text-xl text-white">Cottage</p>
          </div>

          <div className="relative h-24 md:h-48 lg:h-[200px]">
            <img
              className="h-full w-full rounded-lg object-cover"
              src={ScandinaviaImg}
              alt="cottage"
            />
            <p className="absolute bottom-1 right-2 font-body text-xl text-white">Scandinavian</p>
          </div>

          <div className="relative h-24 md:h-48 lg:h-[200px]">
            <img className="h-full w-full rounded-lg object-cover" src={FrenchImg} alt="cottage" />
            <p className="absolute bottom-1 right-1 font-body text-xl text-white">French</p>
          </div>
        </div>

        {/* section two */}
        <div className="my-5 grid grid-rows-3 gap-5 lg:col-start-3 lg:grid-rows-[100px_minmax(118px,1fr)200px] lg:my-0">
          <div className="relative row-span-3">
            <img className="h-full w-full rounded-lg object-cover" src={BeachImg} alt="cottage" />
            <p className="absolute right-5 top-5 font-body text-2xl text-white">Beach</p>
          </div>
        </div>

        {/* section three */}
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-1">
          <div className="relative h-24 md:h-48 lg:h-[240px]">
            <img className="h-full w-full rounded-lg object-cover" src={FrenchImg} alt="cottage" />
            <p className="absolute bottom-1 left-1 font-body text-xl text-white">French</p>
          </div>
          <div className="relative h-24 md:h-48 lg:row-start-2 lg:h-[200px]">
            <img className="h-full w-full rounded-lg object-cover" src={FrenchImg} alt="cottage" />
            <p className="absolute bottom-1 left-1 font-body text-xl text-white">French</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
