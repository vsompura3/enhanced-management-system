import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { BeakerIcon } from "@heroicons/react/24/solid";

export default function Dashboard() {
  const [name, setName] = useState("Tanupam Saha");
  const [course, setCourse] = useState(
    "CAP770 - Data Structures and Algorithms"
  );
  const [roomNo, setRoomNo] = useState("36 - 802A");
  const [attendance, setAttendance] = useState("100");
  const [numberOfAssignment, setNumberOfAssignment] = useState("0");
  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <Text style={styles.module}>Dashboard</Text>
      </View>
      <View style={styles.intro}>
        <Text style={styles.welcome}>Hello,</Text>
        <Text style={styles.welcome}>{name}</Text>
      </View>
      <View style={styles.menu}>
        <Text style={[styles.options, styles.active]}>Overview</Text>
        <Text style={styles.options}>Timetable</Text>
        <Text style={styles.options}>Grades</Text>
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
        <Text style={styles.titleLight}>Assignments</Text>
        <Text style={styles.percentLight}>{numberOfAssignment}</Text>
      </View>
      <View style={styles.task}>
        <Text style={styles.titleLight}>Assignments</Text>
        <Text style={styles.percentLight}>{numberOfAssignment}</Text>
      </View>
      <View style={styles.navbar}>
        <Text style={styles.titleLight}>navbar</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
  header: {
    flex: 0.1,
  },
  module: {
    color: "#fff",
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
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
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  options: {
    fontSize: 16,
    color: "#fff",
    padding: 5,
  },
  active: {
    justifyContent: "center",
    alignItems: "center",
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
  },
  titleLight: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  percentLight: {
    color: "#fff",
    fontWeight: "bold",
  },
  navbar: {
    flex: 0.1,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    alignSelf: "center",
  },
});
