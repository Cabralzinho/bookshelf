import { InputHTMLAttributes, forwardRef } from "react";

type InputProps = {
  label: string;
  error: boolean;
  required?: boolean;
  helperText?: string | undefined;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, ...rest }, ref) => {
    return (
      <div className={`w-full flex flex-col gap-1 transition-colors duration-[40ms] ${error && "text-red-400" || "text-white"}`}>
        <label className="text-sm px-2 uppercase">{label}</label>
        <div className="bg-white w-full rounded-xl p-2">
          <input
            ref={ref}
            className="bg-transparent outline-none w-full text-gray-600"
            {...rest}
          />
        </div>
        {helperText && (
          <span className="text-xs px-2 w-full max-w-[18rem]">
            {helperText}
          </span>
        )}
      </div>
    );
  }
);
