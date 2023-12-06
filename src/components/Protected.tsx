import { getAuth } from "firebase/auth";
import { Navigate } from "react-router-dom";

export const Protected = ({ children }: { children: JSX.Element }) => {
  const auth = getAuth();

  if (!auth.currentUser) {
    return <Navigate to="/login" replace/>;
  }
  else {
    return children;
  }
}