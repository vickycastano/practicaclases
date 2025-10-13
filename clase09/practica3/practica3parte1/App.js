import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductList from './src/Screens/ProductList';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text} > FlatList </Text>
      <ProductList/>
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