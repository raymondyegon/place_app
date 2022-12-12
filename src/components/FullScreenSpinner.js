import { View, ActivityIndicator, StyleSheet } from "react-native";
import React from 'react';


const FullScreenSpinnerHOC = (Comp) => {

    return ({ spinner, children, ...props }) => (
        <View style={{ flex: 1 }}>
            <Comp {...props}>
                {children}
            </Comp>
            {
                spinner &&
                <View
                    style={[
                        StyleSheet.absoluteFill,
                        { backgroundColor: 'rgba(0, 0, 0, 0.7)', justifyContent: 'center' }
                    ]}
                >
                    <ActivityIndicator size="large" />
                </View>
            }
        </View>
    );
};

export const FullScreenSpinner = FullScreenSpinnerHOC(View)