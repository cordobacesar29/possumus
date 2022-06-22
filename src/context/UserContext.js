import { useContext, createContext, useEffect, useState } from "react";

import { 
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../services/firebase-config";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const googleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithRedirect(auth, googleProvider);
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (userFirebase) => {
      if(userFirebase) {
        setUser(userFirebase);
      } else {
        setUser(null);
      }
    });
  }
  , []);

  return (
    <UserContext.Provider value={{ user, googleSignIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const context = useContext(UserContext);
  if(!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}