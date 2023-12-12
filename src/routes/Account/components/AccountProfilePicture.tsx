import { AuthProvider } from "@/providers/AuthProvider";
import { ModalImg } from "./Modal";

export const AccountProfilePicture = () => {
  const { authUser } = AuthProvider();

  return (
    <>
      <h4 className="mobile:text-center w-full">Detalhes da conta</h4>
      <div className="w-full flex flex-col justify-center items-center gap-2">
        <img
          className="w-full max-w-[9rem] h-full max-h-[9rem] rounded-full object-cover"
          src={authUser?.photoURL || "../images/user.jpg"}
          alt=""
        />
        <ModalImg />
      </div>
    </>
  );
};

