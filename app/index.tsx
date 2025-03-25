import React from "react";
import { ScrollView, View, StatusBar } from "react-native";
import HeroSection from "./components/hero/HeroSection";
import TestimonialSection from "./components/testonomial/testonomial"; // Fixed import

export default function IndexScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <ScrollView>
        <HeroSection />
        <TestimonialSection />
      </ScrollView>
    </View>
  );
}