import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  useEffect,
  useState,
  DetailedHTMLProps,
  ImgHTMLAttributes,
} from "react";
import { Navigate, useNavigate } from "react-router-dom";

type AuthProvider = {
  email: string | null;
  displayName: string | null;
  photoURL: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >["src"];
};

export const AuthProvider = () => {
  const [authUser, setAuthUser] = useState<AuthProvider | null>(null);
  const auth = getAuth();
  const navigate = useNavigate()

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
