import { View, Text } from 'react-native'
import React from 'react'

import oders from '../../../assets/data/orders.json'

const OrderDetails = () => {
  return (
      <View>
          <View>
              <Image source={{ uri: restaurant.image }} style={styles.image} />

              <View style={styles.titleContainer}>
                  <Text style={styles.title}>{restaurant.name}</Text>
                  <Text style={styles.subTitle}>
                      {" "}
                      {`$${restaurant.deliveryFee}`} &#8226;{" "}
                      {`${restaurant.rating}`}
                  </Text>

                  <Text style={styles.menuTitle}>Menu</Text>
              </View>
          </View>
      </View>
  );
}

export default OrderDetails