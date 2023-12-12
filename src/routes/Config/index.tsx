import { Divider } from "@/components/Divider";
import { UserDetails } from "./components/UserDetails";
import { AccountDetailsButton } from "./components/AccountDetailsButton";
import { LogoutButton } from "./components/LogoutButton";

export const Config = () => {
  return (
    <main className="flex flex-col gap-4 justify-center w-full pt-10">
      <h1 className="text-3xl">Conta</h1>
      <UserDetails />
      <Divider />
      <div>
        <ul className="flex flex-col gap-4">
          <AccountDetailsButton />
          <LogoutButton />
        </ul>
      </div>
    </main>
  );
};
