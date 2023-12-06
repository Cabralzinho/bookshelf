import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  useEffect,
  useState,
} from "react";

type AuthProvider = {
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
};

export const AuthProvider = () => {
  const [authUser, setAuthUser] = useState<AuthProvider | null>(null);
  const auth = getAuth();

  const informationUser = () => {
    const user = auth.currentUser;

    if (user) {
      setAuthUser(user);

      return;
    } else {
      setAuthUser(null);
    }

  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, informationUser);

    return () => {
      unsubscribe();
    };
  }, []);

  return {
    authUser,
  };
};
