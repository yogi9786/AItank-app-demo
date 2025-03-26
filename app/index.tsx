import React from "react";
import { ScrollView, View, StatusBar } from "react-native";
import HeroSection from "./components/hero/HeroSection";
import TestimonialSection from "./components/testonomial/testonomial"; 
import Gridblock from "./components/grid/gridblock";
import Textslide from "./components/textslide/textslide";

export default function IndexScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <ScrollView>
        <HeroSection />
        <Gridblock />
        <Textslide />
        <TestimonialSection />
      </ScrollView>
    </View>
  );
}