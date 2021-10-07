import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAYAmXYBKiavwnwEJ37_QwZkl6fEgbVtLQ",
  authDomain: "d5reactgallery-bc37d.firebaseapp.com",
  projectId: "d5reactgallery-bc37d",
  storageBucket: "d5reactgallery-bc37d.appspot.com",
  messagingSenderId: "810623253787",
  appId: "1:810623253787:web:d97980776812e3924d67be",
};

const firebaseApp = initializeApp(firebaseConfig);

export const storage = getStorage(firebaseApp);
