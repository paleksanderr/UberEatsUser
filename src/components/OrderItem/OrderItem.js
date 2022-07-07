import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const OrderItem = ({ order }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{uri: order.Restaurant.image }} style={styles.image} />
            </View>
            <View style={styles.contentContainer}>
                <Text>OrderItem</Text>
                <Text>OrderItem</Text>
                <Text>OrderItem</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        
    },
    imageContainer: {

    },
    image: {
        width: 100,
        height: 100,
    },
});
export default OrderItem;
