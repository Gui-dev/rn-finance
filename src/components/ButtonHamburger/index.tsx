import React from 'react'
import { TouchableNativeFeedbackProps } from 'react-native'
import { useNavigation, DrawerActions } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import { COLORS } from './../../themes'
import { Container, ButtonToggle } from './style'

type ButtonHamburgerProps = TouchableNativeFeedbackProps

export const ButtonHamburger: React.FC<ButtonHamburgerProps> = () => {
  const { dispatch } = useNavigation()

  const toggleDrawerMenu = () => {
    dispatch(DrawerActions.toggleDrawer())
  }

  return (
    <Container>
      <ButtonToggle onPress={toggleDrawerMenu}>
        <Feather name="menu" size={32} color={COLORS.WHITE}/>
      </ButtonToggle>
    </Container>
  )
}
