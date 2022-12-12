import { PlaceDetails, LocationDetails } from "../../services/PlacesService"
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { placesApi } from "../../services/PlacesService";



const placeSlice = createSlice({
    name: "place",
    initialState: { location: undefined, places: undefined },
    extraReducers: (builder) => {
        builder.addMatcher(
            placesApi.endpoints.getPlaces.matchFulfilled,
            (state, { payload }) => {
                state.places = payload
            }
        ).addMatcher(
            placesApi.endpoints.getLocation.matchFulfilled,
            (state, { payload }) => {
                state.location = payload
            }
        )
    }
});



export const selectCurrentLocation = (state) => state.place.location;

export const selectCurrentPlaces = (state) => state.place.places;

export default placeSlice.reducer;