import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from './src/navigation/Routes';
import { LoginScreen } from "./src/screens/LoginScreen";
import { View } from "react-native";
import { HomeTabNav } from "./src/navigation/HomeTabNav";
import { store } from "./src/store";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from "redux-persist";


const persistor = persistStore(store);

export const App = () => {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} >
        <Routes />
      </PersistGate>
    </Provider>
  );
};