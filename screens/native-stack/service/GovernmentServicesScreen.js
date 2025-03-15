// screens/native-stack/service/GovernmentServicesScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GovernmentServicesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Government Services Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#A805C2",
  },
});

export default GovernmentServicesScreen;
