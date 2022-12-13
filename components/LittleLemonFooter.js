import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LittleLemonFooter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        All rights reserved by Little Lemon, {new Date().getFullYear()}
      </Text>
    </View>
  );
};

export default LittleLemonFooter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EE9972",
    marginBottom: 5,
  },

  header: {
    padding: 10,
    fontSize: 15,
    color: "black",
    textAlign: "center",
    fontStyle: "italic",
    fontWeight: "700",
  },
});
