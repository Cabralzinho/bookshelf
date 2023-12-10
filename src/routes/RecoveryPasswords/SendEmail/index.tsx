import { Link } from "react-router-dom";
import { CredentialSendRecoveryPassword } from "./components/CredentialSendRecoveryPassword";

export const RecoveryPasswordForm = () => {
  return (
    <main>
      <div className="relative h-full overflow-hidden">
        <img
          className="h-screen w-full object-cover z-[-1] absolute"
          src="../images/lendo2.jpeg"
          alt=""
        />
        <div className="flex flex-col items-center justify-center h-screen w-full gap-1 p-4">
          <h1 className="text-3xl text-stone-50 bg-slate-950/5 w-full max-w-[20rem]">
            Recuperar Senha
          </h1>
          <div className="relative flex flex-col h-full gap-4 bg-gray-600/80 backdrop-blur-md rounded-xl max-h-[18rem] w-full max-w-[20rem] py-4 px-2">
            <span className="text-white text-sm">
              Esqueceu sua senha? Não se preocupe, escreva o seu Email e sua senha será redefinida.
            </span>
            <CredentialSendRecoveryPassword />
            <Link to="/register" className="text-blue-300/90 hover:text-blue-300 transition-all cursor-pointer text-center">
              Ainda nao tem uma conta?
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
