import {
    View,
    Text,
    Image,
    FlatList,
    StyleSheet,
    Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import restaurants from "../../../assets/data/restaurants.json";
import MenuItem from "../../components/MenuItem/MenuItem";
import Header from './Header'
import styles from "./styles";

const restaurant = restaurants[0];

const RestaurantDetails = () => {
    return (
        <View style={styles.page}>
            <FlatList
            ListHeaderComponent={Header}
                data={restaurant.dishes}
                renderItem={({ item }) => <MenuItem dishi={item} />}
                showsVerticalScrollIndicator={false}
            />
                <Ionicons style={styles.iconContainer} name="arrow-back-circle" size={45} color="white" />
        </View>
    );
};

export default RestaurantDetails;
