// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyACFNKhG3qQkjmH-VZUd6xV1PBOs_eQud4",
//   authDomain: "clone-e960b.firebaseapp.com",
//   projectId: "clone-e960b",
//   storageBucket: "clone-e960b.appspot.com",
//   messagingSenderId: "707628970705",
//   appId: "1:707628970705:web:6b8ec7e9260e5ea6ae0bf0",
//   measurementId: "G-YTXSQZVQEP",
// };
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8mQTmriSokA9V1AdkoLv0FcuR9PaJhVg",
  authDomain: "prembheemuni.firebaseapp.com",
  projectId: "prembheemuni",
  storageBucket: "prembheemuni.appspot.com",
  messagingSenderId: "677235603240",
  appId: "1:677235603240:web:d11abdc11636865875421d",
  measurementId: "G-RF7CZV7PNN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
