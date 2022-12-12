import { StyleSheet, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';


export const OverlayCard = ({ place }) => {

    return (
        <View style={styles.container}>
            <View style={styles.align}>
                <Text style={styles.text}>
                    {place.name}
                </Text>

                <View style={styles.rating}>
                    <Icon name={'star'} size={15} color='yellow' />
                    <Text style={styles.ratingText}>  {place.rating} </Text>
                </View>
            </View>

            <View style={[styles.align, { left: 0, top: 0 }]}>
                <Icon name={'location-outline'} size={25} color='white' />
                <Text style={[styles.text, {
                    fontSize: 15,
                    padding: 0,
                    left: 0,
                    color: 'white',
                }]}>  {place.location} </Text>
            </View>

            <View style={[styles.align, { left: 0, top: 30 }]}>
                <Icon name={'time-outline'} size={25} color='white' />
                <Text style={[styles.text, {
                    fontSize: 15,
                    padding: 0,
                    left: 0,
                    color: 'white',
                }]}> 30  Minutes </Text>
            </View>

        </View>
    );
};






const styles = StyleSheet.create({
    align: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },

    container: {
        backgroundColor: 'black',
        top: '400%',
        opacity: 0.8,
        height: 150,
        width: '85%',
        alignSelf: 'center',
        borderRadius: 15
    },

    text: {
        color: 'white',
        fontSize: 18,
        padding: 10,
        // left: 40,
    },

    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // right: 40,
    },

    ratingText: {
        color: 'white',
        fontSize: 12,
        top: 2,
        left: 2,
    },

    button: {
        backgroundColor: 'black',
        width: '50%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderWidth: 2,
        borderColor: 'white',
        marginTop: 40,
        // left: -5,
        backgroundColor: 'transparent',
    }
});