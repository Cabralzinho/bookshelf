import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const Body = ({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLLIElement>) => {
  return (
    <li
      className={twMerge(
        "flex items-center justify-center rounded-lg border border-gray-300 gap-4 p-4 group hover:bg-stone-100 hover:border-gray-600 transition-all cursor-pointer",
        className
      )}
      {...rest}
    >
      {children}
    </li>
  );
};
