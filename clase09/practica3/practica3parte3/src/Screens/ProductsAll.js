import React, { Component } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import Card from "../Components/Card";

class ProductsAll extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      loading: true,
    };
  }

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ characters: data.results, loading: false });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.loading ? (
          <ActivityIndicator size="large" color="green" />
        ) : (
          <Card characters={this.state.characters} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});

export default ProductsAll;
