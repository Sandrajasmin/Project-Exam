import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        const { value } = e.target;
        setSearchTerm(value);
        onSearch(value);
    };

    return (
        <div className="my-5 flex pt-10 md:pt-0">
            <form className="flex w-full gap-2 md:gap-6">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                    className="w-full rounded-md border border-darkBrown px-2 py-2 font-body text-darkgrey outline-none "
                    placeholder="Search for venue"
                />
                <button
                    type="submit"
                    className="rounded-md border border-transparent bg-darkBrown px-4 py-2 font-body text-white shadow-md hover:bg-lightBeig hover:text-black focus:outline-none md:px-14"
                >
                    SEARCH
                </button>
            </form>
        </div>
    );
};

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired
};

export default SearchBar;
