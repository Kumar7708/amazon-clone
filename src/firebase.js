// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB4m8OHO39wTp_e7kyTa9DlhT2TzCin7mI",
  authDomain: "clone-bbe90.firebaseapp.com",
  projectId: "clone-bbe90",
  storageBucket: "clone-bbe90.appspot.com",
  messagingSenderId: "367362474199",
  appId: "1:367362474199:web:7a72f228991d7696373092",
  measurementId: "G-50HWGV7H10",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
