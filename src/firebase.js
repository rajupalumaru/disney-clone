import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBM1LexrFXQqXfH-n8Rfh4HYxF6E14lp3s",
    authDomain: "disney-clone-52645.firebaseapp.com",
    projectId: "disney-clone-52645",
    storageBucket: "disney-clone-52645.appspot.com",
    messagingSenderId: "400551721693",
    appId: "1:400551721693:web:60e08a37d6ce3dac05b934",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;