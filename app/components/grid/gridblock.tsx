import React from "react";
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

const AI_CATEGORIES = [
  { id: "1", title: "AI Vision", image: require("../../../assets/images/aivision.jpg") },
  { id: "2", title: "AI Speech", image: require("../../../assets/images/aispeech.jpg") },
  { id: "3", title: "AI Robotics", image: require("../../../assets/images/airobotics.jpg") },
  { id: "4", title: "AI Automation", image: require("../../../assets/images/aiautomation.jpg") },
];

export default function AIImageGrid() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>AI Categories</Text>

      <View style={styles.grid}>
        {AI_CATEGORIES.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={item.image} style={styles.image} resizeMode="cover" />

            <Text style={styles.text}>{item.title}</Text>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Learn More</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    padding: 16,
    flex: 1,
    alignItems: "center",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: width * 0.45, 
    backgroundColor: "#222",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 16,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 10,
  },
  text: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
    marginTop: 8,
  },
  button: {
    backgroundColor: "#444",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginTop: 6,
  },
  buttonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});

