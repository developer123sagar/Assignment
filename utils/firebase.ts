import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCGUjhGtUxGHeRWNJ43bZGihsAjYkPI3yk",
    authDomain: "jiffychat-ff413.firebaseapp.com",
    projectId: "jiffychat-ff413",
    storageBucket: "jiffychat-ff413.appspot.com",
    messagingSenderId: "817658007997",
    appId: "1:817658007997:web:f13e3ea52669c21df082d4",
    measurementId: "G-RPM5TV982P"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
