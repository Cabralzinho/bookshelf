import { Divider } from "@/components/Divider";
import { Icons } from "@/components/Icons";
import { Link } from "react-router-dom";
import { AccountInput } from "./components/AccountInput";
import { AccountProfilePicture } from "./components/AccountProfilePicture";

export const Account = () => {
  return (
    <main className="flex flex-col pt-10 gap-4">
      <header className="flex justify-center">
        <nav className="flex w-full max-w-[24rem] text-lg">
          <Link
            to="/settings"
            className="flex gap-2 cursor-pointer items-center hover:scale-105 transition-all duration-75"
          >
            <Icons.Angle />
            <p>Back</p>
          </Link>
        </nav>
      </header>
      <div className="flex justify-center">
        <div className="flex flex-col w-full gap-8">
          <AccountProfilePicture />
          <Divider />
          <AccountInput />
        </div>
      </div>
    </main>
  );
};
