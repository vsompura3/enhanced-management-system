import { Ionicons } from "@expo/vector-icons";
import { Link, Redirect, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Platform, Pressable, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

export default function Login() {
  const { onPress, title = "Submit" } = [];
  return (
    <View style={styles.app}>
      <View style={styles.signup}>
        {/* <Ionicons
          name="arrow-back-circle-outline"
          size={40}
          color="white"
          style={styles.back}
        /> */}
        <Image source={require("../assets/ems-logo.png")} style={styles.logo} />
        {/* <View style={styles.header}>
          <Text style={styles.subheading}>Login</Text>
        </View> */}
        <View style={styles.input}>
          <TextInput
            mode="outlined"
            label={"Registration Number"}
            activeOutlineColor="#915edb"
            style={styles.credential}
          />

          <TextInput
            mode="outlined"
            label={"Password"}
            secureTextEntry
            right={<TextInput.Icon icon="eye" />}
            activeOutlineColor="#8c44f7"
            style={styles.credential}
          />
        </View>
        <Button
          mode="contained"
          textColor="#fff"
          buttonColor="#8c44f7"
          onPress={() => console.log("Pressed")}
          style={styles.btn}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Log In</Text>
        </Button>
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
    paddingTop: Platform.OS === "android" ? 120 : 100,
  },
  back: {
    paddingVertical: 25,
    paddingHorizontal: 20,
  },
  logo: {
    height: 120,
    width: 120,
    alignSelf: "center",
  },
  header: {
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  subheading: {
    fontSize: 28,
    color: "#fff",
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
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 32,
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
    borderRadius: 8,
    color: "#fff",
    backgroundColor: "#18181f",
    marginVertical: 4,
  },
  btn: {
    marginTop: 18,
    borderRadius: 6,
    fontSize: 20,
    paddingVertical: 2,
    marginHorizontal: 20,
  },
});
