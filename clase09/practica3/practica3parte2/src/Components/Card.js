import React from "react";
import { FlatList, View, Text, Image, StyleSheet } from "react-native";

function Card(props) {
  return (
    <FlatList
      data={props.products}
      keyExtractor={(item) => item.id.toString()}
      style={styles.flatlist}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image
            source={{ uri: item.image }}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.price}>Precio:{item.price}</Text>
          <Text style={styles.category}>Categoría: {item.category}</Text>
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
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
    color: "#333",
  },
  price: {
    fontSize: 16,
    color: "green",
    marginBottom: 5,
  },
  category: {
    fontSize: 14,
    color: "#555",
  },
});

export default Card;
