import React from "react";
import { View, Text, Image } from 'react-native';
import { StyleSheet } from 'react-native';

function ImagenCola() {
    return <Image style={styles.image} 
   source={require('../../assets/zonaMedia.jpeg')}
   resizeMode='contain'/>
  }
  
  const styles = StyleSheet.create({
     image: {
      height: 400,
      marginTop: 20
    },
  }) 

  export default ImagenCola;