import {
  AntDesign,
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function Profile() {
  const [name, setname] = useState("Tanupam Saha");
  const [email, setemail] = useState("tanupam@lpu.in");
  const [regno, setregno] = useState("12200097");
  const [section, setsection] = useState("D2210");
  const [course, setcourse] = useState("P164 - NN1 - MCA");

  return (
    <View style={styles.app}>
      <View style={styles.top}>
        <Ionicons
          name="arrow-back-circle-outline"
          size={40}
          color="white"
          style={styles.back}
        />
        <Text style={styles.option}>Profile</Text>
        <Ionicons name="ios-settings" size={32} color="white" />
      </View>
      <View style={styles.belowtop}>
        <Image
          source={require("../assets/avatar.png")}
          style={styles.profile}
        />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
        <Text style={styles.info}>{regno}</Text>
        <Text style={styles.info}>{section}</Text>
        <Text style={styles.info}>{course}</Text>
        {/* <Text style={styles.button}>Edit</Text> */}
      </View>
      <View style={styles.options}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
  top: {
    flex: 0.1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    paddingBottom: 16,
  },

  option: {
    color: "#fff",
    fontSize: 20,
    alignSelf: "center",
    textAlign: "center",
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    color: "#fff",
    fontSize: 16,
    borderColor: "#2362E1",
    borderWidth: 3,
    borderRadius: 28,
    width: "auto",
    textAlign: "center",
    alignContent: "center",
    fontWeight: "bold",
    alignSelf: "center",
  },
  belowtop: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  profile: {
    height: 150,
    width: 150,
    borderWidth: 1,
    borderRadius: 100,
    margin: 10,
  },
  name: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
  email: {
    color: "#ABFFFE",
    fontSize: 16,
    paddingVertical: 8,
  },
  options: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    color: "white",
    fontSize: 20,
    paddingVertical: 4,
    paddingHorizontal: 20,
    fontWeight: "bold",
  },
});
