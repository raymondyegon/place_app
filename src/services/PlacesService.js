import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { randomPlacesMock, randomLocationMock } from '../mocks/ApiMock';

export interface LocationDetails {
    city: String,
    country: String
}


export interface PlaceDetails {
    id: String,
    name: String,
    rating: String,
    image: String,
    location: String,
    category: String
}


export const placesApi = createApi({
    reducerPath: "placesApi",
    tagTypes: ['PlaceDetails'],
    baseQuery: fetchBaseQuery({
        baseUrl: '/places',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token

            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }

            return headers
        },
    }),
    endpoints: (builder) => ({
        getLocation: builder.mutation({
            queryFn: () => ({ data: randomLocationMock() })
        }),
        getPlaces: builder.mutation({
            queryFn: () => ({ data: randomPlacesMock() }),
            // transformResponse: (response) => response.places,
        }),
    })
});


export const { useGetLocationMutation, useGetPlacesMutation } = placesApi;
