import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native"

const RestaurantItem = ({ restaurant }) => {
const navigation = useNavigation()

  const onPress = () => {
    navigation.navigate('Restaurant', {id: restaurant.id})
  }
  return (
    <Pressable onPress={onPress} style={styles.restaurantContainer}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{restaurant.name}</Text>
          <Text style={styles.subTitle}>
            {" "}
            {`$${restaurant.deliveryFee}`} &#8226;{" "}
            {`${restaurant.minDeliveryTime}-${restaurant.maxDeliveryTime} minutes`}
          </Text>
        </View>
        <View style={styles.rating}>
            <Text>{restaurant.rating}</Text>
        </View>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
    marginBottom: 5,
  },
  rating:{
    marginLeft: "auto",
    backgroundColor: "lightgrey",
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  row:{
    flexDirection: "row",
    alignItems: "center",
  },
  restaurantContainer: {
    width: "100%",
    marginVertical: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "500",
    marginVertical: 5,
  },

  subTitle: {
    color: "grey",
  },
});

export default RestaurantItem;
