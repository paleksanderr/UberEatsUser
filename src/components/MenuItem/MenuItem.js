import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'



const MenuItem = ( {dishi} ) => {
  return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.name}>{dishi.name}</Text>
          <Text
          numberOfLines={3} 
          style={styles.description}>{dishi.description}</Text>
          <Text style={styles.price}>${dishi.price}</Text>
        </View>
       { dishi.image && (<Image source={{uri: dishi.image}} style={styles.image} />)}
      </View>
  );
}

const styles = StyleSheet.create({
  container:{
  
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    flexDirection: 'row',

  },
  contentContainer:{
    flex: 1,
  },
  description: {
    color: 'grey',
    marginVertical: 5,
  },
  image:{
    height: 100,
    aspectRatio: 1,
  },
  name:{
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
  },
})

export default MenuItem