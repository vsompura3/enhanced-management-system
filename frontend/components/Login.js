import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function Login() {
  return (
    <View style={styles.app}>
      <View style={styles.signup}>
        <Ionicons
          name="arrow-back-circle-outline"
          size={40}
          color="white"
          style={styles.back}
        />
        <View style={styles.header}>
          <Text style={styles.subheading}>Log In</Text>
          <Text style={styles.tag}>
            Use your <Text style={styles.emphasis}>UMS Credentials</Text> to
            login
          </Text>
        </View>
        <View style={styles.input}>
          <Text style={styles.label}>Registration Number</Text>
          <TextInput style={styles.credential} />
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.credential} />
          <Text style={styles.btn}>Sign In</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
  signup: {
    flex: 1,
  },
  back: {
    paddingVertical: 25,
    paddingHorizontal: 20,
  },
  header: {
    flex: 0.3,
    paddingHorizontal: 28,
    paddingVertical: 28,
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  subheading: {
    fontSize: 32,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    paddingVertical: 10,
  },
  emphasis: {
    color: "#fff",
    fontWeight: "bold",
  },
  tag: {
    fontSize: 18,
    color: "grey",
    textAlign: "center",
  },
  input: {
    flex: 0.4,
    paddingHorizontal: 36,
    paddingVertical: 28,
    justifyContent: "center",
    alignContent: "center",
  },
  label: {
    color: "grey",
    fontSize: 12,
    marginTop: 8,
    alignItems: "center",
    justifyContent: "flex-start",
    textTransform: "uppercase",
  },
  credential: {
    width: 336,
    borderWidth: 3,
    borderColor: "transparent",
    borderBottomColor: "grey",
    color: "#fff",
    padding: 8,
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#246BFE",
    color: "#fff",
    borderRadius: 100,
    marginTop: 28,
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
    height: 48,
  },
});
