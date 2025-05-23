import { getAuth } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAAT8O0cABWT6UiUWW7bCjRuaL31tQQHns",
  authDomain: "fullstack18-cbdec.firebaseapp.com",
  projectId: "fullstack18-cbdec",
  storageBucket: "fullstack18-cbdec.firebasestorage.app",
  messagingSenderId: "95967066938",
  appId: "1:95967066938:web:23ee5b772ab37bc45b6e03"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
