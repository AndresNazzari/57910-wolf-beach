// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
}
console.log(firebaseConfig)
// const firebaseConfig = {
//   apiKey: 'AIzaSyB_it7gnxnby7KQWEoRvjD_KuCf9O_QYKs',
//   authDomain: 'wolf-beach.firebaseapp.com',
//   projectId: 'wolf-beach',
//   storageBucket: 'wolf-beach.appspot.com',
//   messagingSenderId: '812959294348',
//   appId: '1:812959294348:web:b34f84b84054b5b1f02ca9',
// }

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Conectarnos a la base de datos
export const db = getFirestore(app)
