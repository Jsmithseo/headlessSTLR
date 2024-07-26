import React from "react";
import Link from "next/link";

function RegisterLink({ children, className, href }) {
  return (
    <Link
      className={`${className} p-3 rounded-md border-none bg-slate-300`}
      href={href}
    >
      {children}
    </Link>
  );
}

export default RegisterLink;
