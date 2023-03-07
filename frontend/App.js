import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar as SBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import Dashboard from './app/Dashboard'
import Login from './app/Login'
import Onboarding from './app/Onboarding'
import Profile from './app/Profile'
import Settings from './app/Settings'
import User from './app/User'

export default function App() {
  return (
    <PaperProvider>
      <LinearGradient
        colors={['#3A1078', '#18172A', '#18172A']}
        style={[styles.linearGradient]}
        start={{ x: 0.02, y: 0 }}
        end={{ x: 0.6, y: 0.1 }}
      >
        <SafeAreaView style={styles.screen}>
          <View style={styles.appContainer}>
            {/* <User /> */}
            <Login />
            {/* <Dashboard /> */}
            {/* <Onboarding /> */}
            {/* <Profile /> */}
            {/* <Settings /> */}
          </View>
        </SafeAreaView>
        <SBar style="auto" />
      </LinearGradient>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  appContainer: {
    flex: 1,
    padding: 20,
  },
  linearGradient: {
    flex: 1,
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
})
