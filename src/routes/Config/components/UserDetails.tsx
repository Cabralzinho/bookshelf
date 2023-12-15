import { auth } from "@/firebase/firebase";
import { Skeleton } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

export const UserDetails = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["auth"],
    enabled: !!auth,
    queryFn: () => auth.currentUser,
  });

  return (
    <div className="flex items-center justify-between gap-4 overflow-hidden">
      {isLoading ? (
        <div className="w-[5rem] h-[5rem] mobile:w-[5rem] mobile:h-[5rem]">
          <Skeleton variant="circular" width={80} height={80} />
        </div>
      ) : (
        <div className="w-[6.5rem] h-[6.5rem]">
          <img
            className="w-full min-w-[6.5rem] max-w-[7rem] min-h-[6.5rem] h-full max-h-[7rem] rounded-full object-cover "
            src={data?.photoURL || "./images/user.jpg"}
            alt=""
          />
        </div>
      )}
      <div className="flex flex-col gap-1 min-w-0 w-full">
        <span className="font-semibold text-ellipsis overflow-hidden">
          {data?.displayName}
        </span>
        <span className="text-sm text-ellipsis overflow-hidden flex-1">
          {data?.email}
        </span>
      </div>
    </div>
  );
};
