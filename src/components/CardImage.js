import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon2 from 'react-native-vector-icons/Ionicons';

export const CardImage = ({ img, locName, rating, location, detailsPage }) => {
    return (
        <View>
            <TouchableOpacity
                onPress={detailsPage}
            >
                <View>
                    <Image source={{ uri: img }} style={styles.img} />
                </View>

                <View style={styles.align}>
                    <Text style={styles.text}>
                        {locName}
                    </Text>

                    <View style={styles.rating}>
                        <Icon2 name={'star'} size={15} color='yellow' />
                        <Text style={styles.ratingText}> {rating} </Text>
                    </View>
                </View>

                <View style={[styles.align, { justifyContent: null, left: 5 }]}>
                    <Icon2 name={'location'} size={15} color='white' />
                    <Text style={[styles.text, {
                        fontSize: 15,
                        padding: 0,
                        color: 'white',
                    }]}> {location}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    img: {
        resizeMode: 'cover',
        width: 260,
        height: 300,
        borderRadius: 20,
    },

    text: {
        color: 'white',
        fontSize: 20,
        padding: 10,
    },

    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    ratingText: {
        color: 'white',
        fontSize: 16,
        top: 2
    },

    align: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 250
    },
});