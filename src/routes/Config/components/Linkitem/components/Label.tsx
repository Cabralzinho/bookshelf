import { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

export const Label = ({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span 
    className={twMerge(
      "flex-1",
      className
    )}
    {...rest}
    >
      {children}
    </span>
  )
}