import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { LogBox } from 'react-native'

import { AuthProvider } from './src/contexts/auth'
import { Routes } from './src/routes'

LogBox.ignoreLogs(['Setting a timer'])

export default function App () {
  return (
    <>
      <StatusBar style="light" backgroundColor="#131313" translucent/>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  )
}
