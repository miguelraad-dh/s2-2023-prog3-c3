import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.first} />
      <View style={styles.second} />
      <View style={styles.third} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    border: "4px solid red",
  },
  first: {
    flex: 1,
    backgroundColor: "red",
    width: 200,
    height: 200,
  },
  second: {
    backgroundColor: "green",
    width: 200,
    height: 200,
  },
  third: {
    backgroundColor: "blue",
    width: 200,
    height: 200,
  },
});
