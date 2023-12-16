import { getAuth } from "firebase/auth";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthenticationLayout = ({ children }: { children: JSX.Element }) => {
  const [isLogged, setIsLogged] = useState(false)

  const pathName = useLocation().pathname;

  const navigate = useNavigate()
  
  const auth = getAuth();

  auth.onAuthStateChanged((user) => {
    setIsLogged(!!user);
  });

  if (isLogged && ["/login", "/register"].includes(pathName)) {
    navigate("/");
    return;
  }

  return children;
};
