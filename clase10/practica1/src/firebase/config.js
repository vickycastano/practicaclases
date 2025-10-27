import app from "firebase/app"
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDNl3p-W-uHCwHA7qH8w02fM6SizetdMFA",
  authDomain: "demo01-89926.firebaseapp.com",
  projectId: "demo01-89926",
  storageBucket: "demo01-89926.firebasestorage.app",
  messagingSenderId: "136884206375",
  appId: "1:136884206375:web:03caf653d6d062b3f90702"
};

app.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const storage = app.storage()
export const db = app.firestore()