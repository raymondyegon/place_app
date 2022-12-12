
import { SafeAreaView, View, StyleSheet, Image, TouchableOpacity, Text, ImageBackground } from "react-native";
import { IconButton } from "../../components/IconButton";
// import { styles } from "./styles";
import { dimensions } from "../../utils/Dimensions";
import { OverlayCard } from "../../components/OverlayCard";

export const PlaceDetailsScreen = ({ route, navigation }) => {
    const { place } = route.params;


    return (

        <View  >
            <Image source={{ uri: place.image }} style={styles.image} />




            <View style={styles.top}>
                <TouchableOpacity>
                    <IconButton
                        iconName={'arrow-left'}
                    />
                </TouchableOpacity>

                <Text style={styles.text}>
                    Region
                    {'\n'}
                    {place.location}
                </Text>

                <TouchableOpacity>
                    <IconButton
                        iconName={'info'}
                    />
                </TouchableOpacity>

            </View>


            <OverlayCard
                place={place}
            />

        </View>

    );

};

const styles = StyleSheet.create({
    image: {
        resizeMode: 'cover',
        width: dimensions.screenWidth,
        height: dimensions.screenHeight,

    },

    top: {
        padding: 20,
        marginTop: 30,
        justifyContent: 'space-between',
        flexDirection: 'row',
        position: 'absolute',
        width: dimensions.screenWidth,
    },
    text: {
        fontSize: 15,
        color: 'white',
        top: 10
    },
})