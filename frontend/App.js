import { StatusBar as SBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  View,
  StatusBar,
  ImageBackground,
} from "react-native";
import Login from "./app/Login";
import Profile from "./app/Profile";
import Settings from "./app/Settings";
import Dashboard from "./app/Dashboard";
import Onboarding from "./app/Onboarding";
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
        <ImageBackground
          source={require("./assets/gradient.png")}
          style={[styles.linearGradient]}
        >
          <Login />
          {/* <Dashboard /> */}
          {/* <Onboarding /> */}
          {/* <Profile /> */}
          {/* <Settings /> */}
          <SBar style="auto" />
        </ImageBackground>
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
    resizeMode: "cover",
    justifyContent: "center",
  },
});
