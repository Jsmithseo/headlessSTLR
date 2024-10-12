import React from "react";
import { Button } from "../../ui/button";
import { cn } from "../../../lib/utils";

function HomeButton({ children, className }) {
  return (
    <Button
      className={cn(
        "py-3 px-7 rounded-3xl text-white bg-[#c65a1b] border outline-none border-gray-600 text-sm font-bold transition-all duration-300 hover:bg-[#32373c] hover:cursor-pointer",
        className
      )}
    >
      {children}
    </Button>
  );
}

export default HomeButton;
