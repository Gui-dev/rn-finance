import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// import {
//   FIREBASE_API_KEY,
//   FIREBASE_AUTH_DOMAIN,
//   FIREBASE_PROJECT_ID,
//   FIREBASE_STORAGE_BUCKET,
//   FIREBASE_APP_ID,
//   FIREBASE_MESSAGING_SENDER_ID,
//   FIREBASE_MEASUREMENT_ID
// } from 'react-native-dotenv'

const firebaseConfig = {
  apiKey: 'AIzaSyCGxZ_2whs_OrTOnwDK5XTwET5JoPem7To',
  authDomain: 'finance-32f77.firebaseapp.com',
  projectId: 'finance-32f77',
  storageBucket: 'finance-32f77.appspot.com',
  messagingSenderId: '218463812867',
  appId: '1:218463812867:web:4114383bf7cd203ee1bd36',
  measurementId: 'G-LTJPR6LFK7'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const database = getFirestore(app)
export const firebaseAuth = getAuth(app)
