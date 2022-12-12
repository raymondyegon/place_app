import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';


export const ProfileCard = ({ iconName, title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            < View style={styles.container} >
                <View style={styles.iconText}>
                    <Icon name={iconName} size={25} color='white' />
                    <Text style={styles.text}> {title} </Text>
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={'chevron-forward'} size={30} color='white' />
                </View>
            </View >
        </TouchableOpacity >
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'black',
        width: '80%',
        height: 80,
        borderRadius: 15,
        borderWidth: 1.5,
        borderColor: 'white',
        justifyContent: 'space-between',
        alignSelf: 'center',
        padding: 10,
        marginVertical: 20,
    },

    iconText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        fontSize: 20,
        color: 'white',
        top: 3,
        left: 10
    }
});