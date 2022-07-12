import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Amplify } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react-native';
import awsconfig from './src/aws-exports'

Amplify.configure(awsconfig)


import RootNavigation from "./src/Navigation/Navigation";

function App() {
  return (
    
      

     <NavigationContainer>

   
       <RootNavigation />
       <StatusBar style="light" />
   
    </NavigationContainer>
    
  );
}

export default withAuthenticator(App);