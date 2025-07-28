import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBCpRAAawb6j1gah8r4w6A1n8GHL0W1ius",
    authDomain: "jorgejourney-67888.firebaseapp.com",
    projectId: "jorgejourney-67888",
    storageBucket: "jorgejourney-67888.appspot.com",
    messagingSenderId: "46762524229",
    appId: "1:46762524229:web:50d4a21a23b6c7e5ecad2c",
    measurementId: "G-4FPD1Y1TV7"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 