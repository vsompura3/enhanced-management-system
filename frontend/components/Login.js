import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";

export default function Login() {
  return (
    <View style={styles.app}>
      <View style={styles.icons}>
        <Image style={styles.logo} source={require("../assets/ems-logo.png")} />
      </View>
      <View style={styles.signup}>
        <View style={styles.header}>
          {/* <Text style={styles.heading}>EMS</Text> */}
          <Text style={styles.subheading}>Enhanced Management System</Text>
          <Text style={styles.tag}>"Making lives faster and better."</Text>
        </View>
        <View style={styles.input}>
          <Text style={styles.label}>Your Registration Number</Text>
          <TextInput style={styles.credential} />
          <Text style={styles.label}>Your Password</Text>
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
    alignItems: "center",
    justifyContent: "center",
  },
  icons: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  logo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: 149,
  },
  signup: {
    flex: 1,
  },
  header: {
    flex: 0.3,
    paddingHorizontal: 24,
    paddingVertical: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 36,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  subheading: {
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  tag: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    fontStyle: "italic",
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
