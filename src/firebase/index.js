import firebaseCredentials from "./credentials";
import { login, logout, auth } from "./loginGoogle";
import { initializeApp } from "firebase/app";

initializeApp(firebaseCredentials.config);

export { login, logout, auth };
