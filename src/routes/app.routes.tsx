import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { AntDesign } from '@expo/vector-icons'

import { COLORS, FONTS } from './../themes'

import { Home } from '../screens/Home'
import { Register } from '../screens/Register'
import { Profile } from '../screens/Profile'

export type AppRoutesParamList = {
  Home: undefined
  Register: undefined
  Profile: undefined
}

export const AppRoutes = () => {
  const { Navigator, Screen } = createDrawerNavigator()
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        drawerType: 'back',
        drawerStyle: {
          backgroundColor: COLORS.PRIMARY
        },
        drawerLabelStyle: {
          fontFamily: FONTS.BOLD,
          marginHorizontal: 0
        },
        drawerItemStyle: {
          marginVertical: 5
        },
        drawerActiveTintColor: COLORS.WHITE,
        drawerActiveBackgroundColor: COLORS.SECONDARY,
        drawerInactiveTintColor: COLORS.GRAY,
        drawerInactiveBackgroundColor: COLORS.BLACK
      }}
    >
      <Screen
        name="Home"
        component={ Home }
        options={{
          drawerIcon: ({ color, size }) => <AntDesign name="home" size={size} color={color}/>
        }}
      />
      <Screen
        name="Register"
        component={ Register }
        options={{
          drawerIcon: ({ color, size }) => <AntDesign name="plussquareo" size={size} color={color}/>
        }}
      />
      <Screen
        name="Profile"
        component={ Profile }
        options={{
          drawerIcon: ({ color, size }) => <AntDesign name="profile" size={size} color={color}/>
        }}
      />
    </Navigator>
  )
}
