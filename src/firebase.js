import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBNQmZV9acZIE75_QQEdnJWNzhpYenl1-8",
  authDomain: "spotify-clone-a167e.firebaseapp.com",
  projectId: "spotify-clone-a167e",
  storageBucket: "spotify-clone-a167e.appspot.com",
  messagingSenderId: "965913330736",
  appId: "1:965913330736:web:96b990a38e90e4b33c59f5",
  measurementId: "G-SLJFQZFFRQ",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
