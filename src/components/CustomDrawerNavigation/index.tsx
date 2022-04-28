import React from 'react'
import { DrawerContent } from '@react-navigation/drawer'
import { AntDesign } from '@expo/vector-icons'

import logoImg from './../../assets/logo/Logo.png'
import { Container, Header, Image, Title, Username, ItemList, Item } from './style'
import { COLORS } from '../../themes'
import { useAuth } from '../../hooks/useAuth'

type CustomDrawerNavigationProps = {
  props: typeof DrawerContent
}

export const CustomDrawerNavigation = (props: CustomDrawerNavigationProps) => {
  const { signOut, user } = useAuth()

  return (
    <Container {...props}>
      <Header>
        <Image source={logoImg}/>
        <Title>Bem vindo</Title>
        <Username>{user?.name}</Username>
      </Header>

      {/* @ts-ignore */}
      <ItemList {...props}/>

      <Item
        {...props}
        label="Sair do app"
        icon={({ color, size }) => <AntDesign name="logout" size={size} color={color}/>}
        activeTintColor={COLORS.WHITE}
        inactiveTintColor={COLORS.WHITE}
        activeBackgroundColor={COLORS.RED}
        inactiveBackgroundColor={COLORS.RED}
        onPress={ () => signOut()}
      />
    </Container>
  )
}
