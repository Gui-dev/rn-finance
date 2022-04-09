import React, { useState } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { collection, doc, setDoc } from 'firebase/firestore'
import { FirebaseError } from 'firebase/app'

import { firebaseAuth, database } from './../../services/firebase'

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

  const handleSubmit = async () => {
    try {
      if (name === '' || email === '' || password === '') {
        Alert.alert('Opsssss', 'Todos os campos devem ser preenchidos')
        return
      }

      const { user } = await createUserWithEmailAndPassword(firebaseAuth, email, password)
      const newUser = {
        name,
        email,
        balance: 0
      }

      const userRef = collection(database, 'users')
      await setDoc(doc(userRef, user.uid), newUser)
      setName('')
      setEmail('')
      setPassword('')
      navigate('SignIn')
    } catch (err) {
      const error = err as FirebaseError
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('Opsssss', 'Esse usuário já existe na nossa base de dados')
      }
    }
  }

  return (
    <Background>
      <Container>
        <Content>

          <InputArea>
            <Input
              placeholder="Nome"
              autoCapitalize="words"
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

          <SubmitButton onPress={ handleSubmit }>
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
