import React from "react";
import { View, Text, Pressable } from "react-native";
import { StyleSheet } from "react-native";

function Profile(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Perfil</Text>
      <Pressable
        style={styles.buttonOrange}
        onPress={() => props.navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>
          Salir de la app. Hacer click aquí te lleva al login.
        </Text>
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
    marginBottom: 20,
  },
  buttonOrange: {
    backgroundColor: "#ffa500",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 25,
    width: "80%",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
    color: "#000",
  },
});

export default Profile;
