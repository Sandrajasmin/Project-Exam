import React, { useEffect } from 'react';
import TravelImg from '../../../assets/img/travelVector.png';
import { getUserDetails } from '../../../utils/auth';
import { fetchProfile } from '../../../store/modules/profileSlice';
import { useDispatch, useSelector } from 'react-redux';

const TravelCard = () => {
    const dispatch = useDispatch();
    const userDetails = getUserDetails();
    const singleProfile = useSelector((state) => state.profile.singleProfile);

    useEffect(() => {
        if (userDetails.username) {
            dispatch(fetchProfile(userDetails.username));
        }
    }, [dispatch, userDetails.username]);

    // FIX!!!!! IT ONLY SHOWS BOOKINGS ON YOUR OWN VENUES

    return (
        <div className="relative flex h-[300px] w-[300px] flex-col items-center justify-center rounded-md bg-bluegreen md:w-[330px] lg:w-[290px]">
            <div className="absolute right-0 top-0">
                <h2 className="p-2 font-heading text-4xl font-bold text-white">TRAVEL</h2>
            </div>
            <div className="h-[121px] w-[230px]">
                <img src={TravelImg} className="h-full w-full object-cover drop-shadow-md" />
            </div>
            <div className="py-2 text-center font-heading font-bold text-white">
                <span className="pr-2 text-4xl">Bookings</span>
                <div className="">
                    {singleProfile &&
                    singleProfile._count &&
                    singleProfile._count.bookings !== undefined ? (
                        <div className="flex justify-center gap-2 font-body font-bold">
                            {singleProfile._count.bookings}
                            <p className=" font-light"> Bookings</p>
                        </div>
                    ) : (
                        <p>0 Bookings</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TravelCard;
