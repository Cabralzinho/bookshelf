import { Skeleton } from "@mui/material";

export const BooksSkeleton = () => {
  return (
    <>
      <Skeleton className="rounded-full" variant="rectangular" width={160} height={30} />
      <ul className="flex gap-6 overflow-hidden">
        {Array.from({ length: 3 }, (_, index) => (
          <li key={index} className="flex flex-col gap-1">
            <Skeleton variant="rounded" width={160} height={210} />
            <Skeleton variant="text" width={160} height={17} />
            <Skeleton variant="text" width={160} height={17} />
          </li>
        ))}
      </ul>
    </>
  );
};
