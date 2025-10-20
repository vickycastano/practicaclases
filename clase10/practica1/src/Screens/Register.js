import React from "react";
import { View, Text, Pressable } from "react-native";
import { StyleSheet } from "react-native";

function Register(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <Text style={styles.text}>
        Esta es la pantalla donde debe ir el formulario de registro.
      </Text>
      <Text style={styles.text}>Navegación cruzada a Login:</Text>
      <Pressable
        style={styles.button}
        onPress={() => props.navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Ya tengo cuenta</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#4db8ff",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 25,
    marginTop: 15,
    width: "80%",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
    color: "#000",
  },
});

export default Register;

