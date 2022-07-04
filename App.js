import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import RestaurantItem  from "./src/components/RestaurantItem/RestaurantItem";

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
  }
});
