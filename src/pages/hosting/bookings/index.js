import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBookingOwner } from '../../../store/modules/profileSlice';
import { getUserDetails } from '../../../utils/auth';
import formatDate from '../../../components/date/dateFormat';
import DefaultHouse from '../../../assets/img/default_house.jpeg';
import ErrorComponent from '../../../components/errorComponent';
import ListingGallery from './components/gallery';

function ManageBooking() {
    const dispatch = useDispatch();
    const userDetails = getUserDetails();
    const singleProfile = useSelector((state) => state.profile.singleProfile);
    const { isError } = useSelector((state) => state.error);
    const { errorMessage } = useSelector((state) => state.error);

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
            <div className="my-5 ">
                {/* flex gap-5 */}
                {isError ? (
                    <ErrorComponent message={errorMessage} />
                ) : (
                    <div>
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
                                        <h1 className="pb-5 font-heading text-4xl font-extrabold">
                                            Bookings on your Venuejjjs
                                        </h1>
                                        <h2 className="text-1xl font-heading font-semibold">
                                            {truncatedName}
                                        </h2>
                                        <table className="my-4 w-full text-center text-sm text-black">
                                            <thead className="bg-lightgrey text-xs uppercase text-black">
                                                <tr>
                                                    <th scope="col" className="py-3 md:px-6"></th>
                                                    <th scope="col" className="px-1 py-3 lg:px-6">
                                                        Number of Guests
                                                    </th>
                                                    <th scope="col" className="px-1 py-3 lg:px-6">
                                                        From - To
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
                                                                src={
                                                                    media[0]
                                                                        ? media[0]
                                                                        : DefaultHouse
                                                                }
                                                                alt={truncatedName}
                                                            />
                                                        </th>
                                                        <td className="px-1 py-4 lg:px-6">
                                                            {bookingItem.guests}
                                                        </td>
                                                        <td className="px-1 py-4 lg:px-6">
                                                            {formatDate(
                                                                bookingItem.dateFrom,
                                                                'day-month-year'
                                                            )}{' '}
                                                            -{' '}
                                                            {formatDate(
                                                                bookingItem.dateTo,
                                                                'day-month-year'
                                                            )}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="mx-auto my-32  flex max-w-7xl justify-between p-8 lg:my-5">
                                <div className="flex w-full flex-col justify-center gap-10">
                                    <div>
                                        <h1 className="font-heading text-6xl font-bold">SORRY</h1>
                                        <hr className="h-[3px] w-56 bg-black" />
                                        <h2 className="font-body font-light">
                                            You have no bookings right now
                                        </h2>
                                    </div>
                                    <Link to="/dashboard">
                                        <button className="hover:bg-lightBrown bg-darkBrown px-5 py-2 font-body text-white">
                                            Return to dashboard
                                        </button>
                                    </Link>
                                </div>
                                <div className="hidden w-2/3 md:block">
                                    <ListingGallery />
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ManageBooking;
