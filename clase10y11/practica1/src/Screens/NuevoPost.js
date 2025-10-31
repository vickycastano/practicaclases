import React, { Component } from "react";
import {View,Text,StyleSheet,TextInput,Pressable,ActivityIndicator,} from "react-native";
import { db, auth } from "../firebase/config";

class NuevoPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      loading: false,
      error: "",
    };
  }

  onSubmit() {
    this.setState({
      loading: true,
      error: "",
    });

    db.collection("posts").add({
        owner: auth.currentUser.email,
        description: this.state.description,
        createdAt: Date.now(),
      })
      .then(() => {
        this.setState({
          description: "",
          loading: false,
        });
        this.props.navigation.navigate("Home");
      })
      .catch(() => {
        this.setState({
          error: "Error al crear el post",
          loading: false,
        });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Nuevo Post</Text>

        <TextInput
          style={styles.textInput}
          placeholder="Agrega un nuevo post"
          value={this.state.description}
          onChangeText={(text) => this.setState({ description: text })}
        />

        <Text style={styles.error}>{this.state.error}</Text>

        {this.state.loading ? (
          <ActivityIndicator size="large" color="#0df055ff" />
        ) : (
          <Pressable style={styles.boton} onPress={() => this.onSubmit()}>
            <Text style={styles.textoBoton}>Publicar</Text>
          </Pressable>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    height: 100,
    textAlignVertical: "top",
  },
  boton: {
    backgroundColor: "#0df055ff",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  textoBoton: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  error: {
    color: "red",
    marginBottom: 10,
    fontSize: 14,
  },
});

export default NuevoPost;
