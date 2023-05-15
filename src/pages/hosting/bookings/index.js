import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProfile } from '../../../store/modules/profileSlice';
import { getUserDetails } from '../../../utils/auth';
import { Link } from 'react-router-dom';
import Dashboard from '../../../components/dashboard/dashboard';
import DefaultHouse from '../../../assets/img/default_house.jpeg';

function ManageBooking() {
    const dispatch = useDispatch();
    const userDetails = getUserDetails();
    const singleProfile = useSelector((state) => state.profile.singleProfile);

    useEffect(() => {
        if (userDetails.username) {
            dispatch(fetchProfile(userDetails.username));
        }
    }, [dispatch, userDetails.username]);

    return (
        <div className="mx-auto max-w-7xl px-5">
            <div className="my-5 flex justify-between gap-5 md:justify-between">
                <Dashboard />
                <div>
                    <div className="bg-lightgray grid justify-center gap-5 rounded-md md:grid-cols-2 lg:grid-cols-3">
                        {singleProfile &&
                        singleProfile.bookings &&
                        singleProfile.bookings.length > 0 ? (
                            singleProfile.bookings.map((bookings) => (
                                <div className=" " key={bookings.id}>
                                    <h1 className="pb-5 font-heading text-4xl font-extrabold">
                                        Your Bookings for {bookings.name}{' '}
                                    </h1>
                                    <div className="flex w-72 flex-col justify-between rounded-md bg-white drop-shadow-md md:w-56 lg:w-72">
                                        <Link
                                            to={`/venue/${bookings.id}`}
                                            className="hover:opacity-80"
                                        >
                                            <div className=" h-48">
                                                <img
                                                    className="h-full w-full rounded-t-md"
                                                    style={{ objectFit: 'cover' }}
                                                    src={
                                                        bookings.media[0]
                                                            ? bookings.media[0]
                                                            : DefaultHouse
                                                    }
                                                    alt={bookings.name}
                                                />
                                            </div>
                                            <h3 className="py-2 text-center font-body font-medium text-black">
                                                {bookings.name}
                                            </h3>
                                        </Link>

                                        <div className="flex justify-between font-body text-sm font-light text-darkgrey">
                                            <div className="flex w-full justify-center gap-2 border-r border-t py-2 text-center">
                                                <div>
                                                    <i className="fa-solid fa-pen-nib" />
                                                </div>
                                                <p>Edit</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="flex flex-col items-center justify-center p-8">
                                <p className="font-paragraph font-md text-md">
                                    You have no bookings for this venue yet{' '}
                                </p>
                                <div></div>
                            </div>
                        )}
                    </div>
                    <div className="bg-blue-500 absolute right-0 top-0 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white">
                        {singleProfile && singleProfile.venues ? singleProfile.venues.length : 0}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManageBooking;
