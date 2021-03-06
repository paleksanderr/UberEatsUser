import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const OrderItem = ({ order }) => {
    const navigation = useNavigation();
    return (
        <Pressable onPress={() => navigation.navigate("OrderDetails")}>
            <View style={styles.container1}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: order.Restaurant.image }}
                        style={styles.image}
                    />
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.titleText}>
                        {order.Restaurant.name}
                    </Text>
                    <Text style={styles.text1}>3 items &#8226; $38.45</Text>
                    <Text style={styles.text1}>OrderItem &#8226; NEW</Text>
                </View>
            </View>
            <View style={styles.separator}></View>
        </Pressable>
    );
};
const styles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",

    },
    container1: {
        flexDirection: 'row',
        alineItems:'center'
    },
    imageContainer: {
        
    },
    contentContainer:{
        marginLeft:10,
    },
    image: {
        width:75,
        height: 75,
    },
    separator: {
    height: 1,
    backgroundColor: 'lightgray',
    marginVertical: 10,
  },
  titleText:{
    fontSize: 15,
    fontWeight:'600',
    marginBottom:5,
  },
  text1:{
    color: 'lightgrey'
  },
});
export default OrderItem;
