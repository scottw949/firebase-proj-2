import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAmqrWUh2ZQ1uyCPZn87dLoauDsYzgd41Q",
    authDomain: "fir-proj-2.firebaseapp.com",
    projectId: "fir-proj-2",
    storageBucket: "fir-proj-2.appspot.com",
    messagingSenderId: "187197016407",
    appId: "1:187197016407:web:3a782571a4f35802a95612"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;