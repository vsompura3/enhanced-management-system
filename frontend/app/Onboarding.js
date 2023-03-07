import {
  AntDesign,
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'

export default function Onboarding() {
  return (
    <View style={styles.app}>
      <View style={styles.image}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
  image: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 300,
    width: 300,
  },
})
