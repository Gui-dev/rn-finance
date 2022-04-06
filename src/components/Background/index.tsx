import React, { ReactNode } from 'react'

import { Container } from './style'

type BackgroundProps = {
  children: ReactNode
}

export const Background = ({ children }: BackgroundProps) => {
  return (
    <Container>
      { children }
    </Container>
  )
}
