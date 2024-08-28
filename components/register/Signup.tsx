"use client";
import React, { useEffect, useState } from "react";
import Button from "../button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Separator } from "../ui/separator";
import Input from "../input";
import InputContainer from "../inputContainer";
import Label from "../label";
import { useForm } from "react-hook-form";
import ErrorMessage from "../errorMessage";

import Link from "next/link";
import { LoadingSpinner } from "../ui/loading-spinner";
import { _createNewUser } from "../../models/user.model";
import { Toaster } from "../../components/ui/toaster";
import { useToast } from "../ui/use-toast";
import { signIn } from "next-auth/react";
function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const form = useForm();
  const { register, handleSubmit, formState, reset } = form;
  const { errors, isSubmitting, isSubmitSuccessful } = formState;

  //handle form state
  useEffect(() => {
    if (isSubmitSuccessful) {
      setSuccessMessage("Account created successfully!");
      setErrorMessage("");
    }
  }, [isSubmitSuccessful]);

  //form submission
  async function onSubmit(data) {
    const formData = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      password: data.password,
    };

    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await _createNewUser(formData);

      if (response.error) {
        setErrorMessage(response.error);
      } else {
        setSuccessMessage(response.message);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  //handle toast message
  const { toast } = useToast();
  useEffect(() => {
    if (successMessage) {
      toast({
        description: successMessage,
      });
    }
  }, [toast, successMessage]);

  return (
    <div className="form-container flex flex-col items-center justify-center gap-4">
      <Toaster />
      <header className="flex flex-col items-center justify-center">
        <p>Welcome</p>
        <p>Please sign up to continue</p>
      </header>
      <main className="w-9/12">
        <form
          action=""
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
          onChange={() => {
            setErrorMessage("");
            setSuccessMessage("");
          }}
        >
          <aside className="flex flex-col gap-4">
            <Button
              className="hover:bg-gray-3 w-full hover:bg-gray-100"
              onClick={(e) => {
                e.preventDefault();
                signIn("google");
              }}
              disabled={isSubmitting}
            >
              <FcGoogle />
              <p>Sign up with Google</p>
            </Button>
            <Button
              className="hover:bg-gray-3 w-full hover:bg-gray-100"
              onClick={(e) => {
                e.preventDefault();
                signIn("github");
              }}
              disabled={isSubmitting}
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
          <InputContainer className="gap-3">
            <div>
              <label>First name*</label>
              <Input
                placeholder="Enter your first name"
                name="firstname"
                type="text"
                id="firstname"
                className=""
                validation={{
                  required: {
                    value: true,
                    message: "First name is required",
                  },
                }}
                register={register}
              />
              {errors.firstname && (
                <ErrorMessage>{errors.firstname.message}</ErrorMessage>
              )}
            </div>
            <div>
              <Label htmlFor="lastname" className="">
                Lastname*
              </Label>
              <Input
                placeholder="Enter your last name"
                name="lastname"
                validation={{
                  required: {
                    value: true,
                    message: "Last name is required",
                  },
                }}
                type="text"
                className=""
                id="lastname"
                register={register}
              />
              {errors.lastname && (
                <ErrorMessage>{errors.lastname.message}</ErrorMessage>
              )}
            </div>
          </InputContainer>

          <InputContainer className="flex-col gap-1">
            <Label htmlFor="email" className="">
              Email*
            </Label>
            <Input
              id="email"
              className=""
              type="email"
              placeholder="Enter your email"
              name="email"
              validation={{
                required: {
                  value: true,
                  message: "Email is required",
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
            <Label htmlFor="password" className="">
              Password*
            </Label>
            <Input
              id="password"
              className=""
              placeholder="create a password"
              type={showPassword ? "text" : "password"}
              name="password"
              validation={{
                required: {
                  value: true,
                  message: "Password is required",
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
                name="showPassword"
                id="showPassword"
                onClick={handleShowPassword}
              />
              <label htmlFor="showPassword" className="text-sm font-normal">
                Show password
              </label>
            </div>
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            <div>
              <p className="text-sm">Must be at least 8 characters</p>
            </div>
          </InputContainer>
          <Button
            onClick={(e) => {
              e.preventDefault();
            }}
            className={`bg-burgendy font-bold leading-6 text-white`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <LoadingSpinner className="h-5 w-5 text-white" />
            ) : (
              "create account"
            )}
          </Button>
        </form>
      </main>
      <footer>
        <p>
          Already got an account?{" "}
          <Link href="/login" className="text-burgendy underline">
            {" "}
            login
          </Link>
        </p>
      </footer>
    </div>
  );
}

export default SignupForm;
