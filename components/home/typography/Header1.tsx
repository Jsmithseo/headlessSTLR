import React from "react";
import { cn } from "../../../lib/utils";

function Header1({ children, ...props }) {
  return (
    <h1
      className={cn(
        "text-4xl font-bold text-white leading-[1.47]",
        props.className
      )}
    >
      {children}
    </h1>
  );
}

export default Header1;
