import { SafeAreaView, View, TouchableOpacity, Text, ScrollView, ActivityIndicator, FlatList } from "react-native";
import { styles } from './styles';
import { IconButton } from "../../components/IconButton";
import { SearchButton } from "../../components/SearchButton";
import { Categories } from "../../components/Categories";
import { CardImage } from "../../components/CardImage";
import { CustomImageCarousal } from "../../components/CustomImageCarousal";
import { useGetLocationMutation, useGetPlacesMutation } from "../../services/PlacesService";
import { useSelector } from "react-redux";
import { selectCurrentLocation, selectCurrentPlaces } from "./PlacesSlice";
import { useEffect, useCallback } from "react";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { dimensions } from "../../utils/Dimensions";


export const HomeScreen = () => {
    const navigation = useNavigation();

    const [getLocation, { isLoading: isLoadingLocation, data: locationData }] = useGetLocationMutation();
    const [getPlaces, { isLoading: isLoadingPlaces, data: placesData, error: placesError }] = useGetPlacesMutation();

    useEffect(() => {
        getLocation();
        getPlaces();
    }, []);

    useFocusEffect(
        useCallback(() => {
            const fetchData = async () => {
                await getLocation();
                await getPlaces();
            };

            fetchData();

        },
            []
        )
    );


    return (
        <SafeAreaView style={styles.container}>
            <View style={{ backgroundColor: 'black', height: dimensions.screenHeight, width: dimensions.screenWidth }} >
                <View style={styles.upper}>
                    <View style={styles.top}>

                        <IconButton
                            iconName={'align-left'}
                        />


                        {
                            isLoadingLocation
                                ?
                                <ActivityIndicator />
                                :
                                <Text style={styles.text}>
                                    Current Location
                                    {'\n'}
                                    {locationData?.city}, {locationData?.country}
                                </Text>
                        }

                        <IconButton
                            iconName={'bell'}
                        />
                    </View>

                    <SearchButton />



                    {
                        placesData ?

                            <FlatList
                                horizontal
                                bounces={false}
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={(item) => item.id}
                                data={placesData}

                                ItemSeparatorComponent={
                                    Platform.OS !== 'android' &&
                                    (({ highlighted }) => (
                                        <View
                                            style={[
                                                { margin: 10 }
                                            ]}
                                        />
                                    ))
                                }
                                renderItem={({ item, index }) => {
                                    return <Categories name={item.category} />
                                }}
                            />

                            :
                            <ActivityIndicator />
                    }

                </View>
                {
                    placesData
                        ?


                        <CustomImageCarousal
                            data={placesData}
                            autoPlay={false}

                        />



                        :
                        <ActivityIndicator />
                }

                <View style={styles.bottom}>
                </View>
            </View>
        </SafeAreaView>
    );

};