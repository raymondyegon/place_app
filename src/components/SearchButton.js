import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import IconButton from './IconButton';
import { useNavigation } from '@react-navigation/native';

export const SearchButton = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* => Navigation to search page */}
            <TouchableOpacity >
                <View style={styles.search}>
                    <Icon name='search' size={25} color='white' />
                    <Text style={styles.text}> Search for places, hotels, destinations </Text>
                </View>
            </TouchableOpacity>


        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },

    search: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'black',
        width: 330,
        height: 50,
        padding: 10,
        borderWidth: 2,
        borderColor: 'white',
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
    },

    text: {
        fontSize: 16,
        left: 10,
        top: 2,
        color: 'white',
        alignSelf: 'center',
    }
});