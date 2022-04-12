import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppLoading from 'expo-app-loading'

import { useAuth } from '../hooks/useAuth'
import { AuthRoutes } from './auth.routes'
import { AppRoutes } from './app.routes'

export const Routes = () => {
  const { isLoading, user } = useAuth()

  if (isLoading) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      { user ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  )
}
