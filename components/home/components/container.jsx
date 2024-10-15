import React from "react";
import { cn } from "../../../lib/utils";

function Container({ children, ...props }) {
  return <div className={cn("", props.className)}>{children}</div>;
}

export default Container;
