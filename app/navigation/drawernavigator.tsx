import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SearchScreen from "../screens/search";
import AccountScreen from "../screens/account";
import AboutScreen from "../screens/About";
import CommunityScreen from "../screens/community";
import RegisterScreen from "../screens/signup"; 
import SignInScreen from "../screens/signin"; // ✅ Add SignIn import
import IndexScreen from "../index";

const Drawer = createDrawerNavigator();

import { DrawerContentComponentProps } from "@react-navigation/drawer";

function CustomDrawerContent({ state, navigation, descriptors }: DrawerContentComponentProps) {
  return (
    <View style={{ flex: 1, backgroundColor: "black", paddingTop: 40 }}>
      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Image
          source={require("../../assets/images/aitank.png")}
          style={{ width: 220, height: 80, borderRadius: 0, marginBottom: 0 }}
        />
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Menu</Text>
      </View>

      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const { options } = descriptors[route.key];

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            style={{
              padding: 15,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: isFocused ? "#222" : "black",
            }}
          >
            {options.drawerIcon && options.drawerIcon({ color: isFocused ? "white" : "gray", size: 22, focused: isFocused })}
            <Text style={{ color: isFocused ? "white" : "gray", marginLeft: 10, fontSize: 16 }}>
              {options.title || route.name}
            </Text>
          </TouchableOpacity>
        );
      })}

      {/* ✅ Add SignIn button in Drawer */}
      <TouchableOpacity
        onPress={() => navigation.navigate("SignIn")}
        style={{
          padding: 15,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "black",
        }}
      >
        <Ionicons name="log-in-outline" size={22} color="gray" />
        <Text style={{ color: "gray", marginLeft: 10, fontSize: 16 }}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

function CustomHeader({ navigation }: any) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "black", height: 60, paddingHorizontal: 15 }}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={28} color="white" />
      </TouchableOpacity>

      <View style={{ flex: 1, alignItems: "center" }}>
        <Image source={require("../../assets/images/aitank.png")} style={{ width: 100, height: 40, resizeMode: "contain" }} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Register")}> 
        <Ionicons name="person-add-outline" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
}

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: { backgroundColor: "black" }, 
        drawerLabelStyle: { color: "white", fontSize: 16 },
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: "gray",
        header: (props) => <CustomHeader {...props} />,
        headerShown: true,
      }}
    >

      <Drawer.Screen
        name="Home"
        component={IndexScreen}
        options={{ drawerIcon: ({ color }) => <Ionicons name="home-outline" size={22} color={color} /> }}
      />
      <Drawer.Screen
        name="Register"
        component={RegisterScreen} 
        options={{ 
          drawerIcon: ({ color }) => <Ionicons name="person-add-outline" size={22} color={color} />, 
          drawerItemStyle: { display: "none" } 
        }}
      />
      <Drawer.Screen
        name="SignIn" // ✅ Add SignIn screen
        component={SignInScreen}
        options={{
          drawerIcon: ({ color }) => <Ionicons name="log-in-outline" size={22} color={color} />,
          drawerItemStyle: { display: "none" } 
        }}
      />
      <Drawer.Screen
        name="Search"
        component={SearchScreen}
        options={{ drawerIcon: ({ color }) => <Ionicons name="search-outline" size={22} color={color} /> }}
      />
      <Drawer.Screen
        name="Account"
        component={AccountScreen}
        options={{ drawerIcon: ({ color }) => <Ionicons name="person-outline" size={22} color={color} /> }}
      />
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{ drawerIcon: ({ color }) => <Ionicons name="information-circle-outline" size={22} color={color} /> }}
      />
      <Drawer.Screen
        name="Community"
        component={CommunityScreen}
        options={{ drawerIcon: ({ color }) => <Ionicons name="people-outline" size={22} color={color} /> }}
      />
    </Drawer.Navigator>
  );
}
