import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyChZPk9fe6AyRdAWDBzh123rYO204r5i-c",
  authDomain: "universalflex-36fb2.firebaseapp.com",
  databaseURL: "https://universalflex-36fb2-default-rtdb.firebaseio.com",
  projectId: "universalflex-36fb2",
  storageBucket: "universalflex-36fb2.firebasestorage.app",
  messagingSenderId: "815265600221",
  appId: "1:815265600221:web:2ba5fe04a7865d2ac2c134",
  measurementId: "G-4G8S1WRY60"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error('Error signing in with Google:', error);
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
};

export const onAuthChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};

export default app;
