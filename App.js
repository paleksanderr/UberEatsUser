import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import RootNavigation from "./src/Navigation/Navigation";

export default function App() {
  return (
    
      

     <NavigationContainer>

   
       <RootNavigation />
       <StatusBar style="light" />
   
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",

    },
});
