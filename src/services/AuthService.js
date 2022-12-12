import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { loginMockResponse } from '../mocks/AuthMock';


export interface User {
    firstname: String,
    lastname: String,
    id: String,
    email: String,
    avatar: String,
    registeredAt: String
}

export interface UserResponse {
    user: User,
    token: string
}


export const authApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: '/login',
        prepareHeaders: (headers) => {

            headers.set('api_key', 'c0082183-35d6-4d39-ac7b-819c546c3b73')
            headers.set('secret_key', 'ecf3ff4a-78d8-4362-9824-3fd272bb3499')

            return headers
        },
    }),

    endpoints: (builder) => ({
        login: builder.mutation({
            queryFn: () => ({ data: loginMockResponse() })
        })
    }),
});

export const { useLoginMutation } = authApi;