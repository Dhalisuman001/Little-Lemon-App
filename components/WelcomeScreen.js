import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { TextInput } from "react-native-paper";

const WelcomeScreen = () => {
  // const [name, setName] = React.useState("");
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image style={styles.img} source={require("../img/logo.png")} />
        <Text style={styles.headerText}>Little Lemon</Text>
      </View>
      <Text
        // numberOfLines={7}
        style={styles.regularText}
      >
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>

      {/* <TextInput
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
        style={styles.inputBox}
      /> */}
    </ScrollView>
  );
};

export default WelcomeScreen;

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    height: 100,
    width: 130,
    resizeMode: "contain",
    borderRadius: 20,
  },
  imgWrapper: {
    flexDirection: "row",
    margin: 20,
    justifyContent: "center",
  },
  headerText: {
    padding: 40,
    paddingHorizontal: 20,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 20,
    padding: 15,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
    backgroundColor: "#EDEFEE",
  },
});
