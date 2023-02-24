import { StatusBar as SBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, View, StatusBar } from "react-native";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Dashboard from "./components/Dashboard";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <LinearGradient
        colors={["#181927", "#1C192D", "#19182C"]}
        style={[styles.linearGradient]}
        start={{ x: 0.1, y: 1 }}
        end={{ x: 1, y: 0 }}
      >
        <Login />
        {/* <Dashboard /> */}
        {/* <Profile /> */}
        {/* <Settings /> */}
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
    height: "100%",
  },
});
