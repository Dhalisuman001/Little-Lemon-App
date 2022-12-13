import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

const InputText = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [Mobile, setMobile] = React.useState("");
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headingSection}>
        How was your visit to Little Lemon?
      </Text>

      <Text style={styles.infoSection}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would
        loveto hear your experience with us!
      </Text>
      <TextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
        style={styles.input}
      />
      <TextInput
        value={lastName}
        placeholder="Last Name"
        onChangeText={setLastName}
        style={styles.input}
      />
      <TextInput
        value={Mobile}
        placeholder="Mobile No."
        onChangeText={setMobile}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Message"
        value={message}
        onChangeText={setMessage}
        style={styles.messageInput}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
    backgroundColor: "#F4CE14",
  },
  messageInput: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#F4CE14",
  },
  infoSection: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
    backgroundColor: "#495E57",
  },
  headingSection: {
    fontSize: 28,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
    backgroundColor: "#495E57",
  },
});

export default InputText;
