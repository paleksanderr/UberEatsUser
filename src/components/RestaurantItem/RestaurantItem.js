import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const RestaurantItem = () => {
  return (
    <View style={styles.restaurantContainer}>
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg",
        }}
        style={styles.image}
      />
      <Text style={styles.title}>El Cabo Coffe Bar Tres De Mayo</Text>
      <Text style={styles.subTitle}>$1.99 20-40min</Text>
    </View>
  );
};
const styles = StyleSheet.create({

  image: {
    width: "100%",
    aspectRatio: 5 / 3,
    marginBottom: 5,
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



