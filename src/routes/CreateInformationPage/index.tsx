import { InformationRegisterForm } from "./components/InformationRegisterForm"

export const CreateInformationPage = () => {
  return (
    <main>
      <div className="relative h-screen max-h-[34.2rem]">
        <img
          className="h-screen w-full object-cover z-[-1] absolute"
          src="../images/lendo2.jpeg"
          alt=""
        />
        <div className="flex flex-col items-center justify-center h-screen w-full gap-1 p-4">
          <h1 className="text-2xl text-stone-50 bg-slate-950/5 rounded-full w-full items-center px-5">Register Informations</h1>
          <div className="relative flex flex-col items-center h-full gap-4 bg-gray-600/80 backdrop-blur-md rounded-xl max-h-[28rem] w-full max-w-[20rem] py-4 px-2">
            <InformationRegisterForm />
          </div>
        </div>
      </div>
    </main>
  )
}