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
import styles from "./styles";

const restaurant = restaurants[0];

const Header = () => {
    return (
        <View>
            <Image source={{ uri: restaurant.image }} style={styles.image} />

            <View style={styles.titleContainer}>
                <Text style={styles.title}>{restaurant.name}</Text>
                <Text style={styles.subTitle}>
                    {" "}
                    {`$${restaurant.deliveryFee}`} &#8226;{" "}
                    {`${restaurant.rating}`}
                    <Ionicons name="star" size={16} color="orange" />
                </Text>
            </View>

        </View>
    );
};



export default Header;
