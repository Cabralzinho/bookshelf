import { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

export const IconArea = ({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div 
    className={twMerge(
      "w-5 h-5",
      className
    )} 
    {...rest}
    >
      {children}
    </div>
  )
}