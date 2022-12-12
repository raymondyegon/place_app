import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../features/home/HomeScreen";

const Stack = createNativeStackNavigator();


export const HomeStack = () => {

    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />



        </Stack.Navigator>
    );
};