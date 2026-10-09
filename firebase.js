/* RK System live backend: Firebase Firestore + Auth.
   Loaded as a module by index.html. Resolves window.__rkReady with
   { db, auth } shaped to match the site's makeLive() data layer,
   or null if the backend cannot be reached (site falls back to
   its built-in per-browser demo storage). */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getFirestore, collection, doc, onSnapshot, setDoc, updateDoc, deleteDoc, query, where
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import {
  getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged,
  updatePassword, EmailAuthProvider, reauthenticateWithCredential
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const FIREBASE_CONFIG = {}; // filled in when the Firebase project is ready
const ADMIN_EMAIL = "admin@rksystem.in";
const ADMIN_UID = "__ADMIN_UID__";

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

  if (window.__rkResolve) window.__rkResolve({ db, auth: authApi });
} catch (e) {
  if (window.__rkResolve) window.__rkResolve(null);
}
