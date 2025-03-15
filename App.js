import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import {
  Ionicons,
  AntDesign,
  EvilIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import CreditScreen from "./screens/CreditScreen";
import AccountScreen from "./screens/AccountScreen";
import RecentScreen from "./screens/RecentScreen";
import SettingsScreen from "./screens/SettingsScreen";
import FAQScreen from "./screens/FAQScreen";
import AboutScreen from "./screens/AboutScreen";
import ChangePINScreen from "./screens/ChangePINScreen";
import RateAppScreen from "./screens/RateAppScreen";
import UnsubscribeScreen from "./screens/UnsubscribeScreen";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

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
      headerShown: false, // Hide the header for the Tab Navigator
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Credit" component={CreditScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
    <Tab.Screen name="Recent" component={RecentScreen} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#A805C2",
          },
          drawerLabelStyle: {
            color: "black",
          },
          headerStyle: {
            backgroundColor: "#FFFFFF", // White background for the header
          },
          headerTintColor: "#A805C2", // Color for the header title
          drawerActiveBackgroundColor: "rgba(255, 255, 255, 0.1)",
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 15,
              }}
            >
              <TouchableOpacity
                onPress={() => console.log("Logout clicked")}
                style={{ marginRight: 20 }}
              >
                <AntDesign name="lock" size={24} color="#A805C2" />
              </TouchableOpacity>
              <Text style={{ marginRight: 20, color: "#A805C2" }}>En</Text>
              <TouchableOpacity onPress={() => console.log("Refresh clicked")}>
                <EvilIcons name="refresh" size={30} color="#A805C2" />
              </TouchableOpacity>
            </View>
          ),
        }}
        drawerContent={(props) => (
          <View style={styles.drawerContainer}>
            <View style={styles.drawerHeader}>
              <View style={styles.headerContent}>
                <Image
                  source={require("./assets/images/cbe_logo.jpg")}
                  style={styles.logo}
                />
              </View>
              <View style={styles.headerTextContainer}>
                <Text style={styles.bankName}>Commercial Bank of Ethiopia</Text>
                <Text style={styles.slogan}>
                  The Bank You can always Rely on!
                </Text>
              </View>
            </View>
            {/* Drawer Items */}
            <View style={styles.drawerItemsContainer}>
              <DrawerItemList {...props} labelStyle={styles.drawerItemLabel} />
            </View>
          </View>
        )}
      >
        <Drawer.Screen
          name="MainTabs"
          component={TabNavigator}
          options={{
            title: "Home",
            headerTitle: "",
            drawerIcon: () => (
              // <Ionicons name="home" size={24} color="#A805C2" />
              <View style={{ paddingLeft: 10 }}>
                <Ionicons name="home" size={24} color="#A805C2" />
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="ChangePIN"
          component={ChangePINScreen}
          options={{
            headerTitle: "",
            drawerIcon: () => (
              <View style={{ paddingLeft: 10 }}>
                <Ionicons name="key" size={24} color="#A805C2" />
              </View>
            ),
          }}
        />

        <Drawer.Screen
          name="FAQ"
          component={FAQScreen}
          options={{
            headerTitle: "",
            drawerIcon: () => (
              <View style={{ paddingLeft: 10 }}>
                <MaterialIcons name="help-outline" size={24} color="#A805C2" />
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerTitle: "",
            drawerIcon: () => (
              <View style={{ paddingLeft: 10 }}>
                <Ionicons name="settings" size={24} color="#A805C2" />
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="About"
          component={AboutScreen}
          options={{
            headerTitle: "",
            drawerIcon: () => (
              <View style={{ paddingLeft: 10 }}>
                <Ionicons name="information-circle" size={24} color="#A805C2" />
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="RateApp"
          component={RateAppScreen}
          options={{
            headerTitle: "",
            drawerIcon: () => (
              <View style={{ paddingLeft: 10 }}>
                <Ionicons name="star" size={24} color="#A805C2" />
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="Unsubscribe"
          component={UnsubscribeScreen}
          options={{
            headerTitle: "",
            drawerIcon: () => (
              <View style={{ paddingLeft: 10 }}>
                <Ionicons name="close-circle" size={24} color="#A805C2" />
              </View>
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: "#A805C2",
  },
  drawerHeader: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.2)",
    flexDirection: "row",
  },
  headerContent: {
    flexDirection: "row", // Align image and text side by side
    justifyContent: "left",

    alignItems: "center",
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 10,
    marginTop: 10,
  },
  headerTextContainer: {
    marginLeft: 10,
    paddingTop: 10,
  },

  bankName: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },

  slogan: {
    color: "#FBBF24",
    fontSize: 12,
  },
  drawerItemsContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF", // White background for the drawer items
    paddingTop: 10, // Add some padding at the top
  },
  drawerItemLabel: {
    color: "#000000", // Black color for drawer item text
  },
});

export default App;
