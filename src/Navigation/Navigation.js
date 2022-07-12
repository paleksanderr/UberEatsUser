import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen/HomeScreen";
import RestaurantDetails from "../screens/RestaurantDetails/RestaurantDetails";
import DishDetailScreen from "../screens/DishDetailScreen/DishDetailScreen";
import Basket from "../screens/Basket/Basket";
import OrdersScreen from "../screens/OrdersScreen/OrdersScreen";
import OrderDetails from "../screens/OrderDetails/OrderDetails";
import Profile from "../screens/Profile/index";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}} >
            <Stack.Screen name="HomeTab" component={HomeTab} />
        </Stack.Navigator>
    );
};

const Tab = createMaterialBottomTabNavigator();
const HomeTab = () => {
    return (
        <Tab.Navigator barStyle={{ backgroundColor: "white" }}>
            <Tab.Screen
                name="Home"
                component={HomeStackNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="home" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Orders"
                component={OrdersStackNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="cutlery" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="user" size={24} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="Restaurants" component={HomeScreen} />
            <HomeStack.Screen name="Restaurant" component={RestaurantDetails} />
            <HomeStack.Screen name="Dishi" component={DishDetailScreen} />
            <HomeStack.Screen name="Basket" component={Basket} />
            <HomeStack.Screen name="OrderDetails" component={OrderDetails} />

        </HomeStack.Navigator>
    );
};

const OrdersStack = createNativeStackNavigator();

const OrdersStackNavigator = () => {
    return (
        <OrdersStack.Navigator >

            <OrdersStack.Screen name="Dishi" component={OrdersScreen} />

            <OrdersStack.Screen name="OrderDetails" component={OrderDetails} />

        </OrdersStack.Navigator>
    );
};
export default RootNavigation;
