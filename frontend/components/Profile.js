import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Ionicons,
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Navigation from "./Navigation";

export default function Profile() {
  return (
    <View style={styles.app}>
      <View style={styles.top}>
        
        <Text>Profile</Text>
        <Text>Edit</Text>
      </View>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});