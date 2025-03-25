import React, { useRef } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  Animated,
  StyleSheet,
} from "react-native";

const { width } = Dimensions.get("window");

const testimonials = [
  {
    id: "1",
    name: "John Doe",
    text: "This AI service transformed our business! Highly recommended.",
    image: require("../../../assets/images/earth.jpg"), 
  },
  {
    id: "2",
    name: "Sarah Smith",
    text: "An amazing AI solution that exceeded our expectations!",
    image: require("../../../assets/images/earth.jpg"),
  },
  {
    id: "3",
    name: "Michael Lee",
    text: "Impressive AI capabilities, great support from the team.",
    image: require("../../../assets/images/earth.jpg"),
  },
];

const TestimonialSection = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>What Our Clients Say</Text>

      <Animated.FlatList
        data={testimonials}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item }) => (
          <View style={styles.card}>
           
            <Image source={item.image} style={styles.image} />

            
            <Text style={styles.text}>{item.text}</Text>

          
            <Text style={styles.name}>- {item.name}</Text>
          </View>
        )}
      />

      <View style={styles.paginationContainer}>
        {testimonials.map((_, i) => {
          const dotOpacity = scrollX.interpolate({
            inputRange: [
              (i - 1) * width * 0.8,
              i * width * 0.8,
              (i + 1) * width * 0.8,
            ],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });

          return <Animated.View key={i} style={[styles.dot, { opacity: dotOpacity }]} />;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: "#000",
    alignItems: "center",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 10,
  },
  card: {
    width: width * 0.8,
    backgroundColor: "#333",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: width * 0.1, 
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    marginBottom: 10,
  },
  name: {
    fontSize: 14,
    color: "#bbb",
  },
  paginationContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: "white",
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default TestimonialSection;
