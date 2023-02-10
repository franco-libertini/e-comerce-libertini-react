
import { initializeApp } from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyATVffESuVncg2YwjV0CWOeegkRZvOfd3Q",
  authDomain: "base-de-datos-libertini.firebaseapp.com",
  projectId: "base-de-datos-libertini",
  storageBucket: "base-de-datos-libertini.appspot.com",
  messagingSenderId: "881238696666",
  appId: "1:881238696666:web:787961e495bc0fa8cafbe3"
};

const app = initializeApp(firebaseConfig);

export const db =getFirestore(app);