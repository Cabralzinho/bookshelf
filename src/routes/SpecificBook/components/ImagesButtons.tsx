import { Buttons } from "./Buttons";

export const ImagesButtons = ({ specificBook }: any) => {
  return (
    <div className="w-full max-w-[24rem] flex justify-center relative">
      <img
        className="w-full h-full max-h-[21rem] rounded-b-lg absolute blur-sm z-[-1] object-cover"
        src={
          specificBook.volumeInfo.imageLinks?.thumbnail ||
          "/images/generic-cover.jpg"
        }
        alt={specificBook.volumeInfo.title}
      />
      <div className="flex flex-col items-center">
        <img
          className="mt-28 max-w-[10rem] h-fit rounded-t-lg object-cover relative"
          src={
            specificBook.volumeInfo.imageLinks?.thumbnail ||
            "/images/generic-cover.jpg"
          }
          alt={specificBook.volumeInfo.title}
        />
        <Buttons />
      </div>
    </div>
  );
};
