import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { AsyncStorage } from 'react-native';

import { combineReducers, getDefaultMiddleware } from "redux";
import authReducer from './features/auth/authSlice';
import placeReducer from './features/home/PlacesSlice';
import { authApi } from "./services/AuthService";
import { placesApi } from "./services/PlacesService";

const persistConfig = {
    key: "root",
    version: 1,
    storage: AsyncStorage,
    whitelist: ['auth']
};

const reducer = combineReducers({
    [authApi.reducerPath]: authApi.reducer,
    [placesApi.reducerPath]: placesApi.reducer,
    auth: authReducer,
    place: placeReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }).concat(authApi.middleware, placesApi.middleware),
});


