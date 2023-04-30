// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPWGuZAUcd13dGe_VAjzrFbmI_HGBhbKQ",
  authDomain: "coachwise00.firebaseapp.com",
  projectId: "coachwise00",
  storageBucket: "coachwise00.appspot.com",
  messagingSenderId: "761141608829",
  appId: "1:761141608829:web:a39aba57413afa1a4fcc14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);