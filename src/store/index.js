import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import venueSlice from './modules/VenueSlice';

const reducer = combineReducers({
    venues: venueSlice
});

const index = configureStore({
    reducer
});

export default index;
