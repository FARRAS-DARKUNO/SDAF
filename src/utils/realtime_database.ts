import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyB4VWJdykVJASqLWf1-CwF_fff4Imsdark",
    authDomain: "kiluan-sfad.firebaseapp.com",
    databaseURL: "https://kiluan-sfad-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "kiluan-sfad",
    storageBucket: "kiluan-sfad.appspot.com",
    messagingSenderId: "254210031641",
    appId: "1:254210031641:web:441a2f002aabb1c5196a88"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)