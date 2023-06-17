import React, { useEffect } from 'react';
import BookingImg from '../../../assets/img/bookingVector.png';
import VenueImg from '../../../assets/img/venueVector.png';
import { getUserDetails } from '../../../utils/auth';
import { fetchProfile } from '../../../store/modules/profileSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const HostingCard = () => {
    const dispatch = useDispatch();
    const userDetails = getUserDetails();
    const singleProfile = useSelector((state) => state.profile.singleProfile);

    useEffect(() => {
        if (userDetails.username) {
            dispatch(fetchProfile(userDetails.username));
        }
    }, [dispatch, userDetails.username]);

    return (
        <div className="relative flex h-[600px] w-[300px] flex-col items-center justify-evenly rounded-md bg-gradient-to-t from-bluegreen to-[#9AEBA3] md:w-[330px] lg:h-[300px] lg:w-[600px] lg:flex-row">
            <div className="absolute right-0 top-0">
                <h2 className="p-2 font-heading text-4xl font-bold text-white">HOSTING</h2>
            </div>
            <Link id="Venues" to="/venueManager">
                <img src={VenueImg} alt='vector of house' className="drop-shadow-md" />
                <div className="py-2 text-center font-heading font-bold text-white">
                    <span className="pr-2 text-4xl">Venues</span>
                    <div className="">
                        {singleProfile &&
                        singleProfile._count &&
                        singleProfile._count.venues !== undefined ? (
                            <div className="flex justify-center gap-2 font-body font-bold">
                                {singleProfile._count.venues}
                                <p className=" font-light">Active venues</p>
                            </div>
                        ) : (
                            <p>0 Acvtive venues</p>
                        )}
                    </div>
                </div>
            </Link>
            <Link id="booking" to="/bookingManager">
                <div>
                    <img src={BookingImg} alt='vector of calendar' className="h-full w-full drop-shadow-md" />
                </div>
                <div className="py-2 text-center font-heading font-bold text-white">
                    <span className="pr-2 text-4xl">Bookings</span>
                    <div className="flex justify-center gap-2 font-body font-bold">
                        <p className=" font-light italic">Check out your upcoming guests</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default HostingCard;
