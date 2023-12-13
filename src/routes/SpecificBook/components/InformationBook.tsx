import { SpecificBookProps } from "..";
import { Skeleton } from "@mui/material";

export const InformationBook = ({ data, isLoading }: SpecificBookProps) => {
  return (
    <div className="flex text-start flex-col w-full gap-2 overflow-hidden mx-2">
      <div className="flex w-full justify-between items-center">
        {isLoading ? (
          <Skeleton variant="text" width={400} height={80} />
        ) : (
          <h6 className="text-xl">{data.volumeInfo.title}</h6>
        )}
      </div>
      {isLoading ? (
        <Skeleton variant="text" width={400} height={40} />
      ) : (
        <p className=" text-gray-600 dark:text-slate-200 text-sm">
          {data.volumeInfo.authors?.[0] || ""}
        </p>
      )}
    </div>
  );
};
