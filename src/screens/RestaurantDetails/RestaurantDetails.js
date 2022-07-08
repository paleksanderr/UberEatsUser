import {
    View,
    Text,
    Image,
    FlatList,
    StyleSheet,
    Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";

import restaurants from "../../../assets/data/restaurants.json";
import MenuItem from "../../components/MenuItem/MenuItem";
import Header from './Header'
import styles from "./styles";

const restaurant = restaurants[0];

const RestaurantDetails = () => {
    const route = useRoute();
    const navigation = useNavigation();

    const id = route.params?.id;
    console.warn(id)

    return (
        <View style={styles.page}>
            <FlatList
                ListHeaderComponent={() => <Header restaurant={restaurant} />}
                data={restaurant.dishes}
                renderItem={({ item }) => <MenuItem dishi={item} />}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.name}
            />
            <Ionicons
                onPress={() => navigation.goBack()}
                style={styles.iconContainer}
                name="arrow-back-circle"
                size={45}
                color="white"
            />
        </View>
    );
};

export default RestaurantDetails;
