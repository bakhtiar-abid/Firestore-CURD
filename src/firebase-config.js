import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyA9yb4wEcmxxwYX_ZA-rgVXE6xGqzLzums",
   authDomain: "firebse-curd-2473c.firebaseapp.com",
   projectId: "firebse-curd-2473c",
   storageBucket: "firebse-curd-2473c.appspot.com",
   messagingSenderId: "371063122945",
   appId: "1:371063122945:web:17d37d94ae2c7a7243e400",
   measurementId: "G-S8NPB5CL8R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
 export const db = getFirestore(app);
