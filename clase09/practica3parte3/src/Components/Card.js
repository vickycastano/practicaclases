import React from "react";
import { FlatList, View, Text, Image, StyleSheet } from "react-native";

function Card(props) {
  return (
    <FlatList
      data={props.characters}
      keyExtractor={(item) => item.id.toString()}
      style={styles.flatlist}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image
            source={{ uri: item.image }}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.species}>Especie: {item.species}</Text>
          <Text style={styles.gender}>Género: {item.gender}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  flatlist: {
    flex: 1,
  },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  species: {
    fontSize: 14,
    color: "#333",
    marginBottom: 3,
  },
  gender: {
    fontSize: 14,
    color: "#555",
  },
});

export default Card;
