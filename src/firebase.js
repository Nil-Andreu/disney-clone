/**For using the firebase, we install firebase and firebase-tools with npm.
 * In this file we are going to have the configuration for the fireabse
 */

import firebase from "firebase"; //First we input the firebase

// Then we have the firebase configuration, which will give access to the actual db
/*const firebaseConfig1 = {
  apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
  authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
  projectId: "disneyplus-clone-a33d5",
  storageBucket: "disneyplus-clone-a33d5.appspot.com",
  messagingSenderId: "37918794208",
  appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
  measurementId: "G-DRVLJKWRWG",
};*/

const firebaseConfig2 = {
  apiKey: "AIzaSyAax-ZSPR7kREiBaTQBf2zPbZA8kFwF3JU",
  authDomain: "disney-clone-ecea1.firebaseapp.com",
  projectId: "disney-clone-ecea1",
  storageBucket: "disney-clone-ecea1.appspot.com",
  messagingSenderId: "759410757020",
  appId: "1:759410757020:web:a65575579a21c7781b0c59"
};
// In firebase configuration to write if true

const firebaseApp1 = firebase.initializeApp(firebaseConfig2); //Initializing the firebase app
//const firebaseApp2 = firebase.initializeApp(firebaseConfig2); //Initializing the firebase app

// We now define which things are gonig to be using
const db = firebaseApp1.firestore(); //The fireastore is the actual db
const auth = firebase.auth(); //The auth is to be able to log in or log out
const provider = new firebase.auth.GoogleAuthProvider(); //As we can have google auth (could use also facebook, instagram, ...)
const storage = firebaseApp1.storage();

export { auth, provider, storage };
export default db;
