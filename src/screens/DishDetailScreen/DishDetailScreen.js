import { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Pressable } from 'react-native'
import { AntDesign,  } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";


import restaurants from '../../../assets/data/restaurants.json'


const dish = restaurants[0].dishes[0]

const DishDetailScreen = () => {
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(1);
  
  const onPlus = () => {
    
    setQuantity(quantity + 1);
  }
  const onMinus = () => {
    quantity > 1 && setQuantity(quantity - 1);
  }
  const getTotal = () => {
    return (quantity * dish.price).toFixed(2);
  }

  return (
      <View style={styles.page}>
          <Ionicons
              onPress={() => navigation.goBack()}
              style={styles.iconContainer}
              name="arrow-back-circle"
              size={45}
              color="white"
          />
          <Text style={styles.title}>{dish.name}</Text>
          <Text style={styles.description}>{dish.description}</Text>
          <View style={styles.separator}></View>
          <View style={styles.buttonsContainer}>
              <AntDesign name="pluscircleo" size={60} onPress={onPlus} />
              <Text style={styles.quantity}>{quantity}</Text>
              <AntDesign name="minuscircleo" size={60} onPress={onMinus} />
          </View>
          <Pressable
              onPress={() => navigation.navigate("Basket")}
              style={styles.button}
          >
              <Text style={styles.buttonText}>
                  Add {quantity} to the basket &#8226; ${getTotal()}
              </Text>
          </Pressable>
      </View>
  );
}

const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        top: 10,
    },
    button: {
        marginTop: "auto",
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    buttonText: {
        color: "white",
        fontWeight: "600",
        fontSize: 18,
    },
    description: {
        color: "grey",
    },
    quantity: {
        fontSize: 25,
        marginHorizontal: 20,
    },
    iconContainer: {
        position: "absolute",
        top: 40,
        left: 10,
        zIndex: 1,
    },
    page: {
        flex: 1,
        width: Dimensions.get("window").width,
        paddingVertical: 20,
        padding: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: "600",
        marginVertical: Dimensions.get("window").height * 0.03,
    },
    separator: {
        height: 1,
        backgroundColor: "lightgray",
        marginVertical: 10,
    },
});

export default DishDetailScreen