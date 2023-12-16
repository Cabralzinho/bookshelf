import { Skeleton } from "@mui/material";
export const NewestBookSkeleton = () => {
  return (
    <>
      <Skeleton
        className="rounded-full"
        variant="rectangular"
        width={160}
        height={30}
      />
      <ul className="flex flex-col gap-6">
        {Array.from({ length: 5 }, (_, index) => (
          <li key={index} className="flex gap-1">
            <Skeleton variant="rounded" width={160} height={210} />
            <div className="flex flex-col justify-center gap-2">
              <Skeleton variant="text" width={160} height={30} />
              <Skeleton variant="text" width={160} height={30} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
