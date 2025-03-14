import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, AntDesign, EvilIcons } from "@expo/vector-icons"; // Import the required icons
import { View, Text, TouchableOpacity } from "react-native"; // Import TouchableOpacity for clickable icons
import HomeScreen from "./screens/HomeScreen";
import CreditScreen from "./screens/CreditScreen";
import AccountScreen from "./screens/AccountScreen";
import RecentScreen from "./screens/RecentScreen";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Credit") {
              iconName = focused ? "cash" : "cash-outline";
            } else if (route.name === "Account") {
              iconName = focused ? "person" : "person-outline";
            } else if (route.name === "Recent") {
              iconName = focused ? "time" : "time-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#FFFFFF",
          tabBarInactiveTintColor: "#D3D3D3",
          tabBarStyle: {
            backgroundColor: "#A805C2", // Set the background color of the bottom tab bar
          },

          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 15,
              }}
            >
              {/* Settings Icon */}
              <TouchableOpacity
                onPress={() =>
                  console.log("the use is logged out from the system")
                }
                style={{ marginRight: 20 }}
              >
                <AntDesign name="lock" size={24} color="#A805C2" />
              </TouchableOpacity>
              {/* "En" Text */}
              <Text style={{ marginRight: 20, color: "#A805C2" }}>En</Text>

              {/* Refresh Icon */}
              <TouchableOpacity onPress={() => console.log("Refresh clicked")}>
                <EvilIcons name="refresh" size={30} color="#A805C2" />
              </TouchableOpacity>
            </View>
          ),
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Credit" component={CreditScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
        <Tab.Screen name="Recent" component={RecentScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
