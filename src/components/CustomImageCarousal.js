import { StyleSheet, View, Image, useWindowDimensions } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import Animated, {
    useSharedValue,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    interpolate,
    useAnimatedRef
} from 'react-native-reanimated';

import { CardImage } from './CardImage';
import { useNavigation } from '@react-navigation/native';


export const CustomImageCarousal = ({ data, autoPlay }) => {
    const navigation = useNavigation();
    const scrollViewRef = useAnimatedRef(null);
    const interval = useRef();
    const [isAutoPlay, setIsAutoPlay] = useState(autoPlay);
    const [newData] = useState([
        { key: 'spacer-left' },
        ...data,
        { key: 'spacer-right' },
    ]);
    const { width } = useWindowDimensions();
    const SIZE = width * 0.7;
    const SPACER = (width - SIZE) / 2;
    const x = useSharedValue(0);
    const offSet = useSharedValue(0);

    const onScroll = useAnimatedScrollHandler({
        onScroll: event => {
            x.value = event.contentOffset.x;
        },
    });

    useEffect(() => {
        if (isAutoPlay === true) {
            let _offSet = offSet.value;
            interval.current = setInterval(() => {
                if (_offSet >= Math.floor(SIZE * (data.length - 1) - 10)) {
                    _offSet = 0;
                } else {
                    _offSet = Math.floor(_offSet + SIZE);
                }
                scrollViewRef.current.scrollTo({ x: _offSet, y: 0 });
            }, 2000);
        } else {
            clearInterval(interval.current);
        }
    }, [SIZE, SPACER, isAutoPlay, data.length, offSet.value, scrollViewRef]);

    return (
        <View>
            <Animated.FlatList
                ref={scrollViewRef}
                onScroll={onScroll}
                onScrollBeginDrag={() => {
                    setIsAutoPlay(false);
                }}
                onMomentumScrollEnd={e => {
                    offSet.value = e.nativeEvent.contentOffset.x;
                    setIsAutoPlay(autoPlay);
                }}
                scrollEventThrottle={16}
                decelerationRate="fast"
                snapToInterval={SIZE}
                horizontal
                bounces={false}
                showsHorizontalScrollIndicator={false}
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => {

                    return (
                        <View style={{ width: SIZE }} key={index}>
                            <Animated.View >

                                <CardImage img={item.image} locName={item.name} location={item.location} rating={item.rating} detailsPage={() => navigation.navigate('PlaceDetailsPage', { place: item })} />

                            </Animated.View>
                        </View>
                    );


                }}

            />

        </View >
    );

};




const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
    },
});