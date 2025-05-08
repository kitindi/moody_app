/* === Imports === */
import { initializeApp } from "firebase/app";
/* === Firebase Setup === */
const firebaseConfig = {
  apiKey: "AIzaSyDmpmE-yirgdKkhNFk1PqTgl1jrbcG3q-w",
  authDomain: "moody-bfbc9.firebaseapp.com",
  projectId: "moody-bfbc9",
  storageBucket: "moody-bfbc9.firebasestorage.app",
  messagingSenderId: "994016756483",
  appId: "1:994016756483:web:74843e42b17b41b41a9f36",
};

const app = initializeApp(firebaseConfig);
/* === UI === */

/* == UI - Elements == */

const viewLoggedOut = document.getElementById("logged-out-view");
const viewLoggedIn = document.getElementById("logged-in-view");

const signInWithGoogleButtonEl = document.getElementById("sign-in-with-google-btn");

const emailInputEl = document.getElementById("email-input");
const passwordInputEl = document.getElementById("password-input");

const signInButtonEl = document.getElementById("sign-in-btn");
const createAccountButtonEl = document.getElementById("create-account-btn");

/* == UI - Event Listeners == */

signInWithGoogleButtonEl.addEventListener("click", authSignInWithGoogle);

signInButtonEl.addEventListener("click", authSignInWithEmail);
createAccountButtonEl.addEventListener("click", authCreateAccountWithEmail);

/* === Main Code === */

showLoggedOutView();

/* === Functions === */

/* = Functions - Firebase - Authentication = */

function authSignInWithGoogle() {
  console.log("Sign in with Google");
}

function authSignInWithEmail() {
  console.log("Sign in with email and password");
}

function authCreateAccountWithEmail() {
  console.log("Sign up with email and password");
}

/* == Functions - UI Functions == */

function showLoggedOutView() {
  hideElement(viewLoggedIn);
  showElement(viewLoggedOut);
}

function showLoggedInView() {
  hideElement(viewLoggedOut);
  showElement(viewLoggedIn);
}

function showElement(element) {
  element.style.display = "flex";
}

function hideElement(element) {
  element.style.display = "none";
}
