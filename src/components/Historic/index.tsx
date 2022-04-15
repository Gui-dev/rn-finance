import React from 'react'
import { Feather } from '@expo/vector-icons'

import { coinBRL } from '../../utils/coinBRL'

import { COLORS } from '../../themes'
import { Container, Type, IconView, TypeText, ValueText } from './style'

type HistoricProps = {
  data: {
    id: string,
    type: string
    value: number
  }
}

export const Historic = ({ data }: HistoricProps) => {
  const { type, value } = data

  const valueFormatted = coinBRL(value)

  return (
    <Container>
        <Type>
          <IconView>
            <Feather
              name={ type === 'despesa' ? 'arrow-down' : 'arrow-up'}
              size={20}
              color={type === 'despesa' ? COLORS.RED : COLORS.SECONDARY}/>
            <TypeText type={type}>{type}</TypeText>
          </IconView>
        </Type>

        <ValueText>{valueFormatted}</ValueText>
    </Container>
  )
}
