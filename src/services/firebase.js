
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
// We only want to use Firebase Auth here
import "firebase/auth";

// Your app's Firebase configuration
var config = {
    apiKey: "AIzaSyChNHBcTDjIB9ZpkYjpF2Q4cjTwRpDnpyM",
    authDomain: "react-hooks-store.firebaseapp.com",
    databaseURL: "https://react-hooks-store.firebaseio.com",
    projectId: "react-hooks-store",
    storageBucket: "react-hooks-store.appspot.com",
    messagingSenderId: "393511090478",
    appId: "1:393511090478:web:7fe1f11094d14b5a5de2bf"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase
