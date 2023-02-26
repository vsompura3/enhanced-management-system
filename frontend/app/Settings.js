import { StyleSheet, Text, View, TextInput, Image, Button } from "react-native";
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
  const [rollno, setrollno] = useState("RD2210A22");

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
        <Text style={styles.button}>View Profile</Text>
      </View>
      <View style={styles.workspace}>
        <Text style={styles.subheading}>Workspace</Text>
        <View style={styles.workContent}>
          <Image
            source={require("../assets/avatar.png")}
            style={styles.avatar}
          />
          <View style={styles.workContentText}>
            <Text style={styles.workContentText}>{rollno}</Text>
            <Text style={styles.subheading}>{email}</Text>
          </View>
          <Text style={[styles.button, styles.buttonSolid]}>Invite</Text>
        </View>
      </View>
      <View style={styles.workspace}>
        <Text style={styles.subheading}>Notification</Text>
        <View style={styles.workContent}>
          <Image source={require("../assets/dnd.png")} style={styles.icon} />
          <View style={styles.workContentText}>
            <Text style={styles.workContentText}>Do not disturb</Text>
            <Text style={styles.subheading}>Off</Text>
          </View>
        </View>
      </View>
      <View style={styles.workspace}>
        <Text style={styles.subheading}>Manage</Text>
        <View style={styles.workContent}>
          <View style={styles.workContentText}>
            <Text style={styles.workContentText}></Text>
            <Text style={styles.subheading}></Text>
          </View>
        </View>
      </View>
      <View style={styles.logout}>
        <Text style={styles.workContentText}>Log out</Text>
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
    paddingHorizontal: 16,
  },
  exit: {
    padding: 8,
    borderColor: "#246BFE",
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: "#246BFE",
    alignContent: "center",
  },
  belowtop: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
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
  },
  buttonSolid: {
    backgroundColor: "#2362E1",
    shadowColor: "#191B21",
    shadowOpacity: 10,
    shadowOffset: 8,
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
    fontSize: 28,
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
  email: {
    color: "#ABFFFE",
    fontWeight: "bold",
    fontSize: 16,
    paddingVertical: 10,
    marginBottom: 5,
  },
  workspace: {
    flex: 0.15,
    padding: 10,
    marginHorizontal: 10,
  },
  workContent: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderColor: "#262A34",
    backgroundColor: "#262A34",
    borderWidth: 1,
    borderRadius: 12,
    height: 77,
  },
  workContentText: {
    color: "white",
    justifyContent: "center",
    alignContent: "center",
    fontWeight: "bold",
    fontSize: 16,
    paddingVertical: 5,
  },
  subheading: {
    color: "#4C4D57",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 10,
    fontWeight: "bold",
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 50,
    borderWidth: 1,
  },
  icon: {
    height: 40,
    width: 40,
    borderRadius: 50,
    borderWidth: 1,
    backgroundColor: "#A06AFA",
    padding: 5,
  },
  logout: {
    flex: 0.07,
    backgroundColor: "#FF968E",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    width: 370,
    margin: 10,
    borderRadius: 10,
  },
});
