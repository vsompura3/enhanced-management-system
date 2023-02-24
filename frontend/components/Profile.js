import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Ionicons,
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";

export default function Profile() {
  const [name, setname] = useState("Tanupam Saha");
  const [email, setemail] = useState("tanupam@lpu.in");
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
        <Text style={styles.button}>Edit</Text>
      </View>
      <View style={styles.belowtop}>
        <Image
          source={require("../assets/avatar.png")}
          style={styles.profile}
        />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
        <Text style={styles.button}>Edit</Text>
      </View>
      <View style={styles.options}>
        <Octicons name="project" size={24} color="white" />
        <Text>My Projects</Text>
      </View>
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
    marginBottom: 20,
    padding: 16,
  },
  back: {
    paddingHorizontal: 16,
  },
  option: {
    color: "#fff",
    fontSize: 20,
    alignSelf: "center",
    textAlign: "center",
    fontWeight: "bold",
    alignItems: "flex-end",
  },
  button: {
    color: "#fff",
    fontSize: 16,
    borderColor: "#2362E1",
    borderWidth: 3,
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 20,
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
    marginBottom:10,
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
});
