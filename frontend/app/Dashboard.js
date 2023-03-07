import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { useState } from "react";

import {
  Ionicons,
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
import Navigation from "./Navigation";
import { useRouter } from "expo-router";

export default function Dashboard() {
  const [name, setName] = useState("Tanupam Saha");
  const [course, setCourse] = useState(
    "CAP770 - Data Structures and Algorithms"
  );
  const [roomNo, setRoomNo] = useState("36 - 802A");
  const [attendance, setAttendance] = useState("100");
  const [numberOfAssignment, setNumberOfAssignment] = useState("4");
  const [numberOfExams, setNumberOfExams] = useState("7");
  const [time, settime] = useState("Evening");
  const [attendanceStatus, setattendanceStatus] = useState("Present");
  const [classTime, setclassTime] = useState("10:00AM");
  return (
    <View style={styles.app}>
      <ScrollView style={styles.app}>
        <View style={styles.header}>
          <Text style={styles.module}>Dashboard</Text>
          <View style={styles.icons}>
            <MaterialIcons
              name="message"
              size={32}
              color="white"
              style={styles.icon}
            />
            <Image
              source={require("../assets/avatar.png")}
              style={styles.avatar}
              onMagicTap={() => router}
            />
          </View>
        </View>
        <View style={styles.intro}>
          <Text style={styles.greet}>
            Good {time}, {name}
          </Text>
        </View>

        <View style={styles.events}>
          <Text style={styles.titleDark}>Ongoing Class</Text>
          <View style={styles.nav}>
            <FontAwesome
              name="chevron-circle-left"
              size={20}
              color="white"
              style={{ paddingHorizontal: 4 }}
            />
            <View>
              <Text style={styles.details}>{course}</Text>
              <Text style={styles.details}>{roomNo}</Text>
            </View>
            <FontAwesome
              name="chevron-circle-right"
              size={20}
              color="white"
              style={{ paddingHorizontal: 4 }}
            />
          </View>
          <Text style={[styles.details, styles.percent]}>
            Current Attendance
          </Text>

          <View style={styles.snap}>
            <Text style={styles.status}>{attendanceStatus}</Text>
            <Text style={styles.percentDark}>{attendance}%</Text>
          </View>
        </View>
        <View style={styles.tasks}>
          <View style={styles.task}>
            <Image
              source={require("../assets/timetable.png")}
              style={styles.taskIcon}
            />
            <Text style={styles.titleLight}>Timetable</Text>
          </View>
          <View style={styles.task}>
            <Image
              source={require("../assets/assignment.png")}
              style={styles.taskIcon}
            />
            <Text style={styles.titleLight}>Assignments</Text>
          </View>
          <View style={styles.task}>
            <Image
              source={require("../assets/attendance.png")}
              style={styles.taskIcon}
            />
            <Text style={styles.titleLight}>Attendance</Text>
          </View>
          <View style={styles.task}>
            <Image
              source={require("../assets/attendance.png")}
              style={styles.taskIcon}
            />
            <Text style={styles.titleLight}>Makeup</Text>
          </View>
          <View style={styles.task}>
            <Image
              source={require("../assets/kya.png")}
              style={styles.taskIcon}
            />
            <Text style={styles.titleLight}>Know your authority</Text>
          </View>
          <View style={styles.task}>
            <Image
              source={require("../assets/exam.png")}
              style={styles.taskIcon}
            />
            <Text style={styles.titleLight}>Assignment Marks</Text>
          </View>
          <View style={styles.task}>
            <Image
              source={require("../assets/attendance.png")}
              style={styles.taskIcon}
            />
            <Text style={styles.titleLight}>Pending Assignment</Text>
          </View>
          <View style={styles.task}>
            <Image
              source={require("../assets/kya.png")}
              style={styles.taskIcon}
            />
            <Text style={styles.titleLight}>View Marks</Text>
          </View>
          <View style={styles.task}>
            <Image
              source={require("../assets/exam.png")}
              style={styles.taskIcon}
            />
            <Text style={styles.titleLight}>View Grade</Text>
          </View>
          <View style={styles.task}>
            <Image
              source={require("../assets/attendance.png")}
              style={styles.taskIcon}
            />
            <Text style={styles.titleLight}>Exams Available</Text>
          </View>
          <View style={styles.task}>
            <Image
              source={require("../assets/kya.png")}
              style={styles.taskIcon}
            />
            <Text style={styles.titleLight}>View Syllabus</Text>
          </View>
          <View style={styles.task}>
            <Image
              source={require("../assets/exam.png")}
              style={styles.taskIcon}
            />
            <Text style={styles.titleLight}>Assignment Marks</Text>
          </View>
        </View>
      </ScrollView>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
  header: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  module: {
    color: "#fff",
    fontSize: 20,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontWeight: "bold",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  icon: {
    color: "#fff",
    paddingHorizontal: 16,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 50,
    borderWidth: 1,
  },
  greet: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  intro: {
    flex: 0.15,
    overflow: "hidden",
    flexDirection: "row",
  },
  welcome: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
  menu: {
    flex: 0.06,
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
  events: {
    flex: 0.2,
    backgroundColor: "#8c44f7",
    borderColor: "#8c44f7",
    borderWidth: 2,
    borderRadius: 24,
    margin: 16,
    padding: 8,
    justifyContent: "flex-start",
  },
  titleDark: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
  },
  nav: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  details: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  snap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  status: {
    backgroundColor: "#262b34",
    color: "white",
    width: 60,
    height: 30,
    textAlign: "center",
    alignSelf: "center",
  },
  percentDark: {
    fontWeight: "bold",
  },
  tasks: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  task: {
    backgroundColor: "#262A34",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 16,
    borderColor: "#262A34",
    marginHorizontal: 12,
    marginVertical: 12,
    padding: 8,
    width: 110,
    height: 110,
  },
  taskIcon: {
    height: 40,
    width: 40,
    margin: 10,
  },
  titleLight: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
  },
  taskSub: {
    flexDirection: "row",
    width: 50,
    justifyContent: "space-between",
    alignItems: "center",
  },
  percentLight: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
    alignContent: "center",
  },
});
