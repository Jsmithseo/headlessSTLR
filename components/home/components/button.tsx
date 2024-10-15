import React from "react";
import { Button } from "../../ui/button";
import { cn } from "../../../lib/utils";

function HomeButton({ children, ...props }) {
  return (
    <Button
      className={cn(
        "py-3 px-7 rounded-3xl text-white bg-[#c65a1b] border w-min outline-none border-gray-600 text-sm font-bold transition-all duration-300 hover:bg-[#32373c] hover:cursor-pointer flex flex-row items-center justify-center",
        props.className
      )}
    >
      {children}
    </Button>
  );
}

export default HomeButton;
