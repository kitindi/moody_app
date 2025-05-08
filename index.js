/* === Imports === */

/* === Firebase Setup === */
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmpmE-yirgdKkhNFk1PqTgl1jrbcG3q-w",
  authDomain: "moody-bfbc9.firebaseapp.com",
  projectId: "moody-bfbc9",
  storageBucket: "moody-bfbc9.firebasestorage.app",
  messagingSenderId: "994016756483",
  appId: "1:994016756483:web:74843e42b17b41b41a9f36",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

console.log("Firebase initialized", app, auth);

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
  const email = emailInputEl.value;
  const password = passwordInputEl.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      showLoggedInView();
      // ...
    })
    .catch((error) => {
      console.error("Error creating account", error.code, error.message);
    });
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
