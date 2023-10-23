import app from 'firebase/app'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAuV5pxGwEcoR9PzQT6sd38qHkR1ZLB-SA",
    authDomain: "demo04-clase15.firebaseapp.com",
    projectId: "demo04-clase15",
    storageBucket: "demo04-clase15.appspot.com",
    messagingSenderId: "36352136342",
    appId: "1:36352136342:web:07b4f54f6649c13e63deb7"
  };

  app.initializeApp(firebaseConfig)

  export const auth = firebase.auth()
  export const storage = app.storage()
  export const db = app.firestore()