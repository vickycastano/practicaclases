import { StyleSheet, View } from "react-native";
import ProductsAll from "./src/Screens/ProductsAll";

export default function App() {
  return (
    <View style={styles.container}>
      <ProductsAll />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
