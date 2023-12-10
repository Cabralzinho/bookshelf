import { Link } from "react-router-dom";
import { CredentialLoginForm } from "./components/CredentialLoginForm";
import { OrDivider } from "./components/OrDivider";
import { LoginGoogle } from "./components/LoginGoogle";

export const LoginPage = () => {
  return (
    <main>
      <div className="relative h-full overflow-hidden">
        <img
          className="h-screen w-full object-cover z-[-1] absolute"
          src="./images/lendo2.jpeg"
          alt=""
        />
        <div className="flex flex-col items-center justify-center h-screen w-full gap-1 p-4">
          <h1 className="text-3xl text-stone-50 bg-slate-950/5 w-full max-w-[20rem]">
            Log In
          </h1>
          <div className="relative flex flex-col items-center h-full gap-4 bg-gray-600/80 backdrop-blur-md rounded-xl max-h-[26rem] w-full max-w-[20rem] py-4 px-2">
            <CredentialLoginForm />
            <Link to="/recovery" className="text-blue-300/90 hover:text-blue-300 transition-all cursor-pointer">
              Esqueceu sua senha?
            </Link>
            <OrDivider />
            <LoginGoogle />
            <Link className="text-white mobile:text-center" to="/register">
              Ainda nao tem uma conta?
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
