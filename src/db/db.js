
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
apiKey: "AIzaSyA97Hl6Zw5HbDQACSawnHmtZ3a-XjmOSdc",
authDomain: "cesar-65fd2.firebaseapp.com",
projectId: "cesar-65fd2",
storageBucket: "cesar-65fd2.appspot.com",
messagingSenderId: "501953926985",
appId: "1:501953926985:web:4eb403953aec2f3ac56c98"
};


initializeApp(firebaseConfig);

const db = getFirestore ()

export default db;