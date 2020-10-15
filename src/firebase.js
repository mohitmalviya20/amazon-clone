import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDQL7XVuQ6zbTrQIv-_3cSQUXboA-rxetY",
    authDomain: "clone-7c3d6.firebaseapp.com",
    databaseURL: "https://clone-7c3d6.firebaseio.com",
    projectId: "clone-7c3d6",
    storageBucket: "clone-7c3d6.appspot.com",
    messagingSenderId: "757024450879",
    appId: "1:757024450879:web:4cf5ec1fb3ad062a9e8b8a"  
})
const auth= firebase.auth();
export {auth}