import { AuthProvider } from "@/providers/AuthProvider";

export const UserDetails = () => {
  const { authUser } = AuthProvider();

  return (
    <div className="flex items-center justify-between gap-4 overflow-hidden">
      <img
        className="w-full min-w-[6.5rem] max-w-[7rem] min-h-[6.5rem] h-full max-h-[7rem] rounded-full object-cover "
        src={authUser?.photoURL || "./images/user.jpg"}
        alt=""
      />
      <div className="flex flex-col gap-1 min-w-0 w-full">
        <span className="font-semibold text-ellipsis overflow-hidden">{authUser?.displayName}</span>
        <span className="text-sm text-ellipsis overflow-hidden flex-1">
          {authUser?.email}
        </span>
      </div>
      
    </div>
  );
};
