import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Item = ({ item }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.innerContainer}>
        <Text style={styles.menuItem}> {item.name}</Text>
        <Text style={styles.menuItem}> {item.price}</Text>
      </View>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  menuItem: {
    color: "#F4CE14",
    fontSize: 21,
    paddingBottom: 35,
  },
});
