import { Link } from "react-router-dom";
import { CredentialLoginForm } from "./components/CredentialLoginForm";
import { RecoveryPasswordForm } from "./components/RecoveryPasswordForm";

export const LoginPage = () => {
  return (
    <main>
      <div className="relative h-screen max-h-[34.2rem]">
        <img
          className="h-screen w-full object-cover z-[-1] absolute"
          src="./images/lendo2.jpeg"
          alt=""
        />
        <div className="flex flex-col items-center justify-center h-screen w-full gap-1 p-4">
          <h1 className="text-3xl text-stone-50 bg-slate-950/5 rounded-full items-start w-full px-5">
            Log in
          </h1>
          <div className="relative flex flex-col items-center h-full gap-4 bg-gray-600/80 backdrop-blur-md rounded-xl max-h-[26rem] w-full max-w-[20rem] py-4 px-2">
            <CredentialLoginForm />
            <RecoveryPasswordForm />
            <div className="flex items-center gap-4">
              <div className="w-[7rem] h-[0.5px] bg-white/30"></div>
              <span className="text-white">Or</span>
              <div className="w-[7rem] h-[0.5px] bg-white/30"></div>
            </div>
            <Link className="text-white mobile:text-center" to="/register">
              Don't have an account?
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
