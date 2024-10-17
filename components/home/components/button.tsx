import React from "react";
import { Button } from "../../ui/button";
import { cn } from "../../../lib/utils";

function HomeButton({ children, ...props }) {
  return (
    <Button
      className={cn(
        "lg:py-7 lg:px-8 py-5 px-6 rounded-full text-white bg-[#c65a1b] w-min outline-none font-bold transition-all duration-300 hover:bg-[#32373c] hover:cursor-pointer flex flex-row items-center justify-center",
        props.className
      )}
    >
      {children}
    </Button>
  );
}

export default HomeButton;
