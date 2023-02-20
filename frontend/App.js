import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, View } from "react-native";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <LinearGradient
        colors={["#1C192D", "#181A20", "#181A21"]}
        style={styles.linearGradient}
      >
        <View style={styles.container}>
          {/* <Login /> */}
          <Dashboard />
          <StatusBar style="auto" />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  linearGradient: {
    flex: 1,
  },
});
