import * as Linking from 'expo-linking'
import { Link, Redirect, useRouter } from 'expo-router'
import { useContext, useEffect, useState } from 'react'
import { Image, Platform, StyleSheet, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { EMSContext } from '../context/EMSContext'

const LOGIN_URL = `https://ems-api-ems-ryuk-me.cloud.okteto.net/api/v1/user/login`

export default function Login() {
  const [registrationNumber, setRegistrationNumber] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(true)
  const { state, setState } = useContext(EMSContext)

  const handleUserLogin = () => {
    fetch(LOGIN_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ reg_no: registrationNumber, password: password }),
    })
      .then(res => res.json())
      .then(data => {
        setState([data])
        console.log(data)
      })
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleForgotPassword = () => {
    Linking.openURL('https://ums.lpu.in/lpuums/forgetpassword.aspx')
  }

  return (
    <View style={styles.app}>
      <View style={styles.signup}>
        <Image
          source={{
            uri: `data:image/png;base64,${state[0]?.profile_image}`,
            width: 120,
            height: 120,
          }}
          style={styles.logo}
        />

        <View style={styles.input}>
          <TextInput
            mode="outlined"
            label={'Registration Number'}
            activeOutlineColor="#915edb"
            onChangeText={setRegistrationNumber}
            style={styles.credential}
            keyboardType="numeric"
          />
          <TextInput
            mode="outlined"
            label={'Password'}
            secureTextEntry={showPassword}
            onChangeText={setPassword}
            right={
              <TextInput.Icon
                onPress={handleShowPassword}
                icon={password ? (showPassword ? 'eye' : 'eye-off') : ''}
              />
            }
            activeOutlineColor="#8c44f7"
            style={styles.credential}
          />
        </View>
        <Button
          mode="contained"
          textColor="#fff"
          buttonColor="#8c44f7"
          onPress={handleUserLogin}
          style={styles.btn}
        >
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Log In</Text>
        </Button>
        <Text style={styles.fpText} onPress={handleForgotPassword}>
          Forgot Password?
        </Text>

        {/* Test */}
        {/* {state.map(data => (
          <View key={data.registration_number}>
            <Text>{data.name}</Text>
            <Text>{data.program}</Text>
            <Text>{data.registration_number}</Text>
          </View>
        ))} */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
  signup: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 120 : 100,
  },
  back: {
    paddingVertical: 25,
    paddingHorizontal: 20,
  },
  logo: {
    borderRadius: 100,
    height: 120,
    width: 120,
    alignSelf: 'center',
  },
  header: {
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subheading: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  emphasis: {
    color: '#fff',
    fontWeight: 'bold',
  },
  tag: {
    fontSize: 18,
    color: 'grey',
    textAlign: 'center',
  },
  input: {
    paddingVertical: 20,
    marginTop: 32,
    justifyContent: 'center',
    alignContent: 'center',
  },
  label: {
    color: 'white',
    fontSize: 16,
    marginVertical: 10,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  credential: {
    borderRadius: 8,
    color: '#fff',
    backgroundColor: '#18181f',
    marginVertical: 4,
  },
  btn: {
    marginTop: 16,
    borderRadius: 6,
    fontSize: 20,
    paddingVertical: 2,
  },
  fpText: {
    marginTop: 16,
    textAlign: 'right',
  },
})
