import React from "react";
import { View, Text, Pressable } from "react-native";
import { StyleSheet } from "react-native";

function Login(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingresar</Text>
      <Text style={styles.text}>
        Esta es la pantalla donde debe ir el formulario de login.
      </Text>
      <Text style={styles.text}>Navegación cruzada a Register:</Text>

      <Pressable
        style={styles.buttonBlue}
        onPress={() => props.navigation.navigate("Register")}
      >
        <Text style={styles.buttonText}>No tengo cuenta</Text>
      </Pressable>

      <Text style={styles.text}>
        Navegación cruzada a ingresar a la app. Este paso se hará automáticamente
        cuando veamos la funcionalidad de login.
      </Text>

      <Pressable
        style={styles.buttonOrange}
        onPress={() => props.navigation.navigate("HomeMenu")}
      >
        <Text style={styles.buttonText}>Entrar en la app.</Text>
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
  buttonBlue: {
    backgroundColor: "#4db8ff",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 25,
    marginTop: 10,
    width: "80%",
  },
  buttonOrange: {
    backgroundColor: "#ffa500",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 25,
    marginTop: 10,
    width: "80%",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
    color: "#000",
  },
});

export default Login;
