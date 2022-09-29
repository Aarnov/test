// firebase config key setup

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// web app's firebase config

const firebaseConfig={
    apiKey: "AIzaSyBOMEkJA2QcXf5kgtRTXo3ig512g8vZydg",
  authDomain: "test-95824.firebaseapp.com",
  projectId: "test-95824",
  storageBucket: "test-95824.appspot.com",
  messagingSenderId: "146345493494",
  appId: "1:146345493494:web:d3e337cf1b12d814a63dd7"
}

if(!firebase.app.length){
    firebase.initializeApp(firebaseConfig);
}

export{firebase};

