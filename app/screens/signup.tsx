import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import axios from "axios";
import { NavigationProp } from "@react-navigation/native";


interface RegisterScreenProps {
  navigation: NavigationProp<any>;
}

export default function RegisterScreen({ navigation }: RegisterScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://10.8.3.239:5000/api/register", { email, password });
      Alert.alert("Success", response.data.message);
      navigation.navigate("SignIn");
    } catch (error) {
      Alert.alert("Error", "Registration failed. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Register</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        onChangeText={setPassword}
      />


      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
  <Text style={styles.link}>Already have an account? Sign In</Text>
</TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    backgroundColor: "#222",
    color: "white",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#1E90FF",
    width: "100%",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
    marginTop: 12,
    color: "#1E90FF",
    fontSize: 14,
  },
});
