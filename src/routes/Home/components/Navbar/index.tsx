import "@/App.css";
import { AuthProvider } from "@/providers/AuthProvider";
export const Navbar = () => {
  const { authUser } = AuthProvider();

  return (
    <header className="flex justify-center pt-10">
      <nav className="w-full flex items-center gap-4">
        <div className="w-[6rem] h-[6rem] mobile:w-[5rem] mobile:h-[5rem]">
          <img
            className="w-full h-full rounded-full object-cover"
            src={authUser?.photoURL || "./images/user.jpg"}
            alt=""
          />
        </div>
        <h6 className="whitespace-nowrap">Olá, {authUser?.displayName}</h6>
      </nav>
    </header>
  );
};
