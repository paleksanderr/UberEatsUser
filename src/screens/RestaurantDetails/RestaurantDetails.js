import { View, Text, Image, FlatList, StyleSheet, Dimensions } from 'react-native'

import restaurants from '../../../assets/data/restaurants.json'

const restaurant = restaurants[0]


const RestaurantDetails = () => {
  return (
    <View style={styles.page}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={styles.subTitle}>
        {" "}
        {`$${restaurant.deliveryFee}`} &#8226;{" "}
        {`${restaurant.minDeliveryTime}-${restaurant.maxDeliveryTime} minutes`}
      </Text>
    </View>
  );
}
 
const styles = StyleSheet.create({
  image:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 4,
    
    
  },
  title:{

  },
  page: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
})

export default RestaurantDetails