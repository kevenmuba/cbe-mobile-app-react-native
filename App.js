// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./screens/navigator/DrawerScreen";

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
