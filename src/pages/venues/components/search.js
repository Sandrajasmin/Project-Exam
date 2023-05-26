import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="mx-auto my-5 flex justify-center">
            <form onSubmit={handleSearch} className="flex gap-2 md:gap-6">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                    className="rounded-md border border-blue px-2 py-2 font-body text-darkgrey md:w-[540px]"
                    placeholder="Search for venue"
                />
                <button
                    type="submit"
                    className="rounded-md border border-transparent bg-bluegreen px-4 py-2 font-body text-black shadow-md hover:bg-blue hover:text-white focus:outline-none md:px-14"
                >
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchBar;

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired
};
