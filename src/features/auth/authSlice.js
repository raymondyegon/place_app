import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../services/AuthService';

const initialState = {
    user: User | undefined,
    isLoggedIn: false,
    token: String | undefined
};


const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        loginUser: (
            state,
            { payload: { user, token } }: PayloadAction<{ user: User; token: string }>
        ) => {
            state.isLoggedIn = true
            state.user = user
            state.token = token
        },
        logoutUser: (state) => {
            state.isLoggedIn = false
            state.user = undefined
            state.token = undefined
        }
    },
});


export const { loginUser, logoutUser } = authSlice.actions;

export const selectCurrentUser = (state) => state.auth.user;

export default authSlice.reducer;