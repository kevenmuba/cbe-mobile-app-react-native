// screens/native-stack/service/TransferScreen.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const TransferScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Transfer Screen</Text>
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
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#A805C2",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default TransferScreen;
