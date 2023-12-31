import { ModalImg } from "./Modal";
import { useAuthentication } from "@/hooks/useAuthentication ";

export const AccountProfilePicture = () => {
  const user = useAuthentication()

  return (
    <>
      <h4 className="mobile:text-center w-full">Detalhes da conta</h4>
      <div className="w-full flex flex-col justify-center items-center gap-2">
        <div className="w-[12rem] h-[12rem] mobile:w-[11rem] mobile:h-[11rem]">
          <img
            className="w-full h-full rounded-full object-cover"
            src={user?.photoURL || "./images/user.jpg"}
            alt=""
          />
        </div>
        <ModalImg />
      </div>
    </>
  );
};
