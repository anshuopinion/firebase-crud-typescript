// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWtWgOnJvfdK1hhL2FvO01tfCLaJNR4cg",
  authDomain: "fir-crud-typescript.firebaseapp.com",
  databaseURL:
    "https://fir-crud-typescript-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-crud-typescript",
  storageBucket: "fir-crud-typescript.appspot.com",
  messagingSenderId: "548949882488",
  appId: "1:548949882488:web:659643de006538b48a1f8d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
