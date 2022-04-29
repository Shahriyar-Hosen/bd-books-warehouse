// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1un23dau3e1n8wDEhPcdw3gAWul486r0",
  authDomain: "bd-books-warehouse.firebaseapp.com",
  projectId: "bd-books-warehouse",
  storageBucket: "bd-books-warehouse.appspot.com",
  messagingSenderId: "448041748072",
  appId: "1:448041748072:web:c325f5363b7d021ba95ddd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
