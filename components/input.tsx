"use client";
import React from "react";
import { useState } from "react";
import { cn } from "../lib/utils";
function Input({ ...props }) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-1 w-full">
      {props.label && <label htmlFor={props.id}>{props.label}</label>}

      <div
        className={cn(
          "flex h-10 items-center rounded-md border border-white text-base duration-150 lg:h-12",
          isFocused
            ? "border-[2px] border-brand-color-green"
            : "bg-gray-10 border-gray-300 outline-none",

          props.className
        )}
      >
        <input
          type={props.type === "password" && showPassword ? "text" : props.type}
          placeholder={props.placeholder}
          name={props.name}
          id={props.id}
          onBlur={() => {
            setIsFocused(false);
          }}
          onFocus={() => {
            setIsFocused(true);
          }}
          className={cn(
            "w-full flex-1 border-none bg-transparent p-2 text-base outline-none placeholder:text-gray-400",
            props.className
          )}
        />
      </div>

      {props.type === "password" && (
        <div className="my-2 flex flex-row items-center gap-2 self-start">
          <input
            type="checkbox"
            onChange={() => {
              setShowPassword(!showPassword);
            }}
            id="showPassword"
          />
          <label htmlFor="showPassword">Show password</label>
        </div>
      )}
      {props.type === "password" && (
        <p className="text-xs font-bold">
          *Password must be at least 8 characters
        </p>
      )}
    </div>
  );
}

export default Input;
