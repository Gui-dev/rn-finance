import React from 'react'

import { COLORS, FONTS } from '../../themes'
import { Container, PickerItem } from './style'

type PickerProps = {
  type: string
  onSetType: React.Dispatch<React.SetStateAction<any | undefined>>
}

export const Picker = ({ type, onSetType }: PickerProps) => {
  return (
    <Container
    selectedValue={type}
    onValueChange={(itemValue: any) =>
      onSetType(itemValue)
    }
  >
    <PickerItem
      label="Selecione um tipo"
      enabled={ false }
      fontFamily={FONTS.NORMAL}
      color={COLORS.RED}
    />
    <PickerItem
      label="Receita"
      value="recipe"
      fontFamily={FONTS.NORMAL}
      color={COLORS.SECONDARY}
    />
    <PickerItem
      label="Despesa"
      value="expense"
      fontFamily={FONTS.NORMAL}
      color={COLORS.SECONDARY}
    />

  </Container>
  )
}
