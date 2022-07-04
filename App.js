import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import RestaurantItem  from "./src/components/RestaurantItem/RestaurantItem";
import restaurants from './assets/data/restaurants.json';

export default function App() {
  return (
    <View style={styles.container}>
      {/* restaurant item */}
      <RestaurantItem
        name={"rest1"}
        description={"description"}
        image={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg",
        }}
        price={1.99}
      />
      <RestaurantItem
        name={"rest2"}
        image={{
          uri: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}
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
  }
});
