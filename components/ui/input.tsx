import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          `
        form_control 
        block 
        w-full 
        rounded
        border-[1px]
        border-gray-300/80
        py-1.5 
        pl-2
        text-gray-900 
        placeholder:text-gray-900 
        sm:text-sm 
        sm:leading-6`,
          className,
          {}
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
