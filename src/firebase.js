import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCm0n2CVLbWkLcH4EOC5nk33PSVbS6gHfY",
    authDomain: "challenge-b7007.firebaseapp.com",
    databaseURL: "https://challenge-b7007.firebaseio.com",
    projectId: "challenge-b7007",
    storageBucket: "challenge-b7007.appspot.com",
    messagingSenderId: "958075644826",
    appId: "1:958075644826:web:d3f0c5b4d4486760676823",
    measurementId: "G-ESLV5H7WW4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  const fDatabase = firebase.database(); //para salvar o username na conta autenticada no firebase - EM TESTE
                                        /* https://firebase.google.com/docs/database/web/read-and-write */
  
  export { db, auth, fDatabase };