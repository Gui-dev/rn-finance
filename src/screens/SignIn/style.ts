import styled from 'styled-components/native'
import { COLORS, FONTS } from './../../themes'

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`

export const Logo = styled.Image`
  height: 52px;
  width: 52px;
  margin-bottom: 15px;
`

export const InputArea = styled.View`
  flex-direction: row;
`

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999'
})`
  font-size: 18px;
  font-family: ${FONTS.NORMAL};
  color: ${COLORS.WHITE};
  height: 45px;
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  background-color: rgba(0, 0, 0, .20);
  border-radius: 8px;
`

export const SubmitButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 100%;
  margin-bottom: 15px;
  background-color: ${COLORS.SECONDARY};
  border-radius: 8px;
`

export const SubmitButtonText = styled.Text`
  font-size: 20px;
  font-family: ${FONTS.BOLD};
  color: ${COLORS.WHITE};
`

export const Link = styled.TouchableOpacity``

export const LinkText = styled.Text`
  font-size: 20px;
  font-family: ${FONTS.BOLD};
  color: ${COLORS.SECONDARY};
  margin-top: 15px;
  margin-bottom: 15px;
`
