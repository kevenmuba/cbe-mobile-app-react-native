import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <View>
            <Image
              source={require("./assets/images/cbe_logo2.jpg")} // Replace with your logo path
              style={styles.logo}
            />
          </View>
          <View>
            <Text style={styles.headerText}>Commercial Bank of Ethiopia</Text>
            <Text style={styles.slogan}>The Bank You can always Rely on!</Text>
          </View>
        </View>
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceLabel}>Balance</Text>
          <View style={styles.balanceRow}>
            <Text style={styles.balanceValue}>***** Br.</Text>
            <TouchableOpacity style={styles.eyeIcon}>
              <Ionicons name="eye-off-outline" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
          <Text style={styles.accountInfo}>Saving - 1000*****7768</Text>
          <Text style={styles.date}>{formattedDate}</Text>
        </View>
      </View>

      <View style={styles.servicesContainer}>
        <Text style={styles.servicesTitle}>Services</Text>
        <View style={styles.servicesGrid}>
          <TouchableOpacity style={styles.serviceItem}>
            <FontAwesome6
              name="money-bill-transfer"
              size={24}
              color="#A805C2"
            />
            <Text style={styles.serviceText}>Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceItem}>
            <Ionicons name="phone-portrait-outline" size={30} color="#A805C2" />
            <Text style={styles.serviceText}>Top Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceItem}>
            <Ionicons name="home-outline" size={30} color="#A805C2" />
            <Text style={styles.serviceText}>Utilities</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceItem}>
            <FontAwesome5 name="hands-helping" size={24} color="#A805C2" />
            <Text style={styles.serviceText}>Help</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceItem}>
            <FontAwesome name="bank" size={24} color="#A805C2" />
            <Text style={styles.serviceText}>Banking</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceItem}>
            <Ionicons name="calendar-outline" size={30} color="#A805C2" />
            <Text style={styles.serviceText}>Events</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceItem}>
            <Entypo
              name="creative-commons-attribution"
              size={24}
              color="#A805C2"
            />
            <Text style={styles.serviceText}>Utility</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceItem}>
            <MaterialIcons name="real-estate-agent" size={30} color="#A805C2" />
            <Text style={styles.serviceText}>Top Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceItem}>
            <Ionicons name="airplane-sharp" size={24} color="#A805C2" />
            <Text style={styles.serviceText}>Travel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceItem}>
            <FontAwesome6
              name="hand-holding-dollar"
              size={24}
              color="#A805C2"
            />
            <Text style={styles.serviceText}>Pay for</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.serviceItem}>
            <Entypo name="video" size={30} color="#A805C2" />
            <Text style={styles.serviceText}>Pay for</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const CreditScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>Credit</Text>
    </View>
  );
};

const AccountScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>Account</Text>
    </View>
  );
};

const RecentScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>Recent</Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
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
          tabBarActiveTintColor: "#A805C2",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Credit" component={CreditScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
        <Tab.Screen name="Recent" component={RecentScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  header: {
    // alignItems: "center",

    margin: 10,
    borderRadius: 8,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: "#111111",
    color: "#fff",
    flex: 1,
  },
  logoContainer: {
    display: "flex",
    flexDirection: "row",
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  headerText: {
    fontSize: 20,

    marginTop: 10,
    color: "#FBBF24",
  },
  slogan: {
    fontSize: 14,
    color: "#fff",
  },
  balanceContainer: {
    backgroundColor: "white",
    padding: 20,
    margin: 10,
    borderRadius: 8,
  },
  balanceLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  balanceRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5,
  },
  balanceValue: {
    fontSize: 24,
    fontWeight: "bold",
  },
  eyeIcon: {
    padding: 5,
  },
  accountInfo: {
    marginTop: 5,
    color: "gray",
  },
  date: {
    marginTop: 5,
    color: "gray",
  },
  servicesContainer: {
    padding: 20,
  },
  servicesTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  servicesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  serviceItem: {
    width: "45%",
    backgroundColor: "white",
    padding: 20,
    marginVertical: 5,
    borderRadius: 8,
    alignItems: "center",
  },

  serviceText: {
    marginTop: 5,
    textAlign: "center",
  },
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  balanceCard: {
    backgroundColor: "#111111",
    margin: 10,
    borderRadius: 8,
    padding: 20,
  },
  balanceContainer: {
    display: "flex",
    alignItems: "center",
  },
  balanceLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff", // White text for card
  },
  balanceRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5,
  },
  balanceValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff", // White text for card
  },
  eyeIcon: {
    padding: 5,
  },
  accountInfo: {
    marginTop: 5,
    color: "gray",
    color: "#FBBF24",
  },
  date: {
    marginTop: 5,
    color: "gray",
    color: "#ccc", // Lighter text for card
  },
});

export default App;
