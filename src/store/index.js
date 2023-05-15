import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import venueSlice from './modules/VenueSlice';
import profileSlice from './modules/profileSlice';

const reducer = combineReducers({
    venues: venueSlice,
    profile: profileSlice
});

const index = configureStore({
    reducer
});

export default index;
