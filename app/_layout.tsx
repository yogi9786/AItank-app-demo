import { StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "./navigation/drawernavigator"; 

const Stack = createStackNavigator();

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <Stack.Navigator screenOptions={{ headerShown: false }}> 
        <Stack.Screen name="Main" component={DrawerNavigator} />
      </Stack.Navigator>
    </>
  );
}
