import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { Platform } from 'react-native'

import { AuthRoutesStackParamList } from '../../routes/auth.routes'
import logoImg from './../../assets/logo/Logo.png'
import { Background } from './../../components/Background'
import { Container, Logo, InputArea, Input, SubmitButton, SubmitButtonText, Link, LinkText } from './style'

type SignInScreenProps = NativeStackNavigationProp<AuthRoutesStackParamList>

export const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { navigate } = useNavigation<SignInScreenProps>()

  const handleNavigationSignUp = () => {
    navigate('SignUp')
  }

  return (
    <Background>
      <Container
        behavior={ Platform.OS === 'ios' ? 'padding' : undefined }
      >
        <Logo source={ logoImg } />

        <InputArea>
          <Input
            placeholder="E-mail"
            autoCapitalize="none"
            autoCorrect={ false }
            value={email}
            onChangeText={setEmail}
          />
        </InputArea>

        <InputArea>
          <Input
            placeholder="Senha"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </InputArea>

        <SubmitButton>
          <SubmitButtonText>Entrar</SubmitButtonText>
        </SubmitButton>

        <Link onPress={ handleNavigationSignUp }>
          <LinkText>Criar uma conta!</LinkText>
        </Link>
      </Container>
    </Background>
  )
}
