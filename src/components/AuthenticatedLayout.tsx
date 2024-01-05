import { auth } from "@/firebase/firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthenticatedLayout = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.currentUser) {
      navigate("/login");
      return;
    }
  }, [auth]);

  return children;
};
