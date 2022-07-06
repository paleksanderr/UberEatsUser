import {
    View,
    Text,
    Image,
} from "react-native";


import styles from "./styles";


const Header = ( { restaurant }) => {
    return (
        <View>
            <Image source={{ uri: restaurant.image }} style={styles.image} />

            <View style={styles.titleContainer}>
                <Text style={styles.title}>{restaurant.name}</Text>
                <Text style={styles.subTitle}>
                    {" "}
                    {`$${restaurant.deliveryFee}`} &#8226;{" "}
                    {`${restaurant.rating}`}
                    
                </Text>

                <Text style={styles.menuTitle}>Menu</Text>
            </View>

        </View>
    );
};



export default Header;
