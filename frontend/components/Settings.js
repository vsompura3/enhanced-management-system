import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Ionicons,
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";

export default function Settings() {
  const [name, setname] = useState("Tanupam Saha");
  const [email, setemail] = useState("tanupam@lpu.in");

  return (
    <View style={styles.app}>
      <View style={styles.top}>
        <Fontisto name="close-a" size={16} color="white" style={styles.exit} />
      </View>
      <View style={styles.belowtop}>
        <Image
          source={require("../assets/avatar.png")}
          style={styles.profile}
        />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
        <Text style={styles.edit}>View Profile</Text>
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
    padding: 16,
  },
  exit: {
    padding: 8,
    borderColor: "#246BFE",
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: "#246BFE",
    alignContent: "center",
  },
  option: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    alignItems: "flex-end",
  },
  edit: {
    color: "#fff",
    fontSize: 16,
    borderColor: "#2362E1",
    borderWidth: 3,
    borderRadius: 28,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: "auto",
    textAlign: "center",
    alignContent: "center",
    fontWeight: "bold",
  },
  belowtop: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  profile: {
    height: 140,
    width: 140,
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
    paddingVertical: 10,
    marginBottom: 5,
  },
});
