// Import the functions you need from the SDKs you need
import {getApp,getApps,initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1w-R4d3hRA13zpbqjirtIPk_huUTHl_4",
  authDomain: "chatgpt-v2-5ce7e.firebaseapp.com",
  projectId: "chatgpt-v2-5ce7e",
  storageBucket: "chatgpt-v2-5ce7e.appspot.com",
  messagingSenderId: "845481599673",
  appId: "1:845481599673:web:864d28e0d11e13f00b7168"
};

// Initialize Firebase
const app = getApps().length? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export{db};