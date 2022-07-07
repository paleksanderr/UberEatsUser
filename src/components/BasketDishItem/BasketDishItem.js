
import { View, Text, StyleSheet, Dimensions, Button, FlatList } from "react-native";


 
const BasketDishItem = ({ basketList }) => {
    return (
        <View>
            <View style={styles.row}>
                <View style={styles.quantityItem}>
                    <Text>1</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>{basketList.name}</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text>${basketList.price}</Text>
                </View>
            </View>
        </View>
    );
};

export default BasketDishItem;

const styles = StyleSheet.create({

    row: {
        flexDirection: "row",
        marginTop: 30,
        alignItems: "center",
        margin: 10,
    },
    priceContainer: {
        marginLeft: "auto",
    },
    quantityItem: {
        backgroundColor: "lightgrey",
        width: 20,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
        borderRadius: 3,
    },

    name: {
        fontWeight: "600",
    },
});