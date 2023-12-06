import { Icons } from "@/components/Icons";
import { useBook } from "@/hooks/useBook";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Description } from "./Description";
import { Buttons } from "./Buttons";

export const SpecificBook = () => {
  const { id } = useParams();
  const { searchSpecificBook, specificBook } = useBook();

  useEffect(() => {
    if (typeof id !== "string") {
      throw new Error("ID is not a string");
    }

    searchSpecificBook(id);
  }, [id]);

  return (
    <main className="flex justify-center items-center">
      <div className="max-w-[24rem] w-full flex flex-col gap-8">
        {specificBook && (
          <section className="flex flex-col justify-center items-center gap-4 text-center">
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
            <div className="flex text-start flex-col w-full gap-2 overflow-hidden mx-2">
              <div className="flex w-full justify-between items-center">
                <h6 className="text-xl">{specificBook.volumeInfo.title}</h6>
                <Icons.BookmarkDisabled className="text-lg cursor-pointer" />
              </div>
              <p className=" text-gray-600 dark:text-slate-200 text-sm">
                {specificBook.volumeInfo.authors?.[0] || ""}
              </p>
            </div>
            <div className="flex items-center justify-around w-[18rem] bg-stone-100 border border-slate-400 rounded-lg p-2 drop-shadow-md dark:text-black">
              <div className="flex items-center gap-1">
                <p>{specificBook.volumeInfo.pageCount} Pages</p>
              </div>
              <div className="w-[1px] h-[1rem] bg-slate-600"></div>
              <div className="flex items-center gap-1">
                <p>Type: {specificBook.volumeInfo.printType}</p>
              </div>
            </div>
            <Description>
              {specificBook.volumeInfo.description || ""}
            </Description>
            <div className="flex w-[18rem] justify-around items-center bg-stone-100 border border-slate-400 rounded-lg p-2 text-sm dark:text-black">
              <p>Genre: </p>
              <span>{specificBook.volumeInfo.categories?.[0] || ""}</span>
            </div>
          </section>
        )}
      </div>
    </main>
  );
};
