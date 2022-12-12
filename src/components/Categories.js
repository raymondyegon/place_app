import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export const Categories = ({ name }) => {
    return (
        <View>

            <TouchableOpacity>
                <View style={styles.container}>
                    <Text style={styles.text}>
                        {name}
                    </Text>
                </View>
            </TouchableOpacity>

        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: "black",
        marginTop: 20,
        height: 50,
        width: 120,
        borderRadius: 15,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        top: 10,
        borderWidth: 2,
        borderColor: 'white'
    },
    text: {
        fontSize: 15,
        color: 'white'
    }
});