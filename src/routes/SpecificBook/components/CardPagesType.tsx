export const CardPagesTypes = ({specificBook}: any) => {
  return (
    <div className="flex items-center justify-around w-full max-w-[18rem] bg-stone-100 border border-slate-400 rounded-lg p-2 drop-shadow-md dark:text-black text-sm">
      <div className="flex items-center gap-1">
        <p>{specificBook.volumeInfo.pageCount} Pages</p>
      </div>
      <div className="w-[1px] h-[1rem] bg-slate-600"></div>
      <div className="flex items-center gap-1">
        <p>Type: {specificBook.volumeInfo.printType}</p>
      </div>
    </div>
  );
};
