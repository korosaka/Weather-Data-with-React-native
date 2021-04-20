import React from "react";
import {StyleSheet, View, Text} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
});

const AreaListScreen = (data: any) => {
    return (
        <View style={styles.container}>
            <Text>AreaList Screen</Text>
        </View>
    )
}

export default AreaListScreen;