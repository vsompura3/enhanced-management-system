import { StyleSheet, Text, View, TextInput, Image } from "react-native";
// import { CiChat1 } from "react-icons/ci";

export default function Dashboard() {
  return (
    <View style={styles.app}>
      <View styles={styles.head}>
        <Text style={styles.dash}>Dashboard</Text>
        {/* <CiChat1 /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  head: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "space-between",
  },
  dash: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
