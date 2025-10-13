import React from "react";
import { Pressable, Text } from "react-native";
import { StyleSheet } from "react-native-web";

class PressableBoton extends React.Component {

    clickeame(){
        console.log("me clickearon")
    }

    render(){
        return(
            <Pressable onPress={()=> this.clickeame()}>
                <Text style={styles.boton}>Clickeame</Text>
            </Pressable>
        )
    }
}
const styles = StyleSheet.create({
    boton:{
        padding: 4,
        backgroundColor: "#CCC",
        marginBottom: 10,
        borderRadius: 4,
        textAlign: "center",
        fontWeight: "bold",
    },
})



export default PressableBoton;