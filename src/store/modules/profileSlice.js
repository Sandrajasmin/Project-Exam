import { createSlice } from '@reduxjs/toolkit';
import { setLoadingState } from './loaderSlice';
import { setError } from './errorSlice';

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        singleProfile: null
    },
    reducers: {
        SET_SINGLE_PROFILE: (state, action) => {
            state.singleProfile = action.payload;
        }
    }
});

export default profileSlice.reducer;

const { SET_SINGLE_PROFILE } = profileSlice.actions;
const accessToken = localStorage.getItem('accessToken');

export const fetchProfile = (name, profileData) => async (dispatch) => {
    dispatch(setLoadingState(true));
    try {
        const response = await fetch(
            `https://nf-api.onrender.com/api/v1/holidaze/profiles/${name}?_bookings=true&_venues=true`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`
                },
                body: JSON.stringify(profileData)
            }
        );
        const data = await response.json();
        dispatch(SET_SINGLE_PROFILE(data));
        dispatch(setLoadingState(false));
    } catch (e) {
        dispatch(setError(true, e.message));
    }
};

export const fetchBookingOwner = (name, profileData) => async (dispatch) => {
    dispatch(setLoadingState(true));
    try {
        const response = await fetch(
            `https://nf-api.onrender.com/api/v1/holidaze/profiles/${name}/venues?_bookings=true&_owner=true`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`
                },
                body: JSON.stringify(profileData)
            }
        );
        const data = await response.json();
        dispatch(SET_SINGLE_PROFILE(data));
        dispatch(setLoadingState(false));
    } catch (e) {
        dispatch(setError(true, e.message));
    }
};
