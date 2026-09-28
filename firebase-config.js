// Import Firebase SDKs from CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA895Uxj9i-8eS-3jv_5zHuuPXoQIGRwt0",
  authDomain: "hn-scents-1ed84.firebaseapp.com",
  projectId: "hn-scents-1ed84",
  storageBucket: "hn-scents-1ed84.firebasestorage.app",
  messagingSenderId: "1089448946221",
  appId: "1:1089448946221:web:fadb55a4dc95bc5bb1a6a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
