import { StyleSheet } from 'react-native';
import { dimensions } from '../../utils/Dimensions';


export const styles = StyleSheet.create({
    container: {
        height: '100%',
        // padding: 15,
        // flex: 1,
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'white'
    },
    title: {
        fontSize: 25,
        fontWeight: '700',
        paddingTop: 10,
        marginBottom: 10,
        // color: "black",
    },
    image: {
        height: '35%',
        width: dimensions.screenWidth,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    text: {
        fontSize: 38,
        color: 'white',
        alignSelf: 'center',
        top: 20
    },
    button: {
        backgroundColor: 'black',
        width: '90%',
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 15,
        top: 70,
    },
});
