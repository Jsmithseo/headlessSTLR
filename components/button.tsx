import React from "react";

function Button({ children, ...props }) {
  return (
    <button
      className={`${
        props.className
      } flex w-full items-center justify-center gap-3 rounded-lg border-[1px] border-solid border-gray-300 px-5 py-2 ${
        props.disabled ? "cursor-not-allowed bg-gray-300" : ""
      } `}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {children}
    </button>
  );
}

export default Button;
