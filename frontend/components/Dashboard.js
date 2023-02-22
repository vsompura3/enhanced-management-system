import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Ionicons,
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function Dashboard() {
  const [name, setName] = useState("Tanupam Saha");
  const [course, setCourse] = useState(
    "CAP770 - Data Structures and Algorithms"
  );
  const [roomNo, setRoomNo] = useState("36 - 802A");
  const [attendance, setAttendance] = useState("100");
  const [numberOfAssignment, setNumberOfAssignment] = useState("4");
  const [numberOfExams, setNumberOfExams] = useState("7");
  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <Text style={styles.module}>Dashboard</Text>
        <View style={styles.icons}>
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={28}
            color="white"
            style={styles.icon}
          />
          <Image
            source={require("../assets/avatar.png")}
            style={styles.avatar}
          />
        </View>
      </View>
      <View style={styles.intro}>
        <Text style={styles.welcome}>Hello,</Text>
        <Text style={styles.welcome}>{name}</Text>
      </View>
      <View style={styles.menu}>
        <View style={styles.menuOptions}>
          <Text style={[styles.options, styles.active]}>Overview</Text>
          <Text style={styles.options}>Timetable</Text>
        </View>
        <Ionicons name="ios-options-sharp" size={28} color="white" />
      </View>
      <View style={styles.events}>
        <Text style={styles.titleDark}>Upcoming class </Text>
        <Text style={styles.details}>{course}</Text>
        <Text style={styles.details}>{roomNo}</Text>
        <Text style={[styles.details, styles.percent]}>Current Attendance</Text>
        <View style={styles.snap}>
          <Text>Progress bar as in attendance</Text>
          <Text style={styles.percentDark}>{attendance}%</Text>
        </View>
      </View>
      <View style={styles.task}>
        <Image
          source={require("../assets/attendance.png")}
          style={styles.taskIcon}
        />
        <Text style={styles.titleLight}>Assignments</Text>
        <View style={styles.taskSub}>
          <Text style={styles.percentLight}>{numberOfAssignment}</Text>
          <AntDesign name="right" size={20} color="white" />
        </View>
      </View>
      <View style={styles.task}>
        <Image source={require("../assets/exam.png")} style={styles.taskIcon} />
        <Text style={styles.titleLight}>Exams</Text>
        <View style={styles.taskSub}>
          <Text style={styles.percentLight}>{numberOfExams}</Text>
          <AntDesign name="right" size={20} color="white" />
        </View>
      </View>
      <View style={styles.navbar}>
        <AntDesign name="home" size={32} color="white" onPress={""} />
        <Entypo name="text" size={32} color="white" />
        <Ionicons name="add-circle" size={36} color="blue" />
        <Ionicons name="notifications" size={32} color="white" />
        <AntDesign name="search1" size={32} color="white" onPress={""} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
  header: {
    flex: 0.15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  module: {
    color: "#fff",
    fontSize: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    fontWeight: "bold",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  icon: {
    color: "#fff",
    paddingHorizontal: 20,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 50,
    borderWidth: 1,
  },
  intro: {
    flex: 0.2,
    overflow: "hidden",
  },
  welcome: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
  menu: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginHorizontal: 20,
  },
  menuOptions: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  options: {
    fontSize: 18,
    color: "grey",
    padding: 5,
    marginHorizontal: 5,
  },
  active: {
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    borderColor: "#246BFE",
    borderWidth: 2,
    borderRadius: 30,
    backgroundColor: "#246BFE",
    height: 36,
    paddingHorizontal: 20,
  },
  events: {
    flex: 0.2,
    backgroundColor: "#A9ABFE",
    borderColor: "#A9ABFE",
    borderWidth: 2,
    borderRadius: 24,
    margin: 16,
    padding: 20,
    justifyContent: "flex-start",
  },
  titleDark: {
    fontWeight: "bold",
    fontSize: 20,
  },
  details: {
    fontSize: 16,
  },
  snap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  percentDark: {
    fontWeight: "bold",
  },
  task: {
    flex: 0.1,
    backgroundColor: "#262A34",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 16,
    borderColor: "#262A34",
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 8,
  },
  taskIcon: {
    height: 40,
    width: 40,
  },
  titleLight: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    width: 150,
  },
  taskSub: {
    flexDirection: "row",
    width: 50,
    justifyContent: "space-between",
    alignItems: "center",
  },
  percentLight: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    paddingHorizontal: 20,
    alignContent: "center",
  },
  navbar: {
    flex: 0.1,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
  },
});
