// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blogapp-415315.firebaseapp.com",
  projectId: "blogapp-415315",
  storageBucket: "blogapp-415315.appspot.com",
  messagingSenderId: "498798566905",
  appId: "1:498798566905:web:33b238cb48757d1361f128"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);