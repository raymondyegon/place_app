import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';


export const IconButton = ({ iconName, onPress }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.iconButton}>
            {iconName === 'arrow-left'
                ?
                <Icon name={iconName} color={'white'} size={20} onPress={() => navigation.goBack()} />
                :
                <Icon name={iconName} color={'white'} size={20} onPress={onPress} />
            }
        </View>
    );
};


const styles = StyleSheet.create({
    iconButton: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        width: 45,
        height: 45,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'white'
    },
});