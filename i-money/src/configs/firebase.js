// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, serverTimestamp as firestoreServerTimestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage'; // Sử dụng getStorage từ firebase/storage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDovjbsN9pN20fOMZNcpDfEaBpDvPFF-wA",
  authDomain: "imoney-fb9ce.firebaseapp.com",
  projectId: "imoney-fb9ce",
  storageBucket: "imoney-fb9ce.appspot.com",
  messagingSenderId: "911229730709",
  appId: "1:911229730709:web:27a405a18371893852409c",
  measurementId: "G-8H80FQ97H3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const fireStoreCore = getFirestore(app);

// Initialize Auth
const projectAuth = getAuth(app);

// Initialize Storage
const projectStorage = getStorage(app); // Khởi tạo projectStorage từ getStorage

// Timestamp function
const timestamp = firestoreServerTimestamp;

export { fireStoreCore, projectAuth, timestamp, projectStorage };
