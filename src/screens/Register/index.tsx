import React, { useState } from 'react'
import { Alert, Keyboard, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native'
import { collection, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { useNavigation } from '@react-navigation/native'
import uuid from 'react-native-uuid'
import { DrawerNavigationProp } from '@react-navigation/drawer'

import { firebaseAuth, database } from './../../services/firebase'
import { AppRoutesParamList } from './../../routes/app.routes'

import { COLORS } from '../../themes'
import { Picker } from './../../components/Picker'
import { Background } from '../../components/Background'
import { ButtonHamburger } from '../../components/ButtonHamburger'
import { Container, Content, InputValue, SubmitButton, SubmitButtonText } from './style'

type RegisterScreenNavigationProps = DrawerNavigationProp<AppRoutesParamList>

export type UserProps = {
  name: string
  email: string
  balance: number
}

export const Register = () => {
  const [value, setValue] = useState('')
  const [type, setType] = useState('')
  const [loading, setLoading] = useState(false)
  const { navigate } = useNavigation<RegisterScreenNavigationProps>()

  const handleSubmit = async () => {
    try {
      setLoading(true)
      const uid = firebaseAuth.currentUser?.uid

      if (value === '' || type === '') {
        Alert.alert('Opssss', 'Preencha todos os campos')
        return
      }

      const docCollection = collection(database, 'movements')
      const docRef = doc(docCollection, String(uuid.v4()))

      await setDoc(docRef, {
        id: uid,
        type,
        value,
        created_at: new Date()
      })

      const usersCollection = collection(database, 'users')
      const userRef = doc(usersCollection, uid)
      const userUpdated = await getDoc(userRef)
      const user = userUpdated.data() as UserProps

      await updateDoc(userRef, {
        balance: type === 'recipe' ? user.balance += Number(value) : user.balance -= Number(value)
      })

      setValue('')
      setType('')
      navigate('Home')
    } catch {
      Alert.alert('Opssss', 'Erro ao atualizar movimentações')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Background>
      <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={ Platform.OS === 'ios' ? 'padding' : undefined }
      >
        <Container>
          <ButtonHamburger />
          <Content
            colors={[COLORS.GRAY90, COLORS.BLACK60]}
            start={{ x: 0.99, y: 0.7 }}
            end={{ x: 0.95, y: 0.95 }}
          >
            <InputValue
              placeholder="Digite o valor"
              keyboardType="number-pad"
              returnKeyType="next"
              onSubmitEditing={() => Keyboard.dismiss()}
              value={value}
              onChangeText={setValue}
            />

            <Picker type={type} onSetType={setType} />

            <SubmitButton onPress={handleSubmit}>
              {
                loading
                  ? <ActivityIndicator size="large" color={COLORS.WHITE}/>
                  : <SubmitButtonText>Registrar</SubmitButtonText>
              }
            </SubmitButton>
          </Content>
        </Container>
      </KeyboardAvoidingView>
    </Background>
  )
}
