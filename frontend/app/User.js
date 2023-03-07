import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'

const User = () => {
  return (
    <View style={styles.header}>
      <Ionicons
        name="arrow-back-outline"
        color="#fff"
        size={32}
        style={[styles.icon, styles.iconBack]}
      />
      <Text style={styles.headerText}>Your Profile</Text>
    </View>
  )
}

export default User

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    flex: 1,
    color: '#fff',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
})
