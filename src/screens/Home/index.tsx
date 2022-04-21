import React, { useState } from 'react'

import { useAuth } from '../../hooks/useAuth'
import { Background } from '../../components/Background'
import { ButtonHamburger } from '../../components/ButtonHamburger'
import { Historic } from '../../components/Historic'
import { Container, UserInfo, Name, Balance, Content, Title, ListMoves } from './style'

export type DataProps = {
  id: string
  type: string
  value: number
}

export const Home = () => {
  const { user } = useAuth()
  const [data, setData] = useState<DataProps[]>([
    { id: '1', type: 'receita', value: 1200 },
    { id: '2', type: 'despesa', value: 200 },
    { id: '3', type: 'receita', value: 800 },
    { id: '4', type: 'despesa', value: 500 },
    { id: '5', type: 'despesa', value: 500 },
    { id: '6', type: 'despesa', value: 500 },
    { id: '7', type: 'despesa', value: 500 },
    { id: '8', type: 'despesa', value: 500 }
  ])

  return (
    <Background>
      <Container>
        <ButtonHamburger />

        <UserInfo>
          <Name>{user?.name}</Name>
          <Balance>Saldo: R${user?.balance}</Balance>
        </UserInfo>

        <Content>
          <Title>Últimas movimentações</Title>

          <ListMoves
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <Historic key={String(item.id)} data={item}/>
              )
            }}
          />
        </Content>
      </Container>
    </Background>
  )
}
