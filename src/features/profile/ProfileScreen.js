import { SafeAreaView, View, Text, Icon, Image } from "react-native";
import { styles } from "./styles";
import { ProfileCard } from "../../components/ProfileCard";
import { useSelector } from 'react-redux';
import { selectCurrentUser } from "../auth/authSlice";
import { useDispatch } from "react-redux";
import { logoutUser } from "../auth/authSlice";

export const ProfileScreen = () => {
    const user = useSelector(selectCurrentUser);

    const dispatch = useDispatch();


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.body} >
                <View style={styles.upper}>
                    <View style={styles.iconContainer}>
                        <Image source={{ uri: user.avatar }} style={styles.img} />
                    </View >
                    {/* <Iconame='add-circle' size={35} color='black' style={styles.check} /> */}

                    <Text style={styles.text}>
                        {user.firstName} {user.lastName}
                    </Text>
                </View>

                <View style={styles.lower}>

                    <ProfileCard
                        iconName='lock-closed'
                        title='Security'
                    />

                    <ProfileCard
                        iconName='language'
                        title='Language'
                    />

                    <ProfileCard
                        iconName='log-out'
                        title='Logout'
                        onPress={() => dispatch(logoutUser())}
                    />

                </View>
            </View>

        </SafeAreaView>
    );
};