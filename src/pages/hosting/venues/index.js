import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteVenue } from '../../../store/modules/VenueSlice';
import { fetchProfile } from '../../../store/modules/profileSlice';
import { getUserDetails } from '../../../utils/auth';
import Dashboard from '../../../components/dashboard/dashboard';
import DefaultHouse from '../../../assets/img/default_house.jpeg';

const VenueDashboard = () => {
    const dispatch = useDispatch();
    const userDetails = getUserDetails();
    const singleProfile = useSelector((state) => state.profile.singleProfile);
    
    console.log("edit venue", singleProfile);
    useEffect(() => {
        if (userDetails.username) {
            dispatch(fetchProfile(userDetails.username));
        }
    }, [dispatch, userDetails.username]);

    function deleteVenueByID() {
        const deleteVenueBtn = document.getElementsByClassName('deleteBtn');
        for (let i = 0; i < deleteVenueBtn.length; i++) {
            deleteVenueBtn[i].addEventListener('click', () => {
                const deleteVenueID = deleteVenueBtn[i].dataset.id;
                deleteVenue(deleteVenueID);
            });
        }
    }

    return (
        <div className="mx-auto max-w-7xl px-5">
            <div className="my-5 flex justify-center gap-5 md:justify-between">
                <Dashboard />
                <div>
                    <h1 className="pb-5 font-heading text-4xl font-extrabold">Your Venues</h1>
                    <div className="bg-lightgray grid gap-5 rounded-md  md:grid-cols-2 lg:grid-cols-3">
                        {singleProfile &&
                        singleProfile.venues &&
                        singleProfile.venues.length > 0 ? (
                            singleProfile.venues.map((venue) => (
                                <div className=" flex " key={venue.id}>
                                    <div className="flex w-72 flex-col justify-between rounded-md bg-white drop-shadow-md md:w-56 lg:w-72">
                                        <Link
                                            to={`/venue/${venue.id}`}
                                            className="hover:opacity-80"
                                        >
                                            <div className=" h-48">
                                                <img
                                                    className="h-full w-full rounded-t-md"
                                                    style={{ objectFit: 'cover' }}
                                                    src={
                                                        venue.media[0]
                                                            ? venue.media[0]
                                                            : DefaultHouse
                                                    }
                                                    alt={venue.name}
                                                />
                                            </div>
                                            <h3 className="py-2 text-center font-body font-medium text-black">
                                                {venue.name}
                                            </h3>
                                        </Link>
                                        <Link to={`/venue/${venue.id}`} className="text-center">
                                            <div className="pb-2 text-4xl font-extrabold">
                                                {venue.bookings && venue.bookings.length !== undefined ? (
                                                    <div>{venue.bookings.length}</div>
                                                ) : (
                                                    <p>0</p>
                                                )}
                                            </div>
                                            <p className="pb-3 font-light">Bookings</p>
                                        </Link>
                                        <div className="flex justify-between font-body text-sm font-light text-darkgrey">
                                            <Link
                                                to={`/editVenue/${venue.id}`}
                                                className="flex w-full justify-center gap-2 border-r border-t py-2 text-center"
                                            >
                                                <div>
                                                    <i className="fa-solid fa-pen-nib" />
                                                </div>
                                                <p>Edit</p>
                                            </Link>
                                            <button
                                                type="button"
                                                onClick={deleteVenueByID}
                                                data-id={venue.id}
                                                className="deleteBtn flex w-full justify-center gap-2 border-t py-2 text-center"
                                            >
                                                <div>
                                                    <i className="fa-solid fa-trash" />
                                                </div>
                                                <p>Delete</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="flex flex-col items-center justify-center p-8">
                                <p className="font-paragraph font-md text-md">
                                    You have no Accommodation that is being rentet out{' '}
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
};

export default VenueDashboard;
