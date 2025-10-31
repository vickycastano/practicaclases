import React, {Component} from 'react';
import { Text, View, Pressable, TextInput } from 'react-native';

class DynamicForm extends Component{
    constructor(props){
        super(props);
        this.state={
            comentario: '',
        }
    }

    onSubmit(){
        console.log('Comentario:', this.state.comentario)
    }

    render(){
        return (
            <View style={styles.container}> 
                <Text style={styles.title}> Comentar: </Text>
                <TextInput 
                    style={styles.input}
                    keyboardType='default'
                    placeholder='Comentario'
                    onChangeText={ text => this.setState({comentario:text}) }
                    value={this.state.comentario} 
                />
                <Pressable style={styles.button} onPress={() => this.onSubmit()}>
                    <Text style={styles.buttonText}> Submit </Text> 
                </Pressable> 
            </View>
          );
       }
    
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    input: {
        width: '40%',
        padding: 15,
        borderWidth: 1,
        borderColor: 'lightblue',
        borderRadius: 10,
        marginBottom: 15,
        backgroundColor: '#fff',
    },
    button: {
        padding: 10, 
        backgroundColor: 'lightblue',
        borderRadius: 10,
        width: '40%', 
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 20,
    }
}

export default DynamicForm;