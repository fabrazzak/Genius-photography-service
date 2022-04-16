// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5ABsxO_sUP7ClfoYc-G6DP1QrUtpbaTE",
    authDomain: "genius-photography-service.firebaseapp.com",
    projectId: "genius-photography-service",
    storageBucket: "genius-photography-service.appspot.com",
    messagingSenderId: "247965554726",
    appId: "1:247965554726:web:48affc69811144e5d0aee7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;