import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteVenue } from '../../../store/modules/VenueSlice';
import { fetchProfile } from '../../../store/modules/profileSlice';
import { getUserDetails } from '../../../utils/auth';
import Dashboard from '../../../components/dashboard/dashboard';
import DefaultHouse from '../../../assets/img/default_house.jpeg';

function BookingById() {
    const dispatch = useDispatch();
    const userDetails = getUserDetails();
    const singleProfile = useSelector((state) => state.profile.singleProfile);

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
                    <div className="bg-lightgray grid gap-5 rounded-md ">
                        {singleProfile &&
                        singleProfile.bookings &&
                        singleProfile.bookings.length > 0 ? (
                            singleProfile.bookings.map((venue) => (
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
                                        <Link to={`/bookings/${venue.id}`} className="text-center">
                                            <div className="pb-2 text-4xl font-extrabold">
                                                {singleProfile &&
                                                singleProfile._count &&
                                                singleProfile._count.bookings !== undefined ? (
                                                    <div>{singleProfile._count.bookings}</div>
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
                            // <div className="flex flex-col items-center justify-center p-8">
                            //     <p className="font-paragraph font-md text-md">
                            //         You have no Accommodation that is being rentet out{' '}
                            //     </p>
                            // </div>
                            <div className="mx-auto max-w-4xl">
                                <h1 className="pb-5 font-heading text-4xl font-extrabold">
                                    Your bookings at Cottage House
                                </h1>
                                <div className="">
                                    <table className="w-full text-center text-sm text-black">
                                        <thead className="bg-lightgrey text-xs uppercase text-black">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="hidden py-3 sm:block md:px-6"
                                                >
                                                    Venue
                                                </th>
                                                <th scope="col" className="px-1 py-3 lg:px-6">
                                                    Customer
                                                </th>
                                                <th scope="col" className="px-1 py-3 lg:px-6">
                                                    Email
                                                </th>
                                                <th scope="col" className="px-1 py-3 lg:px-6">
                                                    From - to
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="my-2 border-b bg-white font-body text-sm font-light text-black">
                                                <th className="hidden h-24 w-24 sm:block">
                                                    <img
                                                        className="h-full w-full object-cover"
                                                        src={DefaultHouse}
                                                    />
                                                </th>
                                                <td className="px-1 py-4 lg:px-6">Sandra</td>
                                                <td className="px-1 py-4 lg:px-6">
                                                    Sandra-jasmin@stud.noroff.no
                                                </td>
                                                <td className="px-1 py-4 lg:px-6">
                                                    17.05.23-18.05.23
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookingById;
