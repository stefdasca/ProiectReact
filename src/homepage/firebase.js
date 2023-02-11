import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCO0wzn8XzEmfDjLajMYgXRcdZsMPDDQfs",
  authDomain: "sdtutoring-f004d.firebaseapp.com",
  projectId: "sdtutoring-f004d",
  storageBucket: "sdtutoring-f004d.appspot.com",
  messagingSenderId: "826574427239",
  appId: "1:826574427239:web:376a7a3a20445dbaf0f0c2"
};

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export {auth}