import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import React from "react";

import OrderItem from "../../../src/components/OrderItem/OrderItem";
import orders from "../../../assets/data/orders.json";

const OrdersScreen = () => {
    return (
        <View style={styles.try}>
            <View style={styles.title}>
                <Text style={styles.titleText}>Your Orders</Text>
            </View>
            <View style={styles.orderList}>

            <FlatList
            data={orders}
            renderItem={({item}) => <OrderItem order={item}/>}    />
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    title: { 
        marginTop: 60,
        marginBottom: 20,
        alignItems: "center",
    },
    titleText: {
        fontSize: 25,
        fontWeight: "600",
    },
    try: {
        
    },
    orderList: {
      flex: 1, 
      width: Dimensions.get("window").width,
      padding:20
    }
});

export default OrdersScreen;
