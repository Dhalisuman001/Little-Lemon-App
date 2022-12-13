import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { TextInput } from "react-native-paper";

const Login = () => {
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text
        // numberOfLines={7}
        style={styles.regularText}
      >
        {showMenu ? "You Logged In!" : "Login to continue"}
      </Text>

      {!showMenu && (
        <>
          <TextInput
            placeholder="email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            style={styles.inputBox}
            // onFocus={() => alert("Please enter email")}
          />
          <TextInput
            placeholder="password"
            value={password}
            onChangeText={setPassword}
            style={styles.inputBox}
            secureTextEntry={true}
            maxLength={10}
            // onBlur={() => alert("Password is incorrect")}
            clearButtonMode={"always"}
          />
          <Pressable
            style={styles.button}
            onPress={() => {
              setShowMenu(!showMenu);
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 20 }}>Login</Text>
          </Pressable>
        </>
      )}
    </ScrollView>
  );
};

export default Login;

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    fontSize: 10,
    padding: 10,
    margin: 100,
    marginVertical: 8,
    backgroundColor: "#EE9972",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 12,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
  inputBox: {
    height: 28,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
    backgroundColor: "#EDEFEE",
  },
});
