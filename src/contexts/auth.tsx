import React, { createContext, ReactNode, useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'

import { firebaseAuth, database } from './../services/firebase'
import { Alert } from 'react-native'
import { FirebaseError } from 'firebase/app'

type User = {
  id: string
  name: string
  email: string
  balance: number
}

type AuthContextProps = {
  user: User | null
  isLoading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const signIn = async (email: string, password: string) => {
    try {
      setIsLoading(true)
      const { user: userLogin } = await signInWithEmailAndPassword(firebaseAuth, email, password)
      const docRef = doc(database, 'users', userLogin.uid)
      const docSnap = await getDoc(docRef)

      if (!docSnap.exists()) {
        Alert.alert('Opssss', 'Usuário não encontrado')
      }

      const { name: userName, email: userEmail, balance } = docSnap.data() as User

      const userData = {
        id: userLogin.uid,
        name: userName,
        email: userEmail,
        balance
      }

      setUser(userData)
      setIsLoading(false)
    } catch (err) {
      const error = err as FirebaseError

      if (
        error.code === 'auth/user-not-found' ||
        error.code === 'auth/wrong-password' ||
        error.code === 'auth/invalid-email') {
        Alert.alert('Opssss', 'E-mail ou senha inválidos, tente novamente')
      }
    } finally {
      setIsLoading(false)
    }
  }

  const signOut = async () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{
      user,
      isLoading,
      signIn,
      signOut
    }}>
      { children }
    </AuthContext.Provider>
  )
}
