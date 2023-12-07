export const CardGenrer = ({ specificBook }: any) => {
  return (
    <div className="flex w-full max-w-[18rem] justify-around bg-stone-100 border border-slate-400 rounded-lg p-2 text-sm dark:text-black items-center">
      <p>Genre: </p>
      <span className="text-xs">
        {specificBook.volumeInfo.categories?.[0] || "Nenhum gênero definido"}
      </span>
    </div>
  );
};
