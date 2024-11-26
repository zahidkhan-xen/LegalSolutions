// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh4oxNYy43dFikcdIf2shbaCfGnkYK1Y0",
  authDomain: "ehsaan-leagalai.firebaseapp.com",
  projectId: "ehsaan-leagalai",
  storageBucket: "ehsaan-leagalai.firebasestorage.app",
  messagingSenderId: "6676856800",
  appId: "1:6676856800:web:1f2bbaf24e6617ba0ab585",
  measurementId: "G-4FHJ19HQ2Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);