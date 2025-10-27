import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { db } from "../firebase/config";

class Usuarios extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usuarios: [],  
            loading: true
        }
    }

    componentDidMount() {
        db.collection('users').onSnapshot((docs) => {
            let usuariosArray = [];
            docs.forEach(doc => {
                usuariosArray.push({
                    id: doc.id,
                    data: doc.data()
                });
            });

            this.setState({
                usuarios: usuariosArray,
                loading: false        
            }) 
               
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>Usuarios</Text>
                {console.log(this.state.usuarios)}

                {this.state.loading ? (
                    <ActivityIndicator size="large" color="#0df055ff" />
                ) : (
                    <FlatList
                        data={this.state.usuarios}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => ( <Text style={styles.email}>{item.data.email}</Text>)}
                    />
                )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        justifyContent: 'center', 
        alignItems: 'center',     
    },
    titulo: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20,
    },
    email: {
        fontSize: 18,
        marginVertical: 5
    }
});

export default Usuarios;

