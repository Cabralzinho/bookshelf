import { InformationRegisterForm } from "./components/InformationRegisterForm";

export const CreateInformationPage = () => {
  return (
    <main>
      <div className="relative h-full overflow-hidden">
        <img
          className="h-full w-full object-cover z-[-1] absolute"
          src="../images/lendo2.jpeg"
          alt=""
        />
        <div className="flex flex-col items-center justify-center h-screen w-full gap-1 p-4">
          <h1 className="text-2xl text-stone-50 bg-slate-950/5 rounded-full w-full max-w-[20rem]">
            Registrar informações
          </h1>
          <div className="relative flex flex-col items-center h-full max-h-[24.5rem] gap-4 bg-gray-600/80 backdrop-blur-md rounded-xl w-full max-w-[20rem] py-4 px-2">
            <InformationRegisterForm />
          </div>
        </div>
      </div>
    </main>
  );
};
