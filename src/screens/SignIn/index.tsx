import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { Alert, ActivityIndicator, Platform } from 'react-native'

import { useAuth } from '../../hooks/useAuth'

import { AuthRoutesStackParamList } from '../../routes/auth.routes'
import logoImg from './../../assets/logo/Logo.png'
import { Background } from './../../components/Background'
import { Container, Logo, InputArea, Input, SubmitButton, SubmitButtonText, Link, LinkText } from './style'

type SignInScreenProps = NativeStackNavigationProp<AuthRoutesStackParamList>

export const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { navigate } = useNavigation<SignInScreenProps>()
  const { isLoading, signIn } = useAuth()

  const handleNavigationSignUp = () => {
    navigate('SignUp')
  }

  const handleSignIn = async () => {
    if (email === '' || password === '') {
      Alert.alert('Opsssss', 'Todos os campos devem ser preenchidos')
      return
    }
    await signIn(email, password)
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
            keyboardType="email-address"
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

        <SubmitButton onPress={ handleSignIn }>
          { isLoading
            ? <ActivityIndicator size={'large'} color="#FFF"/>
            : <SubmitButtonText>Entrar</SubmitButtonText>
          }
        </SubmitButton>

        <Link onPress={ handleNavigationSignUp }>
          <LinkText> Criar uma conta!</LinkText>
        </Link>
      </Container>
    </Background>
  )
}
