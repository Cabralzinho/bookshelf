import { NavbarSearch } from "./components/NavbarSearch";
import "@/App.css";
import { AuthProvider } from "@/providers/AuthProvider";
export const Navbar = () => {
  const {authUser} = AuthProvider()

  return (
    <header className="flex justify-center pt-10">
      <nav className="w-full flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-base w-full">
          <img
            className="h-full max-w-[5rem] w-full max-h-[5rem] mobile:w-[6rem] rounded-full object-cover"
            src={authUser?.photoURL || "./images/user.jpg"}
            alt=""
          />
          <h6 className="whitespace-nowrap">Hi, {authUser?.displayName}</h6>
        </div>
        <div className="flex items-center gap-1 w-full max-w-[13rem] justify-end">
          <NavbarSearch />
        </div>
      </nav>
    </header>
  );
};
