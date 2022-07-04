import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

const RestaurantItem = ({ title, image, subTitle }) => {
  return (
    <View style={styles.restaurantContainer}>
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg",
        }}
        style={styles.image}
      />
      <Text style={styles.title}>El Cabo Coffe Bar Tres De Mayo</Text>
      <Text style={styles.subTitle}>$1.99 20-40min</Text>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      {/* restaurant item */}
      <RestaurantItem />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 5/3,
    marginBottom: 5,
  },
  
  restaurantContainer: {
    width: "100%",
    marginVertical: 10,
    
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    marginVertical: 5,
},

subTitle: {
    color: 'grey',
},
});
