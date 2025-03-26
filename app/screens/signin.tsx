import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import axios from "axios";
import { NavigationProp } from "@react-navigation/native";

interface SignInScreenProps {
  navigation: NavigationProp<any>;
}

export default function SignInScreen({ navigation }: SignInScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      const response = await axios.post("http://10.8.3.99:5000/api/login", { email, password });

      if (response.status === 200) {
        Alert.alert("Success", "Login successful");
      } else {
        Alert.alert("Error", response.data.error || "Invalid credentials");
      }
    } catch (error: any) {
      Alert.alert("Error", error.response?.data?.error || "Login failed");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign In</Text>

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

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.link}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 24, justifyContent: "center", alignItems: "center" },
  heading: { fontSize: 24, fontWeight: "bold", color: "white", marginBottom: 20 },
  input: { width: "100%", backgroundColor: "#222", color: "white", padding: 12, borderRadius: 8, marginBottom: 10, fontSize: 16 },
  button: { backgroundColor: "#1E90FF", width: "100%", padding: 12, borderRadius: 8, alignItems: "center" },
  buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },
  link: { marginTop: 18, color: "#1E90FF", fontSize: 16 },
});
