import { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

const data = [
  { title: "Learners", description: "AI enthusiasts, students, and newcomers exploring AI" },
  { title: "Developers", description: "Developers, engineers, and makers working on AI projects" },
  { title: "Researchers", description: "AI scientists, PhD students, and experts pushing AI forward" },
  { title: "Entrepreneurs", description: "Startup founders and product managers building AI-powered businesses" },
];

const HoverEffectSection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedIndex(index === selectedIndex ? null : index)}
            style={styles.button}
          >
            <Text style={styles.title}>{`0${index + 1}`} {item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    width: "100%",
    paddingVertical: 16,
  },
  innerContainer: {
    width: "100%",
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: "#000",
    padding: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  description: {
    fontSize: 14,
    color: "white",
    marginTop: 4,
  },
});

export default HoverEffectSection;
