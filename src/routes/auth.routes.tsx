import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { SignIn } from '../screens/SignIn'
import { SignUp } from '../screens/SignUp'

export type AuthRoutesStackParamList = {
  SignIn: undefined
  SignUp: undefined
}

export const AuthRoutes = () => {
  const { Navigator, Screen } = createNativeStackNavigator()
  return (
    <Navigator>
      <Screen
        name="SignIn"
        component={ SignIn }
        options={{
          headerShown: false
        }}
      />

      <Screen
        name="SignUp"
        component={ SignUp }
        options={{
          headerShown: false
        }}
      />
    </Navigator>
  )
}
