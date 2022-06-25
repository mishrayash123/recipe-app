import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUhMFYZ30c6D7kzNbwO7atRc-p-iEziQY",
  authDomain: "recipe-app-160a3.firebaseapp.com",
  projectId: "recipe-app-160a3",
  storageBucket: "recipe-app-160a3.appspot.com",
  messagingSenderId: "119822664767",
  appId: "1:119822664767:web:920035e9a8e2242675248a",
  measurementId: "G-MGFRBLW4W2"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const auth = getAuth(app);

export {auth,db};