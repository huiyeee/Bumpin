import {useState, useEffect} from "react";
// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import {getDatabase, onValue, ref, set, connectDatabaseEmulator} from "firebase/database";

import {
  getAuth,
  GoogleAuthProvider,
  onIdTokenChanged,
  signInWithPopup,
  signOut,
  connectAuthEmulator,
  signInWithCredential
} from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries
import {wait} from "@testing-library/user-event/dist/utils";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuJQZwWP0kPYDRKd1Ctmu9K7bIe9QkCZU",
  authDomain: "bumpin-7d62f.firebaseapp.com",
  databaseURL: "https://bumpin-7d62f-default-rtdb.firebaseio.com",
  projectId: "bumpin-7d62f",
  storageBucket: "bumpin-7d62f.appspot.com",
  messagingSenderId: "197232644599",
  appId: "1:197232644599:web:769da6c0673efc09e11ef2",
};

// auth
export const signInWithGoogle = () => {
  signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
};

const firebaseSignOut = () => signOut(getAuth(firebase));

export {firebaseSignOut as signOut};

export const useUserState = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    onIdTokenChanged(getAuth(firebase), setUser);
  }, []);
  return [user];
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

const auth = getAuth(firebase);

export const env = window.location.host.indexOf("bumpin-7d62f") === -1 ? "development" : "production"

export const database = getDatabase(firebase);

export const setData = (path, value) => set(ref(database, env + path), value);

if (window.Cypress) {
  connectAuthEmulator(auth, "http://127.0.0.1:9099");
  connectDatabaseEmulator(database, "127.0.0.1", 9000);

  signInWithCredential(auth, GoogleAuthProvider.credential(
    '{"sub": "qEvli4msW0eDz5mSVO6j3W7i8w1k", "email": "tester@gmail.com", "displayName":"Test User", "email_verified": true}'
  ));
}

export const useData = (path, transform) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const dbRef = ref(database, env + path);
    const devMode =
      !env || env === "development";
    if (devMode) {
      // console.log(`loading ${path}`);
    }
    return onValue(
      dbRef,
      (snapshot) => {
        const val = snapshot.val();
        if (devMode) {
          // console.log(val);
        }
        setData(transform ? transform(val) : val);
        setLoading(false);
        setError(null);
      },
      (error) => {
        setData(null);
        setLoading(false);
        setError(error);
      }
    );
  }, [path, transform]);

  return [data, loading, error];
};
