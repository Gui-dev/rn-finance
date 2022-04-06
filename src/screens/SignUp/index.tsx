import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Background } from './../../components/Background'
import { AuthRoutesStackParamList } from '../../routes/auth.routes'
import { Container, Content, InputArea, Input, SubmitButton, SubmitButtonText, Link, LinkText } from './style'

type SignUpScreenProps = NativeStackNavigationProp<AuthRoutesStackParamList>

export const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { navigate } = useNavigation<SignUpScreenProps>()

  const handleNavigationSignIn = () => {
    navigate('SignIn')
  }

  return (
    <Background>
      <Container>
        <Content>

          <InputArea>
            <Input
              placeholder="Nome"
              autoCapitalize="none"
              autoCorrect={ false }
              value={name}
              onChangeText={setName}
            />
          </InputArea>

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
            <SubmitButtonText>Cadastrar</SubmitButtonText>
          </SubmitButton>

          <Link onPress={handleNavigationSignIn}>
            <LinkText>Já tem uma conta? Faça Login</LinkText>
          </Link>
        </Content>
      </Container>
    </Background>
  )
}
