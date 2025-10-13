import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductsAll from './src/Screens/ProductsAll';

export default function App() {
  return (
    <View style={styles.container}>
      <ProductsAll/>
    </View>
  );
}


