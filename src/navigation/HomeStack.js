import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../features/home/HomeScreen";
import { PlaceDetailsScreen } from "../features/home/PlaceDetailsScreen";

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
            <Stack.Screen name="PlaceDetailsPage" component={PlaceDetailsScreen} />


        </Stack.Navigator>
    );
};