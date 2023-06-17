import { createSlice } from '@reduxjs/toolkit';
import { setLoadingState } from './loaderSlice';
import { setError } from './errorSlice';

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        singleProfile: null,
        error: null,
    },
    reducers: {
        SET_SINGLE_PROFILE: (state, action) => {
            state.singleProfile = action.payload;
        },
        SIGNIN_ERROR: (state, action) => {
            state.error = action.payload;
        },
    }
});

export const {
    SET_SINGLE_PROFILE,
    SIGNIN_ERROR
} = profileSlice.actions;

export default profileSlice.reducer;


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
export const SignIn = (userData, dispatch) => {
    fetch('https://nf-api.onrender.com/api/v1/holidaze/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then((data) => {
            localStorage.setItem('userName', data.name);
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('avatar', data.avatar);
            localStorage.setItem('email', data.email);
            localStorage.setItem('venueManager', data.venueManager);
            window.location = '/';
        })
        .catch((error) => {
            dispatch(SIGNIN_ERROR(error.message));
        });
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
