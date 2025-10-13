import React from "react";
import { View, Text, Image } from 'react-native';
import { StyleSheet } from 'react-native';

function ImageRemota() {
    return <Image style={styles.image} 
   source={{uri:'https://www.infobae.com/resizer/v2/CDTA65FYWMDLJV6AHKPIIPNOHU.jpg?auth=6c9f6791e78e189e11a8ff0474b608b95906885697189234ddcdee212e19f2bd&smart=true&width=992&height=661&quality=85'}}
   resizeMode='contain'/>
  }
  
  const styles = StyleSheet.create({
     image: {
      height: 400,
      width:"100%",
      marginTop:20
    },
  }) 

  export default ImageRemota;