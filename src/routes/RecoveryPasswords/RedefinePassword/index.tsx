import { CredentialNewPassword } from "./components/CredentialNewPassword";

export const RedefinePassword = () => {
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
            Recuperação de senha.
          </h1>
          <div className="relative flex flex-col h-full gap-4 bg-gray-600/80 backdrop-blur-md rounded-xl max-h-[18rem] w-full max-w-[20rem] py-4 px-2">
            <span className="text-white text-sm">
              Escreva sua nova senha para redefinir.
            </span>
            <CredentialNewPassword />
          </div>
        </div>
      </div>
    </main>
  );
};
