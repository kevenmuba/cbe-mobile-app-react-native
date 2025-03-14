import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CreditScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>Credit</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CreditScreen;
