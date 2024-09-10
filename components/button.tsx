import React from "react";
import { cn } from "../lib/utils";

function Button({ children, className, onClick, disabled }) {
  return (
    <button
      className={cn(
        `flex items-center justify-center gap-3 rounded-lg border-[1px]  border-solid border-gray-300 px-5 py-2 `,
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
