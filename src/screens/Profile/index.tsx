import React from 'react'

import { useAuth } from '../../hooks/useAuth'
import { Background } from '../../components/Background'
import { Container, Name, ButtonGroup, NewRegister, NewRegisterText, LogoutButton, LogoutButtonText } from './style'

export const Profile = () => {
  const { signOut, user } = useAuth()

  const handleLogout = () => {
    signOut()
  }

  return (
    <Background>
      <Container>
        <Name>{ user?.name }</Name>

        <ButtonGroup>
          <NewRegister>
            <NewRegisterText>Registrar gastos</NewRegisterText>
          </NewRegister>

          <LogoutButton onPress={ handleLogout }>
            <LogoutButtonText>Sair do app</LogoutButtonText>
          </LogoutButton>
        </ButtonGroup>
      </Container>
    </Background>
  )
}
