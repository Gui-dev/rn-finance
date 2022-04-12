import styled from 'styled-components/native'
import { COLORS, FONTS } from '../../themes'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Name = styled.Text`
  font-size: 28px;
  font-family: ${FONTS.BOLD};
  color: ${COLORS.WHITE};
  margin-bottom: 28px;
`

export const ButtonGroup = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const NewRegister = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  height: 45px;
  width: 90%;
  background-color: ${COLORS.SECONDARY};
  border-radius: 5px;
`

export const NewRegisterText = styled.Text`
  font-size: 18px;
  font-family: ${FONTS.BOLD};
  color: ${COLORS.WHITE};
`

export const LogoutButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 90%;
  background-color: ${COLORS.RED};
  border-radius: 5px;
`

export const LogoutButtonText = styled.Text`
  font-size: 18px;
  font-family: ${FONTS.BOLD};
  color: ${COLORS.WHITE};
`
