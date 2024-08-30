"use client";
import React, { useEffect } from "react";
import Button from "../button";

import { Separator } from "../../components/ui/separator";
import { LoadingSpinner } from "../../components/ui/loading-spinner";
import { useToast } from "../../components/ui/use-toast";
import { Toaster } from "../ui/toaster";

import Input from "../../components/input";
import InputContainer from "../../components/inputContainer";
import Label from "../../components/label";
import ErrorMessage from "../errorMessage";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { signIn, useSession } from "next-auth/react";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  function _showPassword() {
    setShowPassword(!showPassword);
  }

  //useSession to get user status and session data then useRouter to get route definitions
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated" && session?.user?.id) {
      router.push(`/profile/${session.user.id}`);
    }
  }, [status, session]);

  const form = useForm();

  const { register, handleSubmit, formState } = form;
  const { errors, isSubmitting, isSubmitSuccessful } = formState;

  //states for server messages

  const [errorMessage, setErrorMessage] = useState("");
  const [loginSuccess, setloginSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  //router to navigate programatically on successful login
  // const router = useRouter();
  async function onSubmit(data) {
    const loginData = {
      email: data.email,
      password: data.password,
      redirect: false,
    };
    try {
      const result = await signIn("credentials", loginData);
      // console.log(loginData);
      console.log(result);
      if (result?.ok) {
        setloginSuccess(true);
        setSuccessMessage("Login Successfull");
      } else {
        setErrorMessage("Invalid credentials");
      }
    } catch (error) {
      console.log(error);
    }
  }

  //show toast on successful login
  const { toast } = useToast();
  useEffect(() => {
    if (loginSuccess) {
      toast({
        description: successMessage,
      });
    }
  }, [loginSuccess, successMessage, toast]);

  //handling GitHub OAuth

  return (
    <div className="form-container flex  flex-col items-center justify-center gap-4 h-screen">
      <Toaster />
      <header className="">
        <p>Welcome</p>
        <p>Please sign in to continue</p>
      </header>
      <main className="">
        <form
          action=""
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <aside className="flex flex-col gap-4">
            <Button
              className="hover:bg-gray-3 w-full hover:bg-gray-100"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <FcGoogle />
              <p>Sign in with Google</p>
            </Button>
            <Button
              className="hover:bg-gray-3 w-full hover:bg-gray-100"
              onClick={(e) => {
                e.preventDefault();
                signIn("github");
              }}
            >
              <FaGithub />
              <p>Sign in with GitHub</p>
            </Button>
            <div
              id="separator"
              className="flex min-w-min flex-row items-center justify-center gap-5"
            >
              <Separator className="w-48" /> <span>OR</span>{" "}
              <Separator className="w-48" />
            </div>
          </aside>

          <InputContainer className="flex-col gap-1">
            <Label>Email*</Label>
            <Input
              placeholder="Enter your email"
              name="email"
              validation={{
                required: {
                  value: true,
                  message: "Email field cannot be empty",
                },
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Please enter a valid email",
                },
              }}
              register={register}
            />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </InputContainer>
          <InputContainer className="flex-col gap-1">
            <Label>Password*</Label>
            <Input
              placeholder="Enter your password"
              type={showPassword ? "text" : "password"}
              name="password"
              validation={{
                required: {
                  value: true,
                  message: "Password field cannot be empty",
                },
              }}
              register={register}
            />
            {errors.password && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}
            <div className="flex flex-row gap-2">
              <input
                type="checkbox"
                className=""
                name="password"
                id="show_password_checkbox"
                onClick={_showPassword}
              />

              <label
                htmlFor="show_password_checkbox"
                className="text-sm font-normal"
              >
                Show password
              </label>
            </div>
          </InputContainer>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <Button
            className="bg-burgendy font-bold leading-6 text-white"
            disabled={isSubmitting || successMessage}
          >
            {isSubmitting ? (
              <LoadingSpinner className="h-5 w-5 text-white" />
            ) : (
              "login"
            )}
          </Button>
        </form>
      </main>
      <footer>
        <p>
          New here?{" "}
          <Link href="/register" className="text-burgendy underline">
            register
          </Link>
        </p>
      </footer>
    </div>
  );
}

export default LoginForm;
