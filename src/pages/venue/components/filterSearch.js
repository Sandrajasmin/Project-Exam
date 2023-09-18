import React, { useState } from 'react';
import PropTypes from 'prop-types';

function FilteredSearch({ onFilter }) {
    const [price, setPrice] = useState({ min: '', max: '' });
    const [maxGuests, setMaxGuests] = useState({ min: '', max: '' });
    const [amenities, setAmenities] = useState({
        pets: false,
        wifi: false,
        breakfast: false,
        parking: false,
    });

    const handleFilter = () => {
        console.log('Filtering...');
        const minPrice = parseFloat(price.min);
        const maxPrice = parseFloat(price.max);
        const minGuests = parseInt(maxGuests.min);
        const maxGuestsValue = parseInt(maxGuests.max); // Rename to avoid conflict with maxGuests object

        if (!isNaN(minPrice) && !isNaN(maxPrice) && !isNaN(minGuests) && !isNaN(maxGuestsValue)) {
            const filterCriteria = {
                price: {
                    min: minPrice,
                    max: maxPrice,
                },
                maxGuests: {
                    min: minGuests,
                    max: maxGuestsValue,
                },
                amenities,
            };
            onFilter(filterCriteria);
        } else {
            console.error('Invalid input values');
        }
    };

    const handleAmenitiesChange = (event) => {
        const { name, checked } = event.target;
        setAmenities((prevAmenities) => ({
            ...prevAmenities,
            [name]: checked,
        }));
    };

    return (
        <div className="my-5 flex pt-10 flex-col max-w-[300px]">
            <div>
                <label
                    htmlFor="priceMin"
                    className="py-2 font-body text-base font-medium leading-6 text-darkgrey"
                >
                    Price (Min)
                </label>
                <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                            type="number"
                            name="priceMin"
                            id="priceMin"
                            value={price.min}
                            onChange={(e) => setPrice({ ...price, min: e.target.value })}
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-2 font-body text-base font-light text-darkgrey focus:ring-0 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
            </div>

            <div>
                <label
                    htmlFor="priceMax"
                    className="py-2 font-body text-base font-medium leading-6 text-darkgrey"
                >
                    Price (Max)
                </label>
                <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                            type="number"
                            name="priceMax"
                            id="priceMax"
                            value={price.max}
                            onChange={(e) => setPrice({ ...price, max: e.target.value })}
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-2 font-body text-base font-light text-darkgrey focus:ring-0 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
            </div>

            <div>
                <label
                    htmlFor="maxGuestsMin"
                    className="py-2 font-body text-base font-medium leading-6 text-darkgrey"
                >
                    Max Guests (Min)
                </label>
                <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                            type="number"
                            name="minGuests"
                            id="minGuests"
                            value={maxGuests.min}
                            onChange={(e) => setMaxGuests({ ...maxGuests, min: e.target.value })}
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-2 font-body text-base font-light text-darkgrey focus:ring-0 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
            </div>

            <div>
                <label
                    htmlFor="maxGuestsMax"
                    className="py-2 font-body text-base font-medium leading-6 text-darkgrey"
                >
                    Max Guests (Max)
                </label>
                <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                            type="number"
                            name="maxGuestsValue"
                            id="maxGuestsValue"
                            value={maxGuests.max}
                            onChange={(e) => setMaxGuests({ ...maxGuests, max: e.target.value })}
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-2 font-body text-base font-light text-darkgrey focus:ring-0 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
            </div>

            <div>
                <fieldset>
                    <legend className="py-2 font-body text-base font-medium leading-6 text-darkgrey">
                        Amenities
                    </legend>
                    <div className="flex gap-5 flex-row">
                        <div className="relative flex items-center gap-x-2 font-body text-sm font-light">
                            <input
                                id="pets"
                                name="pets"
                                type="checkbox"
                                checked={amenities.pets}
                                onChange={handleAmenitiesChange}
                                className="h-4 w-4 rounded border-gray-300 text-blue focus:ring-blue"
                            />
                            <label htmlFor="pets">Pets</label>
                        </div>

                        <div className="relative flex items-center gap-x-2 font-body text-sm font-light">
                            <input
                                id="wifi"
                                name="wifi"
                                type="checkbox"
                                checked={amenities.wifi}
                                onChange={handleAmenitiesChange}
                                className="h-4 w-4 rounded border-gray-300 text-blue focus:ring-blue"
                            />
                            <label htmlFor="wifi">Wifi</label>
                        </div>
                        <div className="relative flex items-center gap-x-2 font-body text-sm font-light">
                            <input
                                id="breakfast"
                                name="breakfast"
                                type="checkbox"
                                checked={amenities.breakfast}
                                onChange={handleAmenitiesChange}
                                className="h-4 w-4 rounded border-gray-300 text-blue focus:ring-blue"
                            />
                            <label htmlFor="breakfast">Breakfast</label>
                        </div>
                        <div className="relative flex items-center gap-x-2 font-body text-sm font-light">
                            <input
                                id="parking"
                                name="parking"
                                type="checkbox"
                                checked={amenities.parking}
                                onChange={handleAmenitiesChange}
                                className="h-4 w-4 rounded border-gray-300 text-blue focus:ring-blue"
                            />
                            <label htmlFor="parking">Parking</label>
                        </div>
                    </div>
                </fieldset>
            </div>

            <button
                type="button"
                onClick={handleFilter}
                className="rounded-md border border-transparent bg-darkBrown px-8 font-body text-white shadow-md hover:bg-lightBeig hover:text-black focus:outline-none"
            >
                Filter Search
            </button>
        </div>
    );
}

FilteredSearch.propTypes = {
    onFilter: PropTypes.func.isRequired,
};

export default FilteredSearch;
