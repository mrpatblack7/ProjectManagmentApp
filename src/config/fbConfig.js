import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDi0AiiVTFUTzaxR6aMuI6Yfb29QA1uVEA",
    authDomain: "pro-man-pra.firebaseapp.com",
    databaseURL: "https://pro-man-pra.firebaseio.com",
    projectId: "pro-man-pra",
    storageBucket: "",
    messagingSenderId: "715286559495",
    appId: "1:715286559495:web:b08867f9974cb90d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;