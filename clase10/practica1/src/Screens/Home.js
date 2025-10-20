import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import DynamicForm from "../Components/DynamicForm";

function Home() {
    return (
        <View>
            <Text style={styles.titulo}>Home</Text>
            <DynamicForm />
        </View>
    );
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 20,
    },
});

export default Home;
