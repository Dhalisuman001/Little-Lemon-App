import { View, Text, StyleSheet } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Little Lemon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.16,
    backgroundColor: "#EE9972",
  },

  header: {
    paddingTop: 28,
    fontSize: 30,
    color: "black",
    textAlign: "center",
  },
});
