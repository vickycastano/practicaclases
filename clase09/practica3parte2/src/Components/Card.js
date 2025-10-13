import React from "react";
import { FlatList, View, Text } from "react-native";

function Card (props){
    return(
        <FlatList data={props.products}
        keyExtractor={item => item.id.toString()}
        renderItem= {({item}) => 
            <View>
                <Text> {item.title} </Text>
                <Text> {item.description} </Text>
                <Text> {item.price} </Text>
                <Text> {item.category} </Text>
            </View> 
            }
        
        />
    )
}
export default Card;