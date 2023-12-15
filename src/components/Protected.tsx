import { auth } from "@/firebase/firebase";
import { Navigate } from "react-router-dom";

export const Protected = ({ children }: { children: JSX.Element }) => {
const user = auth.currentUser;

  if (user) {
    return children
  }

  if (!user) {
    return <Navigate to="/login" />;
  }
};
