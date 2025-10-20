import React, {Component} from "react";
import { View, Text, Image, StyleSheet, FlatList, TextInput } from "react-native";
import { Pressable } from "react-native";

class Register extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            comentario: "",
        }
    }

    onSubmit (){
        console.log("comentarios")
        console.log("comentario:", this.state.comentario)
    }


    render (){
        return(
                    <View  >
                        <Text>insertar comentario:</Text>
                        <Text>comentario</Text>
                        <TextInput  
                            keyboardType='default'
                            placeholder='comentario'
                            onChangeText={ text => this.setState({comentario:text}) }
                            value={this.state.comentario} />
                        <Pressable onPress={() => this.onSubmit()}>
                            <Text> Register </Text> 
                        </Pressable> 



                        <Pressable onPress={ ()=> this.props.navigation.navigate('Login')} >
                            <Text>Ir al Login</Text>
                        </Pressable>
                    </View>
        )
}
}


   

export default Register;