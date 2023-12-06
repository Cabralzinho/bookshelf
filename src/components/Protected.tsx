import { getAuth } from "firebase/auth";
import { Navigate } from "react-router-dom";

export const Protected = ({ children }: { children: JSX.Element }) => {
  const auth = getAuth();

  if (!auth.currentUser) {
    return <Navigate to="/login" replace />;
  } else {
    return (
      <div className="flex w-full justify-center overflow-hidden">
        <div className="flex flex-col gap-8 w-full max-w-[24rem] h-screen">
          {children}
        </div>
      </div>
    );
  }
};
