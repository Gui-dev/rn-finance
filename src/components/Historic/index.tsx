import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { coinBRL } from '../../utils/coinBRL'

import { COLORS } from '../../themes'
import { Container, Type, IconView, TypeText, ValueText } from './style'

export type HistoricItemProps = {
  id: string,
  type: string
  value: number
}

type HistoricProps = {
  data: HistoricItemProps
  onHandleRemoveHistoric: (data: HistoricItemProps) => void
}

export const Historic = ({ data, onHandleRemoveHistoric }: HistoricProps) => {
  const { type, value } = data

  const valueFormatted = coinBRL(value)

  const handleRemoveHistoric = () => {
    onHandleRemoveHistoric(data)
  }

  return (
    <TouchableOpacity onLongPress={handleRemoveHistoric}>
      <Container>
          <Type>
            <IconView>
              <Feather
                name={ type === 'expense' ? 'arrow-down' : 'arrow-up'}
                size={20}
                color={type === 'expense' ? COLORS.RED : COLORS.SECONDARY}/>
              <TypeText type={type}>{type}</TypeText>
            </IconView>
          </Type>

          <ValueText>{valueFormatted}</ValueText>
      </Container>
    </TouchableOpacity>
  )
}
