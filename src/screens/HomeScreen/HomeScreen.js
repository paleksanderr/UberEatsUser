import { FlatList } from 'react-native'
import React from 'react'

import  RestaurantItem  from '../../components/RestaurantItem/RestaurantItem'
import restaurants from '../../../assets/data/restaurants.json'
const HomeScreen = () => {
  return (
    <FlatList
      data={restaurants}
      renderItem={({ item }) => <RestaurantItem restaurant={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
}

export default HomeScreen