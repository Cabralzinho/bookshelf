import "@/App.css";
import { auth } from "@/firebase/firebase";
import { Skeleton } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
export const Navbar = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["auth"],
    queryFn: () => auth.currentUser,
    staleTime: 1000
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
              src={data?.photoURL || "./images/user.jpg"}
              alt=""
            />
          )}
        </div>
        {isLoading ? (
          <Skeleton variant="text" width={200} height={20} />
        ) : (
          <h6 className="whitespace-nowrap">Olá, {data?.displayName}</h6>
        )}
      </nav>
    </header>
  );
};
