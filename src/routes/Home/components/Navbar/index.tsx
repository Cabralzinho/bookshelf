import "@/App.css";
import { auth } from "@/firebase/firebase";
import { useAuthentication } from "@/hooks/useAuthentication ";
import { Skeleton } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

export const Navbar = () => {
  const { isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => auth,
  });

  const user = useAuthentication();

  return (
    <header className="flex justify-center pt-10">
      <nav className="w-full flex items-center gap-6">
        <div className="w-[6rem] h-[6rem] mobile:w-[5rem] mobile:h-[5rem]">
          {isLoading ? (
            <Skeleton variant="circular" width={96} height={96} />
          ) : (
            <img
              className="w-full h-full rounded-full object-cover"
              src={user?.photoURL || "./images/user.jpg"}
              alt=""
            />
          )}
        </div>
        <h6 className="whitespace-nowrap flex gap-1">
          Olá,{" "}
          {isLoading ? (
            <Skeleton variant="text" width={100} />
          ) : (
            user?.displayName
          )}
        </h6>
      </nav>
    </header>
  );
};
