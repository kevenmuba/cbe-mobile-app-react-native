// utils/headerLeft.js
import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const getHeaderLeft = (navigation) => (
  <TouchableOpacity
    onPress={() => navigation.goBack()} // Navigate back to the previous screen
    style={{ marginLeft: 15 }}
  >
    <Ionicons name="arrow-back" size={24} color="#A805C2" />
  </TouchableOpacity>
);
