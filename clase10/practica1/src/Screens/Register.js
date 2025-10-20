import React, { Component } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { StyleSheet } from "react-native";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      userName: "",
      password: "",
    };
  }

  onSubmit() {
    console.log("Datos del usuario:");
    console.log("Email:", this.state.email);
    console.log("User Name:", this.state.userName);
    console.log("Password:", this.state.password);
  }

  render() {
    return (
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Registro</Text>

        <TextInput
          style={styles.field}
          placeholder="Email"
          keyboardType="email-address"
          value={this.state.email}
          onChangeText={(text) => this.setState({ email: text })}
        />
        <TextInput
          style={styles.field}
          placeholder="User Name"
          value={this.state.userName}
          onChangeText={(text) => this.setState({ userName: text })}
        />
        <TextInput
          style={styles.field}
          placeholder="Password"
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={(text) => this.setState({ password: text })}
        />

        <Pressable style={styles.regi} onPress={() => this.onSubmit()}>
          <Text>Registrar</Text>
        </Pressable>

        <Pressable
          style={styles.boton}
          onPress={() => this.props.navigation.navigate("Login")}
        >
          <Text>Ir al Login</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contenedor: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
    alignItems: "center",
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
  },
  field: {
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderColor: "orange",
    borderRadius: 5,
    marginTop: 10,
    width: 250,
  },
  regi: {
    backgroundColor: "orange",
    padding: 10,
    marginTop: 20,
    width: 250,
    borderRadius: 5,
    alignItems: "center",
  },
  boton: {
    backgroundColor: "lightblue",
    padding: 10,
    marginTop: 20,
    width: 250,
    borderRadius: 5,
    alignItems: "center",
  },
});

export default Register;
