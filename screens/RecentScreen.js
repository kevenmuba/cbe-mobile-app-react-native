import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RecentScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>Recent</Text>
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

export default RecentScreen;
