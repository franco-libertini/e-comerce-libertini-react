
import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDKnX80Wc19LG8_XUq22vwEuCbwNjzuJpE",
  authDomain: "e-commerce-libertini.firebaseapp.com",
  projectId: "e-commerce-libertini",
  storageBucket: "e-commerce-libertini.appspot.com",
  messagingSenderId: "477229853704",
  appId: "1:477229853704:web:b1547de665c85ba9ddb5bd"
};


const app = initializeApp(firebaseConfig);

export const datab =getFirestore(app);