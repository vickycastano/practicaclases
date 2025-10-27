import React, {Component} from "react";
import { View, Text, Image, StyleSheet, FlatList, TextInput } from "react-native";
import { Pressable } from "react-native";
import { auth } from "../firebase/config"

class Register extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            email: "",
            userName: "",
            password: "",
            registered: false,
            error: "",
        }
    }

    onSubmit (){
       
        auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then( response => {
            this.setState({registered: true});
            console.log(response);
            console.log("Datos del usuario")
            console.log("email:", this.state.email)
            console.log("user name:", this.state.userName)
            console.log("password:", this.state.password)

            this.props.navigation.navigate('Login')

         })     
        .catch( error => {
            console.log(error);
            this.setState({error: 'Fallo en el registro.'})
        })
     }
    
    render (){
        return(
            <View style={styles.container}>
                <Text style={styles.titulo} >Register</Text>
                <Text>Register</Text>

                <TextInput style={styles.field} 
                    keyboardType='email-address'
                    placeholder='email'
                    onChangeText={ text => this.setState({email:text}) }
                    value={this.state.email} />

                <TextInput style={styles.field} 
                    keyboardType='default'
                    placeholder='userName'
                    onChangeText={ text => this.setState({userName:text}) }
                    value={this.state.userName} />

                <TextInput style={styles.field} 
                    keyboardType='default'
                    placeholder='password'
                    secureTextEntry={true} 
                    onChangeText={ text => this.setState({password:text}) }
                    value={this.state.password}/> 

                <Pressable onPress={() => this.onSubmit()} style={styles.regi}>
                    <Text> Register </Text> 
                </Pressable> 

                <Pressable onPress={ ()=> this.props.navigation.navigate('Login')} style={styles.boton}>
                    <Text>Ir al Login</Text>
                </Pressable>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    boton: {
        backgroundColor: "lightblue",
        padding: 10,
        width: 250,
        marginTop: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    field:{
        height: 40,
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: "orange",
        borderRadius: 5,
        marginTop: 10,
        width: 250,
        backgroundColor: "#fff",
    },
    regi:{
        backgroundColor: "orange",
        padding: 10,
        marginTop: 20,
        width: 250,
        borderRadius: 5,
        alignItems: 'center',
    },
})

export default Register;
