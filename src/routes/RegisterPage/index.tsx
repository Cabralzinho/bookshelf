import { Link } from "react-router-dom";
import { CredentialRegisterForm } from "./components/CredentialRegisterForm";

export const RegisterPage = () => {
  return (
    <main>
      <div className="relative h-full max-h-[34.2rem]">
        <img
          className="h-screen w-full object-cover z-[-1] absolute"
          src="./images/lendo2.jpeg"
          alt=""
        />
        <div className="flex flex-col items-center justify-center h-screen w-full gap-1 p-4">
          <h1 className="text-3xl text-stone-50 bg-slate-950/5 w-full max-w-[20rem]">
            Sign Up
          </h1>
          <div className="relative flex flex-col items-center h-full gap-4 bg-gray-600/80 backdrop-blur-md rounded-xl max-h-[22rem] w-full max-w-[20rem] py-4 px-2">
            <CredentialRegisterForm />
            <Link className="text-white mobile:text-center" to="/login">
              do you have an account?
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
