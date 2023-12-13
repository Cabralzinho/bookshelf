import { AuthProvider } from "@/providers/AuthProvider";
import { Skeleton } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

export const UserDetails = () => {
  const { authUser } = AuthProvider();

  const { isLoading } = useQuery({
    queryKey: ["authUser"],
    enabled: !!authUser,
    queryFn: () => authUser,
  });

  return (
    <div className="flex items-center justify-between gap-4 overflow-hidden">
      {isLoading ? (
        <div className="w-[5rem] h-[5rem] mobile:w-[5rem] mobile:h-[5rem]">
          <Skeleton variant="circular" width={80} height={80} />
        </div>
      ) : (
        <img
          className="w-full min-w-[6.5rem] max-w-[7rem] min-h-[6.5rem] h-full max-h-[7rem] rounded-full object-cover "
          src={authUser?.photoURL || "./images/user.jpg"}
          alt=""
        />
      )}
      <div className="flex flex-col gap-1 min-w-0 w-full">
        <span className="font-semibold text-ellipsis overflow-hidden">
          {authUser?.displayName}
        </span>
        <span className="text-sm text-ellipsis overflow-hidden flex-1">
          {authUser?.email}
        </span>
      </div>
    </div>
  );
};
