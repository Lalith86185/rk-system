/* RK System live backend: Firebase Firestore + Auth.
   Loaded as a module by index.html. Resolves window.__rkReady with
   { db, auth } shaped to match the site's makeLive() data layer,
   or null if the backend cannot be reached (site falls back to
   its built-in per-browser demo storage). */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getFirestore, collection, doc, getDoc, onSnapshot, setDoc, updateDoc, deleteDoc, query, where
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import {
  getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged,
  updatePassword, EmailAuthProvider, reauthenticateWithCredential
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const FIREBASE_CONFIG = {
  "apiKey": "AIzaSyAfOAwPkg1tRejkX5SkFsk5hGEb0fe0HDo",
  "authDomain": "rk-system-2e9a2.firebaseapp.com",
  "projectId": "rk-system-2e9a2",
  "storageBucket": "rk-system-2e9a2.firebasestorage.app",
  "messagingSenderId": "159129690940",
  "appId": "1:159129690940:web:c8a7947dbb495f77e3f439"
};
const ADMIN_EMAIL = "admin@rksystem.in";
const ADMIN_UID = "e2IplGFjajUTWt3iHItVObdVfx52";

try {
  if (!FIREBASE_CONFIG.apiKey) throw new Error('backend not configured yet');
  const app = initializeApp(FIREBASE_CONFIG);
  const fs = getFirestore(app);
  const auth = getAuth(app);
  const isAdmin = () => !!(auth.currentUser && auth.currentUser.uid === ADMIN_UID);

  const db = {
    collection(name) {
      return {
        onSnapshot(cb, err) {
          let ref = collection(fs, name);
          // Visitors may only read approved reviews; admins read all.
          if (name === "reviews" && !isAdmin()) {
            ref = query(ref, where("approved", "==", true));
          }
          return onSnapshot(ref, cb, err);
        },
        doc(id) {
          const d = doc(fs, name, id);
          return {
            get: async () => { const s = await getDoc(d); return s.exists() ? Object.assign({ id: s.id }, s.data()) : null; },
            set: (v) => setDoc(d, v),
            update: (p) => updateDoc(d, p),
            delete: () => deleteDoc(d)
          };
        }
      };
    }
  };

  const authApi = {
    signIn: (pw) => signInWithEmailAndPassword(auth, ADMIN_EMAIL, pw),
    signOut: () => signOut(auth),
    onChange: (cb) => onAuthStateChanged(auth, (u) => cb(!!(u && u.uid === ADMIN_UID))),
    changePassword: async (oldPw, newPw) => {
      const u = auth.currentUser;
      if (!u) throw new Error("not signed in");
      await reauthenticateWithCredential(u, EmailAuthProvider.credential(u.email, oldPw));
      await updatePassword(u, newPw);
    }
  };

  window.__rkLive = { db, auth: authApi };
  if (window.__rkResolve) window.__rkResolve(window.__rkLive);
  try { window.dispatchEvent(new Event('rk-live')); } catch (e) {}
} catch (e) {
  if (window.__rkResolve) window.__rkResolve(null);
}
