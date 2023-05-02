import { createSlice } from '@reduxjs/toolkit';

const venueSlice = createSlice({
    name: 'venues',
    initialState: {
        venues: [],
        singleVenue: null,
        cheapestHouses:[],
        topRatedHouses:[]
    },
    reducers: {
        SET_VENUES: (state, action) => {
            state.venues = action.payload;
            let lowestPrice = Infinity;
            let cheapestHouses = [];
            for (let i = 0; i < action.payload.length; i++) {
                const house = action.payload[i];
                if (house.price < lowestPrice) {
                    lowestPrice = house.price;
                    cheapestHouses = [house];
                } else if (house.price === lowestPrice) {
                    cheapestHouses.push(house);
                }
            }
            state.cheapestHouses = cheapestHouses;
            let highestScore = -Infinity;
            let topRatedHouses = [];
            for(let i = 0; i < action.payload.length; i++) {
                const house = action.payload[i];
                if(house.rating > highestScore) {
                    highestScore = house.rating;
                    topRatedHouses = [house];
                } else if (house.rating === highestScore) {
                    topRatedHouses.push(house)
                }
            }
            state.topRatedHouses = topRatedHouses;
        },
        SET_SINGLE_VENUE: (state, action) => {
            state.singleVenue = action.payload
        }
    }
})

export default venueSlice.reducer;

const { SET_VENUES } = venueSlice.actions;
const { SET_SINGLE_VENUE } = venueSlice.actions;

export const fetchVenues = () => async (dispatch) => {
  try {
    const response = await fetch('https://nf-api.onrender.com/api/v1/holidaze/venues');
    const data = await response.json();
    console.log(data);
    dispatch(SET_VENUES(data));
  } catch (e) {
    console.log(e);
  }
};

export const fetchSingleVenue = (id) => async (dispatch) => {
  try {
    const response = await fetch(`https://nf-api.onrender.com/api/v1/holidaze/venues/${id}`);
    const data = await response.json();
    console.log(data);
    dispatch(SET_SINGLE_VENUE(data));
  } catch (e) {
    console.log(e);
  }
};
