import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'

import orders from "../../../assets/data/orders.json";
import restaurants from "../../../assets/data/restaurants.json";
import styles from './styles'
import OrderItem from '../../components/OrderItem/OrderItem'

const order = orders[0]


const OrderDetailsHeader = () => {
  return (
      <View>
          <View style={styles.page}>
              <Image source={{ uri: order.Restaurant.image }} style={styles.image} />

              <View style={styles.titleContainer}>
                  <Text style={styles.title}>{order.Restaurant.name}</Text>
                  <Text style={styles.subTitle}>{order.status} &#8226; {order.createdAt}</Text>
                  <Text style={styles.menuTitle}>Your Order</Text>

              </View>
          </View>
      </View>
  );
}

const OrderDetails = () => {
  return (
      <FlatList
          data={restaurants[0].dishes}
          renderItem={({ item }) => <OrderItem order={item} />}
      />
  );
}

export default OrderDetails