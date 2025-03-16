import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import {
  Ionicons,
  FontAwesome6,
  FontAwesome5,
  Entypo,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  // State to manage balance visibility
  const [isBalanceVisible, setIsBalanceVisible] = useState(false);

  // Function to toggle balance visibility
  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/images/cbe_logo2.jpg")}
            style={styles.logo}
          />
          <View>
            <Text style={styles.headerText}>Commercial Bank of Ethiopia</Text>
            <Text style={styles.slogan}>The Bank You can always Rely on!</Text>
          </View>
        </View>
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceLabel}>Balance</Text>
          <View style={styles.balanceRow}>
            <Text style={styles.balanceValue}>
              {isBalanceVisible ? "10,000 Br" : "***** Br."}
            </Text>
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={toggleBalanceVisibility}
            >
              <Ionicons name="eye-off-outline" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
          <Text style={styles.accountInfo}>Saving - 1000*****7768</Text>
          <Text style={styles.date}>{formattedDate}</Text>
        </View>
      </View>

      <View style={styles.servicesContainer}>
        <View style={styles.servicesTitleContainer}>
          <View style={styles.greenDot} />
          <Text style={styles.servicesTitle}>Services</Text>
        </View>
        <View style={styles.servicesGrid}>
          <TouchableOpacity
            style={styles.serviceItem}
            onPress={() => navigation.navigate("Transfer")}
          >
            <FontAwesome6
              name="money-bill-transfer"
              size={24}
              color="#A805C2"
            />
            <Text style={styles.serviceText}>Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.serviceItem}
            onPress={() => navigation.navigate("TopUp")}
          >
            <Ionicons name="phone-portrait-outline" size={30} color="#A805C2" />
            <Text style={styles.serviceText}>Top Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.serviceItem}
            onPress={() => navigation.navigate("Utilities")}
          >
            <Ionicons name="home-outline" size={30} color="#A805C2" />
            <Text style={styles.serviceText}>Utilities</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.serviceItem}
            onPress={() => navigation.navigate("Help")}
          >
            <FontAwesome5 name="hands-helping" size={24} color="#A805C2" />
            <Text style={styles.serviceText}>Help</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.serviceItem}
            onPress={() => navigation.navigate("Banking")}
          >
            <FontAwesome name="bank" size={24} color="#A805C2" />
            <Text style={styles.serviceText}>Banking</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.serviceItem}
            onPress={() => navigation.navigate("Events")}
          >
            <Ionicons name="calendar-outline" size={30} color="#A805C2" />
            <Text style={styles.serviceText}>Events</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.serviceItem}
            onPress={() => navigation.navigate("Utility")}
          >
            <Entypo
              name="creative-commons-attribution"
              size={24}
              color="#A805C2"
            />
            <Text style={styles.serviceText}>Utility</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.serviceItem}
            onPress={() => navigation.navigate("GovernmentServices")}
          >
            <MaterialIcons name="real-estate-agent" size={30} color="#A805C2" />
            <Text style={styles.serviceText}>Government Services</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.serviceItem}
            onPress={() => navigation.navigate("Travel")}
          >
            <Ionicons name="airplane-sharp" size={24} color="#A805C2" />
            <Text style={styles.serviceText}>Travel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.serviceItem}
            onPress={() => navigation.navigate("PayFor")}
          >
            <FontAwesome6
              name="hand-holding-dollar"
              size={24}
              color="#A805C2"
            />
            <Text style={styles.serviceText}>Pay for</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.serviceItem}
            onPress={() => navigation.navigate("Entertainment")}
          >
            <Entypo name="video" size={30} color="#A805C2" />
            <Text style={styles.serviceText}>Entertainment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
    padding: 10,
  },
  servicesTitleContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  greenDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "green",
    marginRight: 5,
  },
  servicesTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  servicesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    // justifyContent: "space-around",
    justifyContent: "flex-start",
    // gap: 30, // Align items to the start (left)
    paddingHorizontal: 10,
  },
  serviceItem: {
    width: "45%",
    backgroundColor: "white",
    padding: 20,
    marginVertical: 5,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: "2.5%",
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
    color: "#fff",
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

export default HomeScreen;
