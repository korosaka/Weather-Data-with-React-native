import React from "react";
import {StyleSheet, View, Text, Button} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
});

const HomeScreen = (data: any) => {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button 
                title="navigationButton" 
                onPress={() => {
                data.navigation.navigate("AreaList")
            }}>Start</Button>
        </View>
    );
}

export default HomeScreen;