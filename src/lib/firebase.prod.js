import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'
//import { seedDatabase } from '../seed';

const config={
    apiKey: "AIzaSyC3yX8XalpfYXsKnaqp6C5YwVSv_Sj-fA0",

    authDomain: "netflix-clone-a9a05.firebaseapp.com",
  
    projectId: "netflix-clone-a9a05",
  
    storageBucket: "netflix-clone-a9a05.appspot.com",
  
    messagingSenderId: "775439136953",
  
    appId: "1:775439136953:web:b69fb7fc2b6120dc880368"
};


const Firebase = firebase.initializeApp(config);

//seedDatabase(Firebase);

export {Firebase};