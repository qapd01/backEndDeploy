// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


/// ใส่ api ตรงนี้
const firebaseConfig = {
    apiKey: "AIzaSyBlpT9kuEff0XNUhgv03J25fqme7BGNKkU",
    authDomain: "auth-activities.firebaseapp.com",
    projectId: "auth-activities",
    storageBucket: "auth-activities.appspot.com",
    messagingSenderId: "691582738386",
    appId: "1:691582738386:web:6f84c5b142c287a609b20b",
    measurementId: "G-1FQQ617WXT"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export default app