import {
  AntDesign,
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function Onboarding() {
  return (
    <View style={styles.app}>
      <View style={styles.image}>
        <Image source={require("../assets/2037.jpg")} style={styles.img} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
  image: {
    height: 360,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3a016a",
    borderCurve: 20,
    borderRadius: 200,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 40,
  },
  img: {
    height: 300,
    width: 300,
  },
});
