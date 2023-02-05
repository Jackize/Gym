// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoKTej0JpVxHx4dynP028XFphTHOa37b4",
  authDomain: "gym-workout-512f1.firebaseapp.com",
  projectId: "gym-workout-512f1",
  storageBucket: "gym-workout-512f1.appspot.com",
  messagingSenderId: "120230293659",
  appId: "1:120230293659:web:833cad23ac6fd83d37163e",
  measurementId: "G-KR5LQMZMH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);