import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import dateFormat from '../../../components/date/dateFormat';
import DefaultHouse from '../../../assets/img/default_house.jpeg';
import SearchBar from './search';
import NoResult from '../../../assets/img/no_result.webp';
import { fetchVenues } from '../../../store/modules/VenueSlice';
import { FaWifi, FaParking, FaPaw } from 'react-icons/fa';
import { GiKnifeFork } from 'react-icons/gi';
// import ErrorComponent from "../../components/shared/ErrorComponent";

const AllVenues = () => {
    const dispatch = useDispatch();
    const { venues } = useSelector((state) => state.venues);
    const [filteredVenues, setFilteredVenues] = useState(venues);

    useEffect(() => {
        dispatch(fetchVenues({ venues }));
    }, [dispatch]);

    useEffect(() => {
        setFilteredVenues(venues);
    }, [venues]);

    const handleSearch = (searchTerm) => {
        if (searchTerm) {
            const filtered = venues.filter((venueItem) =>
                venueItem.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredVenues(filtered);
        } else {
            setFilteredVenues(venues);
        }
    };

    const { length: filteredVenuesLength } = filteredVenues;

    const noResultContent = (
        <div className="my-10 flex flex-col items-center md:my-2">
            <img src={NoResult} className="md:w-[400px]" alt="No result" />
            <p className="font-body text-2xl">Sorry! No result found</p>
            <p className="font-byd py-1 text-sm font-light">Please try another title</p>
        </div>
    );

    return (
        <div className="mx-auto my-10">
            <SearchBar onSearch={handleSearch} />
            {filteredVenuesLength === 0 ? (
                noResultContent
            ) : (
                <div className="mx-auto grid max-w-3xl grid-rows-1 justify-center gap-10">
                    {filteredVenues.map((venue) => (
                        <div className="mx-5 rounded-md bg-white shadow-lg" key={venue.id}>
                            <Link to={`/venue/${venue.id}`} className="md:flex">
                                <div className="md:w-[300px]">
                                    <img
                                        className="h-full w-full rounded-t-md md:rounded-none md:rounded-l-md"
                                        style={{ objectFit: 'cover' }}
                                        src={venue.media[0] ?? DefaultHouse}
                                        alt={venue.name}
                                    />
                                </div>
                                <div className="flex flex-col gap-10 px-2 py-2 md:w-full">
                                    <div className="">
                                        <div className="">
                                            <Link to={`/venue/${venue.id}`}>
                                                <h2 className="font-heading text-xl font-normal">
                                                    {venue.name}
                                                </h2>
                                            </Link>
                                            <p className="font-body text-sm font-light">
                                                {Array.from({ length: 5 }, (_, index) => (
                                                    <span className="text-blue" key={index}>
                                                        {index < Math.floor(venue.rating)
                                                            ? '★'
                                                            : '☆'}
                                                    </span>
                                                ))}
                                            </p>
                                        </div>
                                        <div className="flex flex-row justify-between">
                                            <p className="font-body text-base font-light">
                                                Hosted since{' '}
                                                {dateFormat(venue.created, 'month-year')}
                                            </p>
                                            {venue.rating >= 3 ? (
                                                <p className="font-body text-base font-light">
                                                    Super Host
                                                </p>
                                            ) : (
                                                <p className="font-body text-sm font-light">
                                                    Individual Host
                                                </p>
                                            )}
                                        </div>
                                        <div className="flex max-w-[300px] gap-2">
                                            {venue.meta.wifi ? (
                                                <div className="flex items-center gap-1 font-body text-base font-light text-darkgrey">
                                                    <FaWifi size={16} />
                                                    <p>Wifi</p>
                                                </div>
                                            ) : null}
                                            {venue.meta.parking ? (
                                                <div className="flex items-center gap-1 font-body text-base font-light text-darkgrey">
                                                    <FaParking size={16} />
                                                    <p>Parking</p>
                                                </div>
                                            ) : null}

                                            {venue.meta.breakfast ? (
                                                <div className="flex items-center gap-1 font-body text-base font-light text-darkgrey">
                                                    <GiKnifeFork size={16} />
                                                    <p>Breakfast</p>
                                                </div>
                                            ) : null}
                                            {venue.meta.pets ? (
                                                <div className="flex items-center gap-1 font-body text-base font-light text-darkgrey">
                                                    <FaPaw size={16} />
                                                    <p>Pets</p>
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>

                                    <div className="flex place-items-end justify-between md:place-items-center">
                                        <div className=" w-36 md:w-full">
                                            <p className="font-body text-base font-bold text-blue">
                                                Reserve now Pay Later
                                            </p>
                                            <p className="font-body text-sm font-light">
                                                9/10 Reviews Wonderfull
                                            </p>
                                        </div>
                                        <div className="place-items-end content-end justify-end justify-items-end justify-self-end text-right text-darkgrey">
                                            <h2 className="font-heading text-xl">
                                                {venue.price} USD
                                            </h2>
                                            <p className="font-body text-sm font-light">
                                                ${venue.price} total
                                            </p>
                                            <p className="font-body text-sm font-light">
                                                Included taxes & fees
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllVenues;
