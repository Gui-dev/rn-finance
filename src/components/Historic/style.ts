import styled from 'styled-components/native'
import { COLORS, FONTS } from '../../themes'

type TypeTextProps = {
  type: string
}

export const Container = styled.View`
  margin-bottom: 10px;
  padding: 10px;
  background-color: ${COLORS.BLACK70};
  box-shadow: 2px 2px rgba(0, 0, 0, .40);
`

export const Type = styled.View`
  flex-direction: row;
`

export const IconView = styled.View`
  flex-grow: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`

export const TypeText = styled.Text<TypeTextProps>`
  font-size: 16px;
  font-family: ${FONTS.NORMAL};
  color: ${({ type }) => type === 'despesa' ? COLORS.RED : COLORS.SECONDARY};
`

export const ValueText = styled.Text`
  font-size: 22px;
  font-family: ${FONTS.BOLD};
  color: ${COLORS.WHITE};
`
