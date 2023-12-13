import { Skeleton } from "@mui/material";
import { Buttons } from "./Buttons";
import { SpecificBookProps } from "..";

export const ImagesButtons = ({ data, isLoading }: SpecificBookProps) => {
  return (
    <div className="w-full max-w-[24rem] flex justify-center relative">
      {isLoading ? (
        <Skeleton variant="rectangular" width={300} height={300} />
      ) : (
        <img
          className="w-full h-full max-h-[21rem] rounded-b-lg absolute blur-sm z-[-1] object-cover"
          src={
            data.volumeInfo.imageLinks?.thumbnail || "/images/generic-cover.jpg"
          }
          alt={data.volumeInfo.title}
        />
      )}
      <div className="flex flex-col items-center">
        {isLoading ? (
          <Skeleton variant="rectangular" width={300} height={300} />
        ) : (
          <img
            className="mt-28 max-w-[10rem] h-fit rounded-t-lg object-cover relative"
            src={
              data.volumeInfo.imageLinks?.thumbnail ||
              "/images/generic-cover.jpg"
            }
            alt={data.volumeInfo.title}
          />
        )}
        <Buttons />
      </div>
    </div>
  );
};
