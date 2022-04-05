import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCFrcB0DvCSHwtirpDkyAATUKGIBtFjBxg",
  authDomain: "fir-crud-react-f62a7.firebaseapp.com",
  projectId: "fir-crud-react-f62a7",
  storageBucket: "fir-crud-react-f62a7.appspot.com",
  messagingSenderId: "604947030960",
  appId: "1:604947030960:web:0f68edaca6253b624bec75",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
