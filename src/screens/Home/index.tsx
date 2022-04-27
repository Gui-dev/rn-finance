import React, { useCallback, useState } from 'react'
import { ActivityIndicator, Alert, View } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { collection, doc, deleteDoc, getDoc, getDocs, limit, query, updateDoc, where } from 'firebase/firestore'

import { database } from './../../services/firebase'
import { useAuth } from '../../hooks/useAuth'
import { coinBRL } from './../../utils/coinBRL'

import { Background } from '../../components/Background'
import { ButtonHamburger } from '../../components/ButtonHamburger'
import { Historic } from '../../components/Historic'
import { Container, UserInfo, Name, Balance, Content, Title, ListMoves } from './style'

import { HistoricItemProps } from './../../components/Historic'
import { UserProps } from './../../screens/Register'

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

  const getBalance = useCallback(async () => {
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
  }, [user?.id])

  const loadMovements = useCallback(async () => {
    try {
      const movementsRef = collection(database, 'movements')
      const queryResponse = query(
        movementsRef,
        where('id', '==', user?.id),
        limit(10)
      )
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
          setData(prevData => [eachMovements, ...prevData].reverse())
        }
      })
    } catch (error) {
      console.log('MOVES: ', error)
    } finally {
      setLoading(false)
    }
  }, [user?.id])

  useFocusEffect(
    useCallback(() => {
      getBalance()
      return () => {
        setBalance('') // This worked for me
      }
    }, [getBalance])
  )

  useFocusEffect(
    useCallback(() => {
      loadMovements()
      return () => {
        setData([]) // This worked for me
      }
    }, [loadMovements])
  )

  const handleRemoveHistoric = (data: HistoricItemProps) => {
    Alert.alert('Atenção', 'Você deseja excluir ?', [
      {
        text: 'Cancelar',
        style: 'cancel'
      },
      {
        text: 'Excluir',
        onPress: () => handleRemoveItem(data)
      }
    ])
  }

  const handleRemoveItem = useCallback(async (data : HistoricItemProps) => {
    try {
      setLoading(true)
      const { id, type, value } = data
      await deleteDoc(doc(database, 'movements', id))

      const usersCollection = collection(database, 'users')
      const userRef = doc(usersCollection, user?.id)
      const userUpdated = await getDoc(userRef)
      const userResponse = userUpdated.data() as UserProps

      await updateDoc(userRef, {
        balance: type === 'recipe' ? userResponse.balance -= Number(value) : userResponse.balance += Number(value)
      })
      loadMovements()
    } catch (error) {
      Alert.alert('Opsssss', 'Erro ao tentar remover esse item')
    } finally {
      setLoading(false)
    }
  }, [user?.id])

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
                    <Historic
                      key={String(item.id)}
                      data={item}
                      onHandleRemoveHistoric={handleRemoveHistoric}
                    />
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
