import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../features/home/HomeScreen';
import { ProfileScreen } from '../features/profile/ProfileScreen';
import Icon from 'react-native-vector-icons/Feather';
import { HomeStack } from './HomeStack';


const Tab = createBottomTabNavigator();


export const TabNav = () => {


    return (
        <Tab.Navigator
            initialRouteName='HomePage'
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: { elevation: 0, borderTopWidth: 0, backgroundColor: 'black' },
                tabBarIcon: ({ focused, iconColor, iconName }) => {
                    if (route.name === 'HomePage') {
                        iconColor = focused ? '#3a86fe' : 'white'
                        iconName = 'home'
                    } else {
                        iconColor = focused ? '#3a86fe' : 'white'
                        iconName = 'user'
                    }
                    return <Icon name={iconName} size={25} color={iconColor} />;
                },
                tabBarShowLabel: false,
            })}
        >

            <Tab.Screen name='HomePage' component={HomeStack} />
            <Tab.Screen name='User' component={ProfileScreen} />
        </Tab.Navigator>
    );
};