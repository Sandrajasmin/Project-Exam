import React from 'react';
import VenueForm from './components/venueform';
import Dashboard from '../../components/dashboard/dashboard';

const CreateVenue = () => {
    return (
        <div className="mx-auto max-w-7xl px-5">
            <div className="my-5 flex gap-5">
                <Dashboard />
                <VenueForm />
            </div>
        </div>
    );
};

export default CreateVenue;
