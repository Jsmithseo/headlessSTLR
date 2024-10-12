import React from "react";
import { cn } from "../../../lib/utils";

function Header1({ children, className }) {
  return (
    <h1 className={cn("text-2xl md:text-3xl font-bold text-white", className)}>
      {children}
    </h1>
  );
}

export default Header1;
