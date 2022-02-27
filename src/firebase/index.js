
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBzlSJcgA_IgVlPBInOz1fRtGeM8-Qv29U',
  authDomain: 'tunicata-web.firebaseapp.com',
  databaseURL: 'https://tunicata-web-default-rtdb.firebaseio.com',
  projectId: 'tunicata-web',
  storageBucket: 'tunicata-web.appspot.com',
  messagingSenderId: '803433107094',
  appId: '1:803433107094:web:076085692d4d0f141f7cb7'
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, storage, auth, firebaseApp as default };
