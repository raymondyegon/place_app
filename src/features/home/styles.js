import { StyleSheet, StatusBar, Platform } from 'react-native';
import { dimensions } from '../../utils/Dimensions';


export const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    upper: {
        height: dimensions.screenHeight / 3.5,
        backgroundColor: 'black',
    },

    middle: {
        height: dimensions.screenHeight / 1.8,
        flexDirection: 'row',
        width: dimensions.screenWidth * 4.1,
        backgroundColor: 'black',
    },

    bottom: {
        height: (dimensions.screenHeight - (dimensions.screenHeight / 3.5) - (dimensions.screenHeight / 1.8)),
        backgroundColor: "black",
    },
    top: {
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    text: {
        fontSize: 15,
        color: 'white',
        top: 10,
        alignContent: "center",
        alignItems: "center",
    },
    categories: {
        width: dimensions.screenWidth * 1.2,
        flexDirection: 'row',
        justifyContent: "space-evenly",
        bottom: 10
    },
});