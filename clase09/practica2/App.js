import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ImagenCola from './src/Components/ImagenCola';
import ImageRemota from './src/Components/ImageRemota';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Probando imágenes</Text>
      <ImagenCola/>
      <ImageRemota/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});