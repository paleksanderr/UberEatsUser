import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import HomeScreen from './src/screens/HomeScreen/HomeScreen'
import RestaurantDetails from './src/screens/RestaurantDetails/RestaurantDetails'
import DishDetailScreen from './src/screens/DishDetailScreen/DishDetailScreen'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      {/* <RestaurantDetails /> */}
      <DishDetailScreen />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
