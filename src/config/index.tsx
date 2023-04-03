import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithRedirect, getRedirectResult } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiKh0ngWdukZumHsgSt3PyFK29qjSQuXY",
  authDomain: "groove-share.firebaseapp.com",
  projectId: "groove-share",
  storageBucket: "groove-share.appspot.com",
  messagingSenderId: "113992713737",
  appId: "1:113992713737:web:ba6fe3bdddce87b56e1ad8"
};
const provider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {
  app, provider, auth, signInWithRedirect, getRedirectResult
}