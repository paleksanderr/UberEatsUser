import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import HomeScreen from './src/screens/HomeScreen/HomeScreen'
import RestaurantDetails from './src/screens/RestaurantDetails/RestaurantDetails'
import DishDetailScreen from './src/screens/DishDetailScreen/DishDetailScreen'
import Basket from './src/screens/Basket/Basket'
import OrdersScreen from './src/screens/OrdersScreen/OrdersScreen'
import OrderDetails from './src/screens/OrderDetails/OrderDetails'
export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      {/* <RestaurantDetails /> */}
      {/* <DishDetailScreen /> */}
      {/* <Basket /> */}
      {/* <OrdersScreen /> */}
      <OrderDetails /> 
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",

    },
});
