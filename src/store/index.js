import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import venueSlice from './modules/VenueSlice';
import profileSlice from './modules/profileSlice';
import loaderSlice from './modules/loaderSlice';
import errorSlice from './modules/errorSlice';

const reducer = combineReducers({
    venues: venueSlice,
    profile: profileSlice,
    loader: loaderSlice,
    error: errorSlice
});

const index = configureStore({
    reducer
});

export default index;
