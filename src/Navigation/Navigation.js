import { createNativeStackNavigator } from "@react-navigation/native-stack";
import  { createMaterialBottomTabNavigator }  from "@react-navigation/material-bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';

import HomeScreen from "../screens/HomeScreen/HomeScreen";
import RestaurantDetails from "../screens/RestaurantDetails/RestaurantDetails";
// import DishDetailScreen from "../screens/DishDetailScreen/DishDetailScreen";
// import Basket from "../screens/Basket/Basket";
import OrdersScreen from "../screens/OrdersScreen/OrdersScreen";
// import OrderDetails from "../screens/OrderDetails/OrderDetails";

const Stack = createNativeStackNavigator();


const RootNavigation = () => {
  return (
      <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
              name="Home"
              component={HomeScreen}
              
          />
          <Stack.Screen
              name="Restaurant"
              component={RestaurantDetails}
              
          />
          <Stack.Screen name="Orders" component={OrderScreen} />
      </Stack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();
const HomeTabs = () => {
  return (
      <Tab.Navigator>
          <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                  tabBarIcon: ({ color }) => (
                      <FontAwesome name="home" size={24} color={color} />
                  ),
              }}
          />
          <Tab.Screen
              name="Orders"
              component={OrdersScreen}
              options={{
                  tabBarIcon: ({ color }) => (
                      <FontAwesome name="cutlery" size={24} color={color} />
                  ),
              }}
          />
          <Tab.Screen
              name="Profile"
              component={RestaurantDetails}
              options={{
                  tabBarIcon:({color}) => (<AntDesign name="user" size={24} color={color} />),
              }}
          />
          
      </Tab.Navigator>
  );
}

export default HomeTabs;