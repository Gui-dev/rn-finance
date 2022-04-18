import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

import { COLORS, FONTS } from '../../themes'

export const Container = styled.SafeAreaView`
  flex: 1;
`

export const Content = styled(LinearGradient)`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-top: 80px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`

export const InputValue = styled.TextInput.attrs({
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
