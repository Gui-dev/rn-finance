import React, { useCallback, useEffect, useState } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'

import { database } from './../../services/firebase'
import { useAuth } from '../../hooks/useAuth'
import { coinBRL } from './../../utils/coinBRL'

import { Background } from '../../components/Background'
import { ButtonHamburger } from '../../components/ButtonHamburger'
import { Historic } from '../../components/Historic'
import { Container, UserInfo, Name, Balance, Content, Title, ListMoves } from './style'

export type DataProps = {
  id: string
  type: string
  value: number
  created_at?: string
}

export const Home = () => {
  const { user } = useAuth()
  const [balance, setBalance] = useState('0')
  const [data, setData] = useState<DataProps[]>([])
  const [loading, setLoading] = useState(true)

  useFocusEffect(
    useCallback(() => {
      const getBalance = async () => {
        try {
          const userRef = doc(database, 'users', String(user?.id))
          const docSnap = await getDoc(userRef)

          if (docSnap.exists()) {
            const user = docSnap.data()
            const balanceFormatted = coinBRL(user.balance)
            setBalance(balanceFormatted)
          }
        } catch (error) {
          console.log('BALANCE', error)
        } finally {
          setLoading(false)
        }
      }
      getBalance()
    }, [user?.id])
  )

  useFocusEffect(
    useCallback(() => {
      const loadMovements = async () => {
        try {
          const movementsRef = collection(database, 'movements')
          const queryResponse = query(movementsRef, where('id', '==', user?.id))
          const response = await getDocs(queryResponse)
          setData([])
          response.forEach(doc => {
            if (doc.exists()) {
              const movements = doc.data()
              const eachMovements = {
                id: doc.id,
                type: movements.type,
                value: movements.value
              }
              setData(prevData => [...prevData, eachMovements].reverse())
            }
          })
        } catch (error) {
          console.log('MOVES: ', error)
        } finally {
          setLoading(false)
        }
      }

      loadMovements()
    }, [user?.id])
  )

  return (
    <>
    {
      loading
        ? (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' }}>
          <ActivityIndicator size="large" color="#FFF"/>
        </View>
          )
        : (
        <Background>
          <Container>
            <ButtonHamburger />

            <UserInfo>
              <Name>{user?.name}</Name>
              <Balance>Saldo: {balance}</Balance>
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
    </>
  )
}
