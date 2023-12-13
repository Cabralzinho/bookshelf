import { Skeleton } from "@mui/material";
import { SpecificBookProps } from "..";

export const CardGenrer = ({ data, isLoading }: SpecificBookProps) => {
  return (
    <>
      {isLoading ? (
        <Skeleton variant="rounded" width={280} height={50} />
      ) : (
        <div className="flex w-full max-w-[18rem] justify-around bg-stone-100 border border-slate-400 rounded-lg p-2 text-sm dark:text-black items-center">
          <p>Genre: </p>
          <span className="text-xs">
            {data.volumeInfo.categories?.[0] || "Nenhum gênero definido"}
          </span>
        </div>
      )}
    </>
  );
};
