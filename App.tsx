import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { LogBox } from 'react-native'
import AppLoading from 'expo-app-loading'
import { Montserrat_400Regular, Montserrat_700Bold, useFonts } from '@expo-google-fonts/montserrat'

import { AuthProvider } from './src/contexts/auth'
import { Routes } from './src/routes'

LogBox.ignoreLogs(['Setting a timer', 'AsyncStorage has been extracted'])

export default function App () {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar style="light" backgroundColor="#131313" translucent/>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  )
}
