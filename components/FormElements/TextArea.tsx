import React from "react";
import { cn } from "../../lib/utils";

function TextArea({ label, error, className, labelClassName, ...props }) {
  return (
    <div>
      {label && (
        <label
          htmlFor={props.id}
          className={cn("block text-sm font-medium", labelClassName)}
        >
          {label}
        </label>
      )}
      <div className={cn(label !== "" && "mt-1")}>
        <textarea
          className={cn(
            "block w-full rounded-md border border-gray-300 p-2 focus:outline-burgendy sm:text-sm",
            error ? "border-red-600" : "",
            className
          )}
          {...props}
        />
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
    </div>
  );
}

export default TextArea;
