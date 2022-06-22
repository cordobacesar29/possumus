// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJPAiNbpTQexfm3lfvuyVaWTikG7Y2pdU",
  authDomain: "atygg-4c1f0.firebaseapp.com",
  databaseURL: "https://atygg-4c1f0-default-rtdb.firebaseio.com",
  projectId: "atygg-4c1f0",
  storageBucket: "atygg-4c1f0.appspot.com",
  messagingSenderId: "941570010600",
  appId: "1:941570010600:web:8a01a319b21653c200885d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);