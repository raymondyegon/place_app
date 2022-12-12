import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

export const IconButtonDark = ({ iconName, onPress }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.iconContainer}>

            <Icon name={iconName} color={'white'} size={20} onPress={onPress} />

        </View>
    )
};


const styles = StyleSheet.create({
    iconContainer: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        width: 40,
        height: 40,
        borderRadius: 15,
    },
});