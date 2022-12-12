import { StyleSheet, StatusBar, Platform } from 'react-native';
import { dimensions } from '../../utils/Dimensions';


export const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    body: {
        backgroundColor: "black",
        // paddingHorizontal: 20,
        height: dimensions.screenHeight,
        width: dimensions.screenWidth,
    },

    text: {
        fontSize: 25,

        color: 'black',
        alignSelf: 'center',
        top: 60,
    },

    upper: {
        height: dimensions.screenHeight / 3.5,
        backgroundColor: 'white',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },

    iconContainer: {
        height: 100,
        width: 100,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'black',
        top: 30,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },

    img: {
        height: 80,
        width: 80,
    },

    check: {
        position: 'absolute',
        bottom: -5,
        right: -12,
    },

    lower: {
        height: dimensions.screenHeight - (dimensions.screenHeight / 3.5),
        backgroundColor: 'black',
        padding: 10,
    }
});