import React, { Component } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  onSubmit() {
    console.log("Datos de login:");
    console.log("Email:", this.state.email);
    console.log("Password:", this.state.password);
  }

  render() {
    return (
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Ingresar</Text>

        <TextInput
          style={styles.field}
          placeholder="Email"
          keyboardType="email-address"
          value={this.state.email}
          onChangeText={(text) => this.setState({ email: text })}
        />
        <TextInput
          style={styles.field}
          placeholder="Password"
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={(text) => this.setState({ password: text })}
        />

        <Pressable style={styles.logi} onPress={() => this.onSubmit()}>
          <Text>Login</Text>
        </Pressable>

        <Pressable
          style={styles.boton}
          onPress={() => this.props.navigation.navigate("Register")}
        >
          <Text>Ir al registro</Text>
        </Pressable>
        <Pressable
          style={styles.boton2}
          onPress={() => this.props.navigation.navigate("HomeMenu")}
        >
          <Text>Entrar a la App</Text>
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
  logi: {
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
  boton2: {
    backgroundColor: "orange",
    padding: 10,
    marginTop: 10,
    width: 250,
    borderRadius: 5,
    alignItems: "center",
  },
});

export default Login;
