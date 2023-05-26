import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchBookingOwner } from '../../../store/modules/profileSlice';
import { getUserDetails } from '../../../utils/auth';
import formatDate from '../../../components/date/dateFormat';
import Dashboard from '../../../components/dashboard/dashboard';
import noBookingsImg from '../../../assets/img/neighbourhoodVector.png';
import DefaultHouse from '../../../assets/img/default_house.jpeg';

function ManageBooking() {
    const dispatch = useDispatch();
    const userDetails = getUserDetails();
    const singleProfile = useSelector((state) => state.profile.singleProfile);

    useEffect(() => {
        if (userDetails.username) {
            dispatch(fetchBookingOwner(userDetails.username));
        }
    }, [dispatch, userDetails.username]);

    const truncateText = (text, maxWords) => {
        const words = text.split(' ');

        if (words.length <= maxWords) {
            return text;
        }

        const truncatedWords = words.slice(0, maxWords);
        return truncatedWords.join(' ') + '...';
    };

    const sortBookingsByDate = (bookings) => {
        return bookings.slice().sort((a, b) => new Date(a.dateFrom) - new Date(b.dateFrom));
    };

    return (
        <div className="mx-auto max-w-7xl px-5">
            <div className="my-5 flex gap-5">
                <Dashboard />
                <div className="w-full max-w-4xl md:bg-white md:drop-shadow-md md:px-5 md:py-5">
                    <h1 className="pb-5 font-heading text-4xl font-extrabold">Bookings on your Venues</h1>
                    {singleProfile && singleProfile.length > 0 ? (
                        singleProfile.map((booking) => {
                            const { id, name, media, bookings } = booking;
                            const venuesWithBookings = bookings.length > 0;
                            const truncatedName = truncateText(name, 4);

                            if (!venuesWithBookings) {
                                return null;
                            }

                            const sortedBookings = sortBookingsByDate(bookings);

                            return (
                                <div key={id} className="my-4">
                                    <h2 className="font-heading text-1xl font-semibold">{truncatedName}</h2>
                                    <table className="w-full text-center text-sm text-black my-4">
                                        <thead className="bg-lightgrey text-xs uppercase text-black">
                                            <tr>
                                                <th scope="col" className="py-3 md:px-6"></th>
                                                <th scope="col" className="px-1 py-3 lg:px-6">
                                                    Number of Guests
                                                </th>
                                                <th scope="col" className="px-1 py-3 lg:px-6">
                                                    To - From
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {sortedBookings.map((bookingItem) => (
                                                <tr
                                                    key={bookingItem.id}
                                                    className="my-2 border-b bg-white font-body text-sm font-light text-black"
                                                >
                                                    <th className="h-24 w-24">
                                                        <img
                                                            className="h-full w-full object-cover"
                                                            src={media[0] ? media[0] : DefaultHouse}
                                                            alt={truncatedName}
                                                        />
                                                    </th>
                                                    <td className="px-1 py-4 lg:px-6">{bookingItem.guests}</td>
                                                    <td className="px-1 py-4 lg:px-6">
                                                        {formatDate(bookingItem.dateTo, 'day-month-year')} -{' '}
                                                        {formatDate(bookingItem.dateFrom, 'day-month-year')}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            );
                        })
                    ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center bg-white p-8 drop-shadow-md">
                            <img src={noBookingsImg} alt="No bookings" />
                            <h1 className="font-paragraph font-md w-full py-10 text-center font-heading text-xl font-bold">
                                Sorry, you have no bookings right now{' '}
                            </h1>
                            <Link to="/dashboard">
                                <button className="rounded-md bg-blue px-5 py-2 font-body text-white">
                                    Return to dashboard
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ManageBooking;
