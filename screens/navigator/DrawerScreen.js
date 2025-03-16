// screens/navigator/DrawerScreen.js
import React, { useState } from "react";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import {
  Ionicons,
  AntDesign,
  EvilIcons,
  MaterialIcons,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  Entypo,
} from "@expo/vector-icons";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook
import TabNavigator from "./TabScreen";
import ChangePINScreen from "../drawer/ChangePINScreen";
import FAQScreen from "../drawer/FAQScreen";
import SettingsScreen from "../drawer/SettingsScreen";
import AboutScreen from "../drawer/AboutScreen";
import RateAppScreen from "../drawer/RateAppScreen";
import UnsubscribeScreen from "../drawer/UnsubscribeScreen";
import TransferScreen from "../native-stack/service/TransferScreen";
import TopUpScreen from "../native-stack/service/TopUpScreen";
import UtilitiesScreen from "../native-stack/service/UtilitiesScreen";
import UtilityScreen from "../native-stack/service/UtilityScreen";
import HelpScreen from "../native-stack/service/HelpScreen";
import BankingScreen from "../native-stack/service/BankingScreen";
import EventsScreen from "../native-stack/service/EventsScreen";
import GovernmentServicesScreen from "../native-stack/service/GovernmentServicesScreen";
import TravelScreen from "../native-stack/service/TravelScreen";
import PayForScreen from "../native-stack/service/PayForScreen";
import EntertainmentScreen from "../native-stack/service/EntertainmentScreen";
import { getHeaderLeft } from "../../utils/headerLeft";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const navigation = useNavigation(); // Use the useNavigation hook
  const [refreshKey, setRefreshKey] = useState(0); // State to force re-render

  const handleRefresh = () => {
    // Increment the refreshKey to force the screen to re-render
    setRefreshKey((prevKey) => prevKey + 1);
  };

  return (
    <Drawer.Navigator
      key={refreshKey}
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
        headerTintColor: "#A805C2", // Color for the header title and back arrow
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
            <TouchableOpacity onPress={handleRefresh}>
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
                source={require("../../assets/images/cbe_logo.jpg")}
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
            <View style={{ paddingLeft: 10 }}>
              <Ionicons name="home" size={24} color="#A805C2" />
            </View>
          ),
          drawerItemStyle: { display: "none" },
        }}
      />
      <Drawer.Screen
        name="ChangePIN"
        component={ChangePINScreen}
        options={({ navigation }) => ({
          headerTitle: "",
          drawerIcon: () => (
            <View style={{ paddingLeft: 10 }}>
              <Ionicons name="key" size={24} color="#A805C2" />
            </View>
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()} // Navigate back to the previous screen
              style={{ marginLeft: 15 }}
            >
              <Ionicons name="arrow-back" size={24} color="#A805C2" />
            </TouchableOpacity>
          ),
        })}
      />
      <Drawer.Screen
        name="FAQ"
        component={FAQScreen}
        options={({ navigation }) => ({
          headerTitle: "",
          drawerIcon: () => (
            <View style={{ paddingLeft: 10 }}>
              <MaterialIcons name="help-outline" size={24} color="#A805C2" />
            </View>
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()} // Navigate back to the previous screen
              style={{ marginLeft: 15 }}
            >
              <Ionicons name="arrow-back" size={24} color="#A805C2" />
            </TouchableOpacity>
          ),
        })}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={({ navigation }) => ({
          headerTitle: "",
          drawerIcon: () => (
            <View style={{ paddingLeft: 10 }}>
              <Ionicons name="settings" size={24} color="#A805C2" />
            </View>
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()} // Navigate back to the previous screen
              style={{ marginLeft: 15 }}
            >
              <Ionicons name="arrow-back" size={24} color="#A805C2" />
            </TouchableOpacity>
          ),
        })}
      />
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={({ navigation }) => ({
          headerTitle: "",
          drawerIcon: () => (
            <View style={{ paddingLeft: 10 }}>
              <Ionicons name="information-circle" size={24} color="#A805C2" />
            </View>
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()} // Navigate back to the previous screen
              style={{ marginLeft: 15 }}
            >
              <Ionicons name="arrow-back" size={24} color="#A805C2" />
            </TouchableOpacity>
          ),
        })}
      />
      <Drawer.Screen
        name="RateApp"
        component={RateAppScreen}
        options={({ navigation }) => ({
          headerTitle: "",
          drawerIcon: () => (
            <View style={{ paddingLeft: 10 }}>
              <Ionicons name="star" size={24} color="#A805C2" />
            </View>
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()} // Navigate back to the previous screen
              style={{ marginLeft: 15 }}
            >
              <Ionicons name="arrow-back" size={24} color="#A805C2" />
            </TouchableOpacity>
          ),
        })}
      />
      <Drawer.Screen
        name="Unsubscribe"
        component={UnsubscribeScreen}
        options={({ navigation }) => ({
          headerTitle: "",
          drawerIcon: () => (
            <View style={{ paddingLeft: 10 }}>
              <Ionicons name="close-circle" size={24} color="#A805C2" />
            </View>
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()} // Navigate back to the previous screen
              style={{ marginLeft: 15 }}
            >
              <Ionicons name="arrow-back" size={24} color="#A805C2" />
            </TouchableOpacity>
          ),
        })}
      />
      <Drawer.Screen
        name="Transfer"
        component={TransferScreen}
        options={({ navigation }) => ({
          headerTitle: "",
          drawerIcon: () => (
            <View style={{ paddingLeft: 10 }}>
              <Ionicons name="swap-horizontal" size={24} color="#A805C2" />
            </View>
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()} // Navigate back to the previous screen
              style={{ marginLeft: 15 }}
            >
              <Ionicons name="arrow-back" size={24} color="#A805C2" />
            </TouchableOpacity>
          ),
          drawerItemStyle: { display: "none" },
        })}
      />
      <Drawer.Screen
        name="TopUp"
        component={TopUpScreen}
        options={({ navigation }) => ({
          headerTitle: "",
          drawerIcon: () => (
            <View style={{ paddingLeft: 10 }}>
              <Ionicons name="phone-portrait" size={24} color="#A805C2" />
            </View>
          ),
          headerLeft: () => getHeaderLeft(navigation), // Use the reusable function
          drawerItemStyle: { display: "none" },
        })}
      />
      <Drawer.Screen
        name="Utilities"
        component={UtilitiesScreen}
        options={({ navigation }) => ({
          headerTitle: "",
          drawerIcon: () => (
            <View style={{ paddingLeft: 10 }}>
              <Ionicons name="home-outline" size={24} color="#A805C2" />
            </View>
          ),
          headerLeft: () => getHeaderLeft(navigation), // Use the reusable function
          drawerItemStyle: { display: "none" },
        })}
      />
      <Drawer.Screen
        name="Utility"
        component={UtilityScreen}
        options={({ navigation }) => ({
          headerTitle: "",
          drawerIcon: () => (
            <View style={{ paddingLeft: 10 }}>
              <Ionicons name="build-outline" size={24} color="#A805C2" />
            </View>
          ),
          headerLeft: () => getHeaderLeft(navigation), // Use the reusable function
          drawerItemStyle: { display: "none" },
        })}
      />
      <Drawer.Screen
        name="Help"
        component={HelpScreen}
        options={({ navigation }) => ({
          headerTitle: "",
          drawerIcon: () => (
            <View style={{ paddingLeft: 10 }}>
              <FontAwesome5 name="hands-helping" size={24} color="#A805C2" />
            </View>
          ),
          headerLeft: () => getHeaderLeft(navigation), // Use the reusable function
          drawerItemStyle: { display: "none" },
        })}
      />
      <Drawer.Screen
        name="Banking"
        component={BankingScreen}
        options={({ navigation }) => ({
          headerTitle: "",
          drawerIcon: () => (
            <View style={{ paddingLeft: 10 }}>
              <FontAwesome name="bank" size={24} color="#A805C2" />
            </View>
          ),
          headerLeft: () => getHeaderLeft(navigation), // Use the reusable function
          drawerItemStyle: { display: "none" },
        })}
      />
      <Drawer.Screen
        name="Events"
        component={EventsScreen}
        options={({ navigation }) => ({
          headerTitle: "",
          drawerIcon: () => (
            <View style={{ paddingLeft: 10 }}>
              <Ionicons name="calendar-outline" size={24} color="#A805C2" />
            </View>
          ),
          headerLeft: () => getHeaderLeft(navigation), // Use the reusable function
          drawerItemStyle: { display: "none" },
        })}
      />
      <Drawer.Screen
        name="GovernmentServices"
        component={GovernmentServicesScreen}
        options={({ navigation }) => ({
          headerTitle: "",
          drawerIcon: () => (
            <View style={{ paddingLeft: 10 }}>
              <MaterialIcons
                name="real-estate-agent"
                size={24}
                color="#A805C2"
              />
            </View>
          ),
          headerLeft: () => getHeaderLeft(navigation), // Use the reusable function
          drawerItemStyle: { display: "none" },
        })}
      />
      <Drawer.Screen
        name="Travel"
        component={TravelScreen}
        options={({ navigation }) => ({
          headerTitle: "",
          drawerIcon: () => (
            <View style={{ paddingLeft: 10 }}>
              <Ionicons name="airplane-sharp" size={24} color="#A805C2" />
            </View>
          ),
          headerLeft: () => getHeaderLeft(navigation), // Use the reusable function
          drawerItemStyle: { display: "none" },
        })}
      />
      <Drawer.Screen
        name="PayFor"
        component={PayForScreen}
        options={({ navigation }) => ({
          headerTitle: "",
          drawerIcon: () => (
            <View style={{ paddingLeft: 10 }}>
              <FontAwesome6
                name="hand-holding-dollar"
                size={24}
                color="#A805C2"
              />
            </View>
          ),
          headerLeft: () => getHeaderLeft(navigation), // Use the reusable function
          drawerItemStyle: { display: "none" },
        })}
      />
      <Drawer.Screen
        name="Entertainment"
        component={EntertainmentScreen}
        options={({ navigation }) => ({
          headerTitle: "",
          drawerIcon: () => (
            <View style={{ paddingLeft: 10 }}>
              <Entypo name="video" size={24} color="#A805C2" />
            </View>
          ),
          headerLeft: () => getHeaderLeft(navigation), // Use the reusable function
          drawerItemStyle: { display: "none" },
        })}
      />
    </Drawer.Navigator>
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
    flexDirection: "row",
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
    backgroundColor: "#FFFFFF",
    paddingTop: 10,
  },
  drawerItemLabel: {
    color: "#000000",
  },
});

export default DrawerNavigator;
