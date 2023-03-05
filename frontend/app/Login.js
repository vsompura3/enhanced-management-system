import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, Link, Redirect } from "expo-router";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
} from "react-native";

export default function Login() {
  const { onPress, title = "Submit" } = [];
  return (
    <View style={styles.app}>
      <View style={styles.signup}>
        <Ionicons
          name="arrow-back-circle-outline"
          size={40}
          color="white"
          style={styles.back}
        />
        <Image source={require("../assets/ems-logo.png")} style={styles.logo} />
        <View style={styles.header}>
          <Text style={styles.subheading}>Log in to EMS</Text>
          <Text style={styles.tag}>
            Use your <Text style={styles.emphasis}>UMS Credentials</Text>
          </Text>
        </View>
        <View style={styles.input}>
          <Text style={styles.label}>Registration Number</Text>
          <TextInput style={styles.credential} />
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.credential} passwordVisible={false} />
          <Pressable onPress={onPress}>
            <Text style={styles.btn}>Log In</Text>
          </Pressable>
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
  logo: {
    flex: 0.2,
    height: 100,
    width: 100,
    alignSelf: "center",
  },
  header: {
    flex: 0.1,
    paddingHorizontal: 28,
    paddingVertical: 20,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  brand: {
    fontWeight: "bolder",
    color: "#8c44f7",
    padding: 1,
  },
  subheading: {
    fontSize: 32,
    color: "#fff",
    textAlign: "center",
    paddingVertical: 8,
    fontWeight: "bold",
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
    color: "white",
    fontSize: 16,
    marginVertical: 10,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  credential: {
    width: 336,
    borderWidth: 1,
    borderColor: "transparent",
    borderColor: "#8c44f7",
    borderRadius: 8,
    color: "#fff",
    backgroundColor: "#18181f",
    padding: 8,
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#8c44f7",
    color: "#fff",
    borderRadius: 8,
    marginTop: 28,
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
    height: 48,
  },
});
