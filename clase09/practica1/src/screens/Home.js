import React from "react";
import {Text, View} from "react-native"
import PressableBoton from "../components/PressableBoton";
import Contador from "../components/Contador";
import { StyleSheet } from "react-native-web";

function Home () { 
        return (
            <View >
                <Text style={styles.contenedor}>Hola Mundo</Text>
                <PressableBoton />

                <Contador />
            </View>          
        )
}

const styles = StyleSheet.create({
    contenedor: {
        padding: 10,
        textAlign: "center",
    },
})
export default Home;