import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from 'react-redux';
import { selectCurrentUser } from "../features/auth/authSlice";
import { TabNav } from "./TabNav";
import { AuthStack } from "./AuthStack";

export const Routes = () => {
    const user = useSelector(selectCurrentUser);


    return (
        <NavigationContainer>
            {user ? <TabNav /> : <AuthStack />}
        </NavigationContainer>
    );
};