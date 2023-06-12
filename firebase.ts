import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyC-XGY3cZOj5pvFIXAqlHLz6fSU5kOLekw",
  authDomain: "nflx-clone-8efb2.firebaseapp.com",
  projectId: "nflx-clone-8efb2",
  storageBucket: "nflx-clone-8efb2.appspot.com",
  messagingSenderId: "610637749447",
  appId: "1:610637749447:web:bc982035a24a9e84c5b2e2"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth()
export const db = getFirestore()