import { Icons } from "@/components/Icons";
import { useAuthentication } from "@/hooks/useAuthentication ";


export const AccountInput = () => {  
  const user = useAuthentication();

  const inputItem = [
    {
      inputName: "Seu Nome",
      name: user?.displayName,
    },
    {
      inputName: "Seu Email",
      name: user?.email,
    },
  ];

  return (
    <ul className="flex flex-col gap-4">
      {inputItem.map((item) => (
        <li key={item.inputName} className="flex flex-col gap-2">
          <span className="text-sm">{item.inputName}</span>
          <div className="flex items-center justify-between w-full cursor-pointer bg-stone-50 hover:bg-stone-100 rounded-lg px-4 py-3 border border-stone-300 dark:hover:bg-slate-800 hover:border-black hover:dark:border-white dark:border-white transition-all dark:text-black dark:hover:text-white">
            <span className="text-ellipsis overflow-hidden">{item.name}</span>
            <Icons.ChevronRight />
          </div>
        </li>
      ))}
    </ul>
  );
};
