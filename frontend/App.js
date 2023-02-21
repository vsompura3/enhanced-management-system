import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, View } from "react-native";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { LinearGradient } from "expo-linear-gradient";
import { BeakerIcon } from "@heroicons/react/24/solid";

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <LinearGradient
        colors={["#1C192D", "#181A20", "#181A21"]}
        style={[styles.linearGradient]}
      >
        {/* <Login /> */}
        <Dashboard />
        <StatusBar style="auto" />
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  linearGradient: {
    flex: 1,
  },
});
