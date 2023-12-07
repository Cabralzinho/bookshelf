import { Icons } from "@/components/Icons";

export const InformationBook = ({specificBook}: any) => {
  return (
    <div className="flex text-start flex-col w-full gap-2 overflow-hidden mx-2">
      <div className="flex w-full justify-between items-center">
        <h6 className="text-xl">{specificBook.volumeInfo.title}</h6>
        <Icons.BookmarkDisabled className="text-lg cursor-pointer" />
      </div>
      <p className=" text-gray-600 dark:text-slate-200 text-sm">
        {specificBook.volumeInfo.authors?.[0] || ""}
      </p>
    </div>
  );
};
