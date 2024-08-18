"use client";
import React, { useEffect, useState } from "react";
import Button from "../button";
import { Separator } from "../../components/ui/separator";
import { LoadingSpinner } from "../../components/ui/loading-spinner";
import { useToast } from "../../components/ui/use-toast";
import { Toaster } from "../ui/toaster";
import Input from "../../components/input";
import InputContainer from "../../components/inputContainer";
import Label from "../../components/label";
import ErrorMessage from "../errorMessage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FaFacebookF } from "react-icons/fa"; // Import Facebook icon
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  function _showPassword() {
    setShowPassword(!showPassword);
  }

  const router = useRouter();
  const callbackUrl = decodeURI(router.query?.callbackUrl ?? "/protected");
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors, isSubmitting, isSubmitSuccessful } = formState;

  const [errorMessage, setErrorMessage] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  async function onSubmit(data) {
    const loginData = {
      email: data.email,
      password: data.password,
      callbackUrl: callbackUrl ?? "/protected",
      redirect: false,
    };
    try {
      const result = await signIn("credentials", loginData);
      if (result?.ok) {
        setLoginSuccess(true);
        setSuccessMessage("Login Successful");
        setTimeout(() => {
          router.push(callbackUrl);
        }, 3000);
      } else {
        setErrorMessage("Invalid credentials");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const { toast } = useToast();
  useEffect(() => {
    if (loginSuccess) {
      toast({
        description: successMessage,
      });
    }
  }, [loginSuccess, successMessage, toast]);

  return (
    <div className="form-container flex flex-col items-center justify-center gap-4 h-screen">
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
                signIn("facebook"); // Use "facebook" for Facebook sign-in
              }}
            >
              <FaFacebookF />
              <p>Sign in with Facebook</p>
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
              "Login"
            )}
          </Button>
        </form>
      </main>
      <footer>
        <p>
          Forgot your password?{" "}
          <Link href="/forgot-password" className="text-burgendy underline">
            Reset it here
          </Link>
        </p>
      </footer>
    </div>
  );
}

export default LoginForm;
