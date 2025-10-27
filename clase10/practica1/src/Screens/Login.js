import React, {Component} from "react";
import { View, Text, Image, StyleSheet, FlatList, TextInput } from "react-native";
import { Pressable } from "react-native";
import { auth } from "../firebase/config";

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            loggedIn: false,
            error: "",
        }} 
    
    onSubmit (){
        if (this.state.email.includes("@")==false){
            this.setState({error: 'Email mal formateado'}) 
            
        }else if (this.state.password.length <6){
            this.setState({error: 'La contraseña debe tener al menos 6 caracteres'})

        }else{
        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((response) => {
            console.log(response);
            this.props.navigation.navigate('HomeMenu')
            this.setState({loggedIn: true});
        })
        .catch(error => {

            this.setState({error: 'Credenciales incorrectas'})
            console.log(error);

        })
    }

    }

    render (){
        return(
                <View style={styles.container}>
                    <Text style={styles.titulo}>Ingresar</Text>
                    <Text>Login</Text>

                    <TextInput style={styles.field} 
                        keyboardType='email-address'
                        placeholder='email'
                        onChangeText={ text => this.setState({email:text}) }
                        value={this.state.email} />

                    <TextInput style={styles.field} 
                        keyboardType='default'
                        placeholder='password'
                        secureTextEntry={true} 
                        onChangeText={ text => this.setState({password:text}) }
                        value={this.state.password}/> 

                    <Pressable onPress={() => this.onSubmit()} style={styles.logi}>
                        <Text>Login</Text> 
                    </Pressable> 

                    <Text style={styles.errorText}>{this.state.error}</Text>

                    <Pressable onPress={ ()=> this.props.navigation.navigate('Register')} style={styles.boton}>
                        <Text>Ir al registro</Text>
                    </Pressable>

                    <Pressable onPress={ () => this.props.navigation.navigate('HomeMenu')} style={styles.boton2}>
                        <Text>Entrar a la App</Text>
                    </Pressable>

                </View>
    )
}}

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
        margin: 10,
        width: 250,
        borderRadius: 5,
        alignItems: 'center',
    },
    boton2: {
        backgroundColor: "orange",
        padding: 10,
        margin: 10,
        width: 250,
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
    logi:{
        backgroundColor: "orange",
        padding: 10,
        marginTop: 20,
        width: 250,
        borderRadius: 5,
        alignItems: 'center',
    },
    errorText: {
        color: "red",
        marginTop: 10,
        textAlign: "center",
    }
})

export default Login;
