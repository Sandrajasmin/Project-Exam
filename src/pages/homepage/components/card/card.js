import React from 'react';
import Cottage from '../../../../assets/img/cottage.png';
import { NavLink } from 'react-router-dom';

function Card() {
  return (
    <div className="my-10">
      <div className="mx-5 flex flex-col gap-y-3">
        <div className="">
          <div className="">
            <img src={Cottage} className="h-full w-full rounded-md object-cover" loading="lazy" />
          </div>
          <div className="mt-4 flex flex-col">
            <h3 className="relative font-body text-lg font-bold text-darkgrey">
              <NavLink>
                <h3>Melby Strand, Sverige</h3>
              </NavLink>
            </h3>
            <div className="flex gap-4">
              <p className="font-body font-light text-darkgrey">01.05-01.07</p>
              <p className="font-body font-light text-darkgrey">Super Host</p>
            </div>

            <p className="font-body text-lg font-bold text-darkgrey">918 $ /night</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
