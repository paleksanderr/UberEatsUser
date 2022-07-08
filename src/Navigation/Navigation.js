import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen/HomeScreen";
import RestaurantDetails from "../screens/RestaurantDetails/RestaurantDetails";
// import DishDetailScreen from "../screens/DishDetailScreen/DishDetailScreen";
// import Basket from "../screens/Basket/Basket";
// import OrdersScreen from "../screens/OrdersScreen/OrdersScreen";
// import OrderDetails from "../screens/OrderDetails/OrderDetails";

const Stack = createNativeStackNavigator();


const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Restaurant" component={RestaurantDetails} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

export default RootNavigation