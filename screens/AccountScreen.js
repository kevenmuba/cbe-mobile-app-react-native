import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AccountScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>Account</Text>
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

export default AccountScreen;
