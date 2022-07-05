import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View } from 'react-native';

import RestaurantItem  from "./src/components/RestaurantItem/RestaurantItem";
import restaurants from './assets/data/restaurants.json';

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={restaurants}
        renderItem={({item}) => <RestaurantItem restaurant={item} />}
        showsVerticalScrollIndicator={false}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingVertical: 30,
  }
});
