import { dimensions } from "../utils/Dimensions";
import { StyleSheet, View, Text, TextInput } from "react-native";

export const Input = ({ title, placeholder, autoComplete, value, ...rest }) => {

    return (
        <View style={{ marginTop: 10, marginVertical: 30 }}>
            <Text style={styles.text}> {title} </Text>
            <TextInput
                placeholder={placeholder}
                style={styles.input}
                autoComplete={autoComplete}
                placeholderTextColor='grey'
                value={value}
                secureTextEntry={title === 'Password' ? true : false}
                autoCapitalize='none'
                {...rest}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: 'black',
    },
    input: {
        borderColor: 'black',
        borderWidth: 1.5,
        width: 0.9 * dimensions.screenWidth,
        height: 0.08 * dimensions.screenHeight,
        padding: 10,
        fontSize: 15,
        color: 'black',
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
    }
})