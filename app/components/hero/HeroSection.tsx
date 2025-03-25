import React, { useEffect, useRef, useState } from "react";
import { View, TouchableOpacity, Animated, Dimensions, Text, ImageBackground } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { Ionicons } from "@expo/vector-icons";
import * as Linking from "expo-linking";

const { width, height } = Dimensions.get("window");

const HeroSection: React.FC = () => {
  const videoRef = useRef<Video>(null);
  const [isHovered, setIsHovered] = useState(false);
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const glowAnim = useRef(new Animated.Value(5)).current; // Controls glow effect

  useEffect(() => {
    videoRef.current?.playAsync().catch(console.error);

    // Glow effect animation (pulsing)
    Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnim, {
          toValue: 20, // Maximum glow
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(glowAnim, {
          toValue: 5, // Minimum glow
          duration: 1000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);

  const openYouTubeVideo = () => {
    Linking.openURL("https://youtu.be/9FmPM0x0k8Q");
  };

  return (
    <ImageBackground
      source={require("../../../assets/images/earth.jpg")} // Background image
      style={{ width: "100%", height: height * 0.6 }}
      resizeMode="cover"
    >
      <View style={{ position: "relative", width: "100%", height: "100%" }}>
        {/* Video Background */}
        <Video
          ref={videoRef}
          source={require("../../../assets/videos/bg.gif")} // Ensure it's a supported format
          style={{ position: "absolute", width: "100%", height: "100%" }}
          resizeMode={ResizeMode.COVER}
          shouldPlay
          isLooping
          isMuted
        />

        {/* Dark Overlay */}
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)", // Overlay for better readability
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Animated Title with Glow */}
          <TouchableOpacity
            onPress={openYouTubeVideo}
            onPressIn={() => {
              setIsHovered(true);
              Animated.spring(scaleAnim, { toValue: 1.05, useNativeDriver: true }).start();
            }}
            onPressOut={() => {
              setIsHovered(false);
              Animated.spring(scaleAnim, { toValue: 1, useNativeDriver: true }).start();
            }}
          >
            <Animated.Text
              style={{
                fontSize: 36,
                color: "#FFF",
                textAlign: "center",
                fontWeight: "bold",
                textShadowColor: "rgba(0, 255, 255, 0.9)", 
                textShadowOffset: { width: 0, height: 0 }, 
                textShadowRadius: glowAnim, 
                transform: [{ scale: scaleAnim }],
              }}
            >
              STEP INTO THE {"\n"} FUTURE OF AI
            </Animated.Text>
          </TouchableOpacity>

          {/* Play Button */}
          {isHovered && (
            <View style={{ position: "absolute", bottom: 40 }}>
              <TouchableOpacity onPress={openYouTubeVideo} style={{ alignItems: "center" }}>
                <Ionicons name="play-circle" size={60} color="white" />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

export default HeroSection;
