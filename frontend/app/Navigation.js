import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Ionicons,
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function Navigation() {
  return (
    <View style={styles.navbar}>
      <AntDesign name="home" size={32} color="white" />
      <Entypo name="text" size={32} color="white" />
      <Ionicons name="add-circle" size={36} color="#8c44f7" />
      <Ionicons name="notifications" size={32} color="white" />
      <AntDesign name="search1" size={32} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flex: 0.06,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
  },
});
