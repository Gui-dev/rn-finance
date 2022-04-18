import React, { useState } from 'react'
import { Keyboard, KeyboardAvoidingView, Platform } from 'react-native'

import { COLORS } from '../../themes'
import { Picker } from './../../components/Picker'
import { Background } from '../../components/Background'
import { ButtonHamburger } from '../../components/ButtonHamburger'
import { Container, Content, InputValue, SubmitButton, SubmitButtonText } from './style'

export const Register = () => {
  const [value, setValue] = useState('')
  const [type, setType] = useState('')

  console.log(type)

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

            <SubmitButton>
              <SubmitButtonText>Registrar</SubmitButtonText>
            </SubmitButton>
          </Content>
        </Container>
      </KeyboardAvoidingView>
    </Background>
  )
}
