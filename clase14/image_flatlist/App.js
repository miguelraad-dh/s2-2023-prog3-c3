import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import Lista from "./src/components/Lista";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("./assets/favicon.png")}
        resizeMode="contain"
      />
      <Image
        style={styles.image}
        source={{
          uri: "https://imgs.search.brave.com/Q37vlE6gfGSEK--0S8pBAXPXKaadWUmJwt5GrGaW4GQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTQx/MzY0NDA2L3Bob3Rv/L3RoZS1wb2tlbW9u/LXdvcmxkLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1jd2tJ/a0NUMnotT3NrYU1V/cTVHaGpaUjI2dzRX/a0NuRTFqZzZCd291/ZHpjPQ",
        }}
        resizeMode="contain"
      />
      <Lista />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 200,
    width: "100%",
  },
});
