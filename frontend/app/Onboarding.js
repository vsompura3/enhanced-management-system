import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Ionicons,
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function Onboarding() {
  return (
    <View style={styles.app}>
      <View style={styles.image}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
  image: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: 300,
    width: 300,
  },
});
