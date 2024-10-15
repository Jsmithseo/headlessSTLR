import React from "react";
import Link from "next/link";
import { cn } from "../../../lib/utils";

function CustomLink({ children, ...props }) {
  return (
    <Link
      className={cn("text-white underline", props.className)}
      href={props.href}
    >
      {children}
    </Link>
  );
}

export default CustomLink;
