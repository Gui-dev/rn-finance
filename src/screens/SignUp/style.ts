import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

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
  color: #FFF;
  height: 45px;
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  background-color: rgba(0, 0, 0, .20);
  border-radius: 8px;
`

export const SubmitButton = styled(RectButton)`
  align-self: stretch;
  align-items: center;
  justify-content: center;
  height: 45px;
  margin-bottom: 15px;
  background-color: #00B94A;
  border-radius: 8px;
`

export const SubmitButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #FFF;
`

export const Link = styled.TouchableOpacity``

export const LinkText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #00B94A;
  margin-top: 15px;
  margin-bottom: 15px;
`
