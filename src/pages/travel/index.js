import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProfile } from '../../store/modules/profileSlice';
import { getUserDetails } from '../../utils/auth';
import { Link } from 'react-router-dom';
import dateFormat from '../../components/date/dateFormat';
import Dashboard from '../../components/dashboard/dashboard';
// import DefaultHouse from '../../assets/img/default_house.jpeg';
import noBookingsImg from '../../assets/img/neighbourhoodVector.png';

function Travel() {
    const dispatch = useDispatch();
    const userDetails = getUserDetails();
    const singleProfile = useSelector((state) => state.profile.singleProfile);
    console.log('BookingProfile', singleProfile);

    useEffect(() => {
        if (userDetails.username) {
            dispatch(fetchProfile(userDetails.username));
        }
    }, [dispatch, userDetails.username]);

    return (
        <div className="mx-auto max-w-7xl px-5">
            <div className="my-5 flex gap-5 ">
                <Dashboard />
                <div className='bg-white p-4 md:p-8 w-full drop-shadow-md'>
                    <h1 className="pb-5 font-heading text-4xl font-extrabold">
                        Your upcoming trips 
                    </h1>
                    {singleProfile &&
                        singleProfile.bookings &&
                        singleProfile.bookings.length > 0 ? (
                        singleProfile.bookings.map((bookings) => (
                            <div className="" key={bookings.id}>
                                <div className="mx-auto max-w-4xl">
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
                                                    Name
                                                </th>
                                                <th scope="col" className="px-1 py-3 lg:px-6">
                                                    Guests
                                                </th>
                                                <th scope="col" className="px-1 py-3 lg:px-6">
                                                    From
                                                </th>
                                                <th scope="col" className="px-1 py-3 lg:px-6">
                                                    To
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bg-white font-body text-sm font-light text-black">
                                                <th className="hidden h-24 w-24 sm:block my-4">
                                                    <img
                                                        className="h-full w-full object-cover rounded-md"
                                                        src={bookings.venue.media[0]}
                                                    />
                                                </th>
                                                <td className="px-1 py-4 lg:px-6">
                                                    {bookings.venue.name}
                                                </td>
                                                <td className="px-1 py-4 lg:px-6">
                                                    {bookings.guests}
                                                </td>
                                                <td className="px-1 py-4 lg:px-6">
                                                    {dateFormat(bookings.dateFrom, 'day-month-year')}
                                                    
                                               
                                                </td>
                                                <td className="px-1 py-4 lg:px-6">
                                                   

                                                    {dateFormat(bookings.dateTo, 'day-month-year')}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center  ">
                            <img src={noBookingsImg} />
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

export default Travel;
