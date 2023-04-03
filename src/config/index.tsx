// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiKh0ngWdukZumHsgSt3PyFK29qjSQuXY",
  authDomain: "groove-share.firebaseapp.com",
  projectId: "groove-share",
  storageBucket: "groove-share.appspot.com",
  messagingSenderId: "113992713737",
  appId: "1:113992713737:web:ba6fe3bdddce87b56e1ad8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;