import firebaseCredentials from "./credentials";
import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

// Initialize Firebase
initializeApp(firebaseCredentials.config);

const auth = getAuth();
const provider = new GoogleAuthProvider();

const login = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      const info = {
        credential,
        token,
        user,
      };
      return info;
    })
    .catch((error) => {
      // Handle Errors here.
      // const errorCode = error.code;
      console.log(error);
      // const errorMessage = error.message;
      // // The email of the user's account used.
      // const email = error.email;
      // // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

const logout = () => {
  signOut(auth)
    .then(() => {
      // signOut
    })
    .catch(() => {
      // An error happened.
    });
};

export { login, logout, auth };
