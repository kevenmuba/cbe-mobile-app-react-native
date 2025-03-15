// screens/navigator/StackScreen.js
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TransferScreen from "../native-stack/service/TransferScreen";
import TopUpScreen from "../native-stack/service/TopUpScreen";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator();

const StackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Transfer"
        component={TransferScreen}
        options={({ navigation }) => ({
          title: "Transfer",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()} // Navigate back to the previous screen
              style={{ marginLeft: 15 }}
            >
              <Ionicons name="arrow-back" size={24} color="#A805C2" />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "#FFFFFF", // White background for the header
          },
          headerTintColor: "#A805C2", // Color for the header title and back arrow
          headerTitleStyle: {
            fontWeight: "bold", // Bold title
          },
        })}
      />
      <Stack.Screen
        name="TopUp"
        component={TopUpScreen}
        options={({ navigation }) => ({
          title: "Top Up",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()} // Navigate back to the previous screen
              style={{ marginLeft: 15 }}
            >
              <Ionicons name="arrow-back" size={24} color="#A805C2" />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "#FFFFFF", // White background for the header
          },
          headerTintColor: "#A805C2", // Color for the header title and back arrow
          headerTitleStyle: {
            fontWeight: "bold", // Bold title
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default StackScreen;
