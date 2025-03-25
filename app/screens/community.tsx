import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CommunityScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Community!</Text>
      <Text style={styles.description}>
        Connect, share ideas, and collaborate with like-minded innovators.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "black" },
  text: { color: "white", fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  description: { color: "gray", fontSize: 16, textAlign: "center", paddingHorizontal: 20 },
});
