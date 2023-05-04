// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAukgjSmOCeX9_quid2UGDcGqOLtyL64RI",
    authDomain: "foodian-chef-and-food-client.firebaseapp.com",
    projectId: "foodian-chef-and-food-client",
    storageBucket: "foodian-chef-and-food-client.appspot.com",
    messagingSenderId: "1061223080899",
    appId: "1:1061223080899:web:67f41cb4a207a973d05376"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app