"use client";
import React from "react";
import { cn } from "../../lib/utils";
import { useState } from "react";
import Label from "../label";

function input({
  className,
  icon,
  error,
  label,
  register,

  ...props
}) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      {label && (
        <Label htmlFor={props.id} className="">
          {label}
        </Label>
      )}
      <div
        className={cn(
          "flex h-10 w-full items-center overflow-clip rounded-lg border border-gray-200 text-base outline duration-150",
          isFocused
            ? "border-burgendy outline-[1px]"
            : " outline-none bg-gray-100 border-gray-300",
          className
        )}
      >
        {icon && (
          <label
            htmlFor={props.id}
            className={cn(
              "grid aspect-square h-full flex-shrink-0 cursor-pointer place-content-center self-stretch text-gray-400"
            )}
          >
            {icon}
          </label>
        )}

        <input
          type={props.type}
          {...register(props.name, props.validation)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={props.placeholder}
          className={cn(
            "h-full w-full flex-1 border-0 bg-transparent py-3 pr-4 text-sm text-baseBlack outline-none placeholder:text-gray-400",
            props.type !== "password" ? "pr-3" : "pr-1",
            !icon && "pl-3"
          )}
        />
      </div>
    </>
  );
}

export default input;
