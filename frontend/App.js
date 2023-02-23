import { StatusBar as SBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, View, StatusBar } from "react-native";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <LinearGradient
        colors={["#1C192D", "#181A20", "#181A21"]}
        style={[styles.linearGradient]}
      >
        {/* <Login /> */}
        {/* <Dashboard /> */}
        <Profile />
        <SBar style="auto" />
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  linearGradient: {
    flex: 1,
  },
});
