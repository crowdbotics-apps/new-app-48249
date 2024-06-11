import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.keyboardView}>
        <View style={styles.logoContainer}>
          <Image source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} style={styles.logo} resizeMode="stretch" />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Email" value="email address" onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
          <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{"Login Now"}</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red"
  },
  keyboardView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logoContainer: {
    marginBottom: 60
  },
  logo: {},
  inputContainer: {
    width: "80%"
  },
  input: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
    fontSize: 16,
    borderColor: "#ddd",
    borderWidth: 1,
    position: "absolute",
    top: 0
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 18
  }
});
export default LoginScreen;