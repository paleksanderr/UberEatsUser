import { useState } from "react";
import { View, Text, StyleSheet, Dimensions, Button, FlatList, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

import restaurants from "../../../assets/data/restaurants.json";
import BasketDishItem from "../../components/BasketDishItem/BasketDishItem";

const restaurant = restaurants[0];



const Basket = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.page}>
            <Text style={styles.title}>{restaurant.name}</Text>
            <Text style={styles.itemTitle}>Your Items</Text>
            <View>

            <FlatList
            data={restaurant.dishes}
            renderItem={({ item }) => <BasketDishItem basketList={item} />} 
            
            />
            </View>
            <View style={styles.separator}></View>
            <Pressable onPress={()=> navigation.navigate('OrderDetails')} style={styles.button}>
                <Text style={styles.buttonText}>Create Order</Text>
            </Pressable >
        </View>
    );
};

const styles = StyleSheet.create({

    button: {
        marginTop: "auto",
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    buttonText: {
        color: "white",
        fontWeight: "600",
        fontSize: 18,
    },

    row: {
        flexDirection: "row",
        marginTop: 30,
        alignItems: "center",
    },
    page: {
        flex: 1,

        width: Dimensions.get("window").width,
        paddingVertical: 20,
        padding: 20,
    },
    priceContainer: {
        marginLeft: "auto",
    },
    quantityItem: {
        backgroundColor: "lightgrey",
        width: 20,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
        borderRadius: 3,
    },
    title: {
        fontSize: 24,
        fontWeight: "600",
        marginVertical: Dimensions.get("window").height * 0.03,
    },
    separator: {
        height: 1,
        backgroundColor: "lightgray",
        marginVertical: 10,
    },
    name: {
        fontWeight: "600",
    },
    itemTitle: {
        fontWeight: "600",
        fontSize: 19,
    },
});

export default Basket;
