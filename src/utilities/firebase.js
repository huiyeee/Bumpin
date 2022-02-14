// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(firebase);

export const setData = (path, value) => set(ref(database, path), value);

export const useData = (path, transform) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const dbRef = ref(database, path);
    const devMode =
      !process.env.NODE_ENV || process.env.NODE_ENV === "development";
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
