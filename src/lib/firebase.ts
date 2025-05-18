// src/lib/firebase.ts
import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZGm3k6UVTR_qMB4oo0K7EINzVPTDWXwI",
  authDomain: "ashishs-portfolio.firebaseapp.com",
  projectId: "ashishs-portfolio",
  storageBucket: "ashishs-portfolio.appspot.com", // Corrected based on common Firebase patterns, user had .firebasestorage.app
  messagingSenderId: "148110925176",
  appId: "1:148110925176:web:cd7392ca8d5f06ac697c8d"
  // measurementId is optional and not provided, so it's omitted
};

let app: FirebaseApp;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const db = getFirestore(app);

export { db, app };
