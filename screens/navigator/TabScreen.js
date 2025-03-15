// screens/navigator/TabScreen.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../HomeScreen";
import CreditScreen from "../CreditScreen";
import AccountScreen from "../AccountScreen";
import RecentScreen from "../RecentScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
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
        backgroundColor: "#A805C2",
      },
      headerShown: false,
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Credit" component={CreditScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
    <Tab.Screen name="Recent" component={RecentScreen} />
  </Tab.Navigator>
);

export default TabNavigator;
