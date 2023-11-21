
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9_7pTgy2V5R2hI-WNVjl1zF-5HXL0Ri0",
  authDomain: "bistro-boss-aff11.firebaseapp.com",
  projectId: "bistro-boss-aff11",
  storageBucket: "bistro-boss-aff11.appspot.com",
  messagingSenderId: "612788403658",
  appId: "1:612788403658:web:f6806809338ae4cfbce333"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);