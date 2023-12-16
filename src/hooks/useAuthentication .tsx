import { auth } from "@/firebase/firebase";
import firebase from "firebase/compat/app";
import { useEffect, useState } from "react";

export const useAuthentication = () => {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth: any) => {
      setUser(userAuth);
    })

    return () => unsubscribe();
  }, []);

  return user;
}