import React from "react";
import { cn } from "../../../lib/utils";

function Container({ children, ...props }) {
  return (
    <div className={cn("px-7 py-16 lg:px-32", props.className)}>{children}</div>
  );
}

export default Container;
