import styled from 'styled-components/native'
import { COLORS, FONTS } from './../../themes'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  padding: 0 20px;
`

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})`
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
  align-self: stretch;
  align-items: center;
  justify-content: center;
  height: 45px;
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
