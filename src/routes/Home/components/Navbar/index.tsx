import "@/App.css";
import { AuthProvider } from "@/providers/AuthProvider";
import { Skeleton } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
export const Navbar = () => {
  const { authUser } = AuthProvider();

  const { isLoading } = useQuery({
    queryKey: ["authUser"],
    enabled: !!authUser,
    queryFn: () => authUser,
  });

  return (
    <header className="flex justify-center pt-10">
      <nav className="w-full flex items-center gap-6">
        <div className="w-[6rem] h-[6rem] mobile:w-[5rem] mobile:h-[5rem]">
          {isLoading ? (
            <Skeleton variant="circular" width={96} height={96} />
          ) : (
            <img
              className="w-full h-full rounded-full object-cover"
              src={authUser?.photoURL || "./images/user.jpg"}
              alt=""
            />
          )}
        </div>
        {isLoading ? (
          <Skeleton variant="text" width={200} height={20} />
        ) : (
          <h6 className="whitespace-nowrap">Olá, {authUser?.displayName}</h6>
        )}
      </nav>
    </header>
  );
};
