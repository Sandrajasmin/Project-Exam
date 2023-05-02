import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVenues } from '../../../store/modules/VenueSlice';
import { Link } from 'react-router-dom';
import dateFormat from '../../../components/date/dateFormat';
import DefaultHouse from '../../../assets/img/default_house.png';
import SearchBar from './search';
// import ErrorComponent from "../../components/shared/ErrorComponent";

const AllVenues = () => {
    const dispatch = useDispatch();
    const venues = useSelector((state) => state.venues.venues);
    const [filterVenues, setFilteredVenues] = useState(venues);

    useEffect(() => {
        dispatch(fetchVenues({ venues }));
    }, [dispatch]);

    useEffect(() => {
        setFilteredVenues(venues);
    }, [venues]);

    const handleSearch = (searchTerm) => {
        if (searchTerm) {
            const filtered = venues.filter((venues) =>
                venues.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredVenues(filtered);
        } else {
            setFilteredVenues(venues);
        }
    };

    return (
        <div className="mx-auto">
            <SearchBar onSearch={handleSearch} />
            <div className="mx-auto grid max-w-3xl grid-rows-1 gap-10">
                {filterVenues.map((venue) => (
                    <div className="mx-5 rounded-md bg-white shadow-lg" key={venue.id}>
                        <Link to={`venue/${venue.id}`} className="md:flex">
                            <div className="md:w-[300px]">
                                <img
                                    className={`h-full w-full rounded-t-md ${venue.media[0] ? 'object-cover md:rounded-none md:rounded-l-md' : 'object-contain'}`}
                                    src={venue.media[0] ? venue.media[0] : DefaultHouse}
                                    alt={venue.name}
                                />
                            </div>
                            <div
                                className="flex flex-col gap-10 px-2 py-2 md:w-full"
                                key={venue.id}
                            >
                                <div className="">
                                    <div className="">
                                        <h2 className="font-heading text-xl font-normal">
                                            {venue.name}
                                        </h2>
                                        {venue.rating >= 1 ? (
                                            <p className="font-body text-sm font-light">
                                                {[...Array(venue.rating)].map((_, i) => (
                                                    <span className="text-blue" key={i}>
                                                        ★
                                                    </span>
                                                ))}
                                                {[...Array(5 - Math.round(venue.rating))].map(
                                                    (_, i) => (
                                                        <span className="text-blue" key={i}>
                                                            ☆
                                                        </span>
                                                    )
                                                )}
                                            </p>
                                        ) : (
                                            <p className="font-body text-sm font-light">
                                                {[...Array(5)].map((_, i) => (
                                                    <span className="text-blue" key={i}>
                                                        ☆
                                                    </span>
                                                ))}
                                            </p>
                                        )}
                                    </div>

                                    <div className="flex flex-row justify-between">
                                        <p className="font-body text-base font-light">
                                            Hosted since {dateFormat(venue.created)}
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
                                                <div>
                                                    <img
                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAABIUlEQVR4nM1Su0pDQRC9nXZKIFooKH6AlVoJaSzW3D1ns7kzVztr/Qd7P8AQtbdT/IGUgkXAL9BCJV+QKkVQJt4ESXylEQeWw5k5Z5nZ2ST5F6FpuiTeHwl5o8C9ko+GBT+0+qTJubIApwr0lHz98gC9gc658ruxVttS4GUoEKAv5J0ATSFPCjTe/6B5zr3fTIS8GpmAZoxx2Tk3Y8Wc3MnIDeOWV+BseIn5koNKZVbJ68z73X1gUcmGAt2xdo03YowLeQhV05tvNHcGrAvQ+W5mATqmm3w01TkF2kVb5+r9dj1N1wwFuBjkgbbpPl+VasnmDCHMK3CswKWhccuraunnfZOtsZZb030W4KEwPtWr1ZVfmy32QlgV8tZwKuOfxBt/lKteGnXXzAAAAABJRU5ErkJggg=="
                                                        alt="wifi"
                                                    />
                                                </div>
                                                <p>Wifi</p>
                                            </div>
                                        ) : null}
                                        {venue.meta.parking ? (
                                            <div className="flex items-center gap-1 font-body text-base font-light text-darkgrey">
                                                <div>
                                                    <img
                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAs0lEQVR4nKWTPQrCUBCEU3kGsba2EVF7CwlvhkDehNzByjt4BBtB8A4eIAFLea2XsVEe4g+CsM8sTLHFxw67s1nWteTcXEArIBjUVsDsDUeQvJkFtJ9wSITDbxhYqijGUZVzE5FrD1xNcE0ORK5E7jywVZ73RR7MsAeOz74iFwI29snAMNougZGknifPybZF7gVczAurv2ynbxs4/Qcz7c5JCfNA84JjVq3ZjmBJTju80qPukgEoFI2IEpUAAAAASUVORK5CYII="
                                                        alt="icon parking"
                                                    />
                                                </div>
                                                <p>Parking</p>
                                            </div>
                                        ) : null}
                                        {venue.meta.breakfast ? (
                                            <div className="flex items-center gap-1 font-body text-base font-light text-darkgrey">
                                                <div>
                                                    <img
                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAsklEQVR4nGNgoBYI9fVdEuzj4xbi67sbRkf4+oqH+vmVBvv72+LVHOLrez/U1zch1M/vP4wO9/dXCPXzmx/q6/s4xtWVmzzNIDEfn1j8mmEKoTSKZl/f1fg0H4RqhGBf32+hoaGcSJrP49Qc5u2tE+rndwCq8EaYj08wOCARrrmLN9Cgiv8H+/s7IPHBmkN8fe8PiOZjob6+keRqnk9Q48BqBqXpMG9vfSTNpSBMlGZiAQBZHINWQGLVygAAAABJRU5ErkJggg=="
                                                        alt="icon cutlery"
                                                    />
                                                </div>
                                                <p>Breakfast</p>
                                            </div>
                                        ) : null}
                                        {venue.meta.pets ? (
                                            <div className="flex items-center gap-1 font-body text-base font-light text-darkgrey">
                                                <div>
                                                    <img
                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAABcUlEQVR4nI2Rvy8EURDHV0gkgkooJKglIqLmSut25vvu7Js9P6ImrqFQKCRESCgUOpWOCIl/QKERCpFQiEIl/gC5U7nkTt5ml7fn7njJy+bNzme+35lxnKqTU2pAAC0i7XHMV2pMmF2n0RFgUJgLAlQEuIxiu9G7opnXGsEHcWJ4M5lRAUoW/FofZj6x4YAokyjGXGyknLdUPrPZbLf5fseAm2qmSSu1oJmX51y3U5gfo+SjyM2ZpRz4wIhm3helhozaimVtB0BHAIynUqkWAxt1Yd4zYOB5wxr4iArdOpr5xar8/Mc2rqzcd2OraAXuTNIMUZcGLjTzkxDNh6Dn9QpQtnKvHQ2cW4GNqO97q5WSaUOI+iy4HCg1EascC3A4zdyTsPZz36bS6X5NtBT+V2o20U84GOChBhi7KgjzFhG1/RqGBrbrgskim7UmufovGMj/gl3XbRXmdQ2cmn37zMrs1SeaFGDRDFOUyolIcwx9AbKsBwz0AKiWAAAAAElFTkSuQmCC"
                                                        alt="icon pets"
                                                    />
                                                </div>
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
                                        <h2 className="font-heading text-xl">{venue.price} USD</h2>
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
        </div>
    );
};

export default AllVenues;
