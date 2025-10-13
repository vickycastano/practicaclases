import React,{Component} from "react";
import { Pressable, Text, View } from "react-native";
import { StyleSheet } from "react-native-web";

class Contador extends Component {
    constructor(props){
        super(props);
        this.state = {
            contador: 0
        }
    }

    incrementar(){
        this.setState({
            contador: this.state.contador + 1
        })
    }

    render(){
        return(
            <View style={styles.contenedor}>
                <Text style={styles.alinear}>Cantidad de clicks: {this.state.contador}</Text>
                <Pressable onPress={()=> this.incrementar()}>
                    <Text style={styles.clickk}>Click aqui para contar</Text>
                </Pressable>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    contenedor:{
        marginTop: 5,
        textAlign: "center",
    },
    alinear:{
        textAlign: "center",
    },
    clickk:{
        padding: 7,
        backgroundColor: "rgba(0, 255, 0, 0.5)",
        marginBottom: 10,
        borderRadius: 4,
        textAlign: "center",
        fontWeight: "bold",
    },
})



export default Contador;