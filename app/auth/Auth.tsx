"use client";
import Image from "next/image";
import React, { useState, useCallback } from "react";
import Input from "../components/input/Input";
import axios from "axios";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);
  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        callbackUrl: "/profile",
      });
    } catch (error) {
      console.log(error);
    }
  }, [email, password]);
  const register = useCallback(async () => {
    try {
      const data = await axios.post("/api/auth/register", {
        email,
        name,
        password,
      });

      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password, login]);

  return (
    <div
      className="relative h-full w-full bg-cover bg-no-repeat bg-center bg-fixed bg-[url('/assets/images/hero.jpg')] "
      style={{ minHeight: "100vh" }}
    >
      <div
        className="bg-black w-full h-full lg:bg-opacity-50"
        style={{ minHeight: "100vh" }}
      >
        <nav className="px-12 py-5 ">
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={100}
            height={100}
          />
        </nav>
        <div className="flex justify-center">
          <div className="p-16 bg-black bg-opacity-70 self-center mt-2 lg:w-2/5 lg:max-w-md w-full rounded-md">
            <h2 className="text-white text-4xl font-semibold mb-8">
              {variant === "login" ? "Sign in" : "Register"}
            </h2>

            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  label="Username"
                  id="name"
                  type="name"
                  value={name}
                  onChange={(e: any) => setName(e.target.value)}
                />
              )}

              <Input
                label="Email or Phone Number"
                id="email"
                type="email"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
              />
              <Input
                label="Password"
                id="password"
                type="password"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
              />
              <button
                onClick={variant === "login" ? login : register}
                className="text-white text-xl bg-red-600 hover:bg-red-700 transition py-3 rounded-md mt-10 font-semibold mb-2"
              >
                {variant === "login" ? "Login" : "Sign Up"}
              </button>
              <div
                onClick={() => signIn("google", { callbackUrl: "/profile" })}
                className="flex flex-row items-center gap-4 mt-8 justify-center"
              >
                <div className="flex cursor-pointer hover:opacity-80 transition items-center justify-center rounded-full bg-white ">
                  <FcGoogle size={30} />
                </div>
                <div
                  onClick={() => signIn("github", { callbackUrl: "/profile" })}
                  className="flex cursor-pointer hover:opacity-80 transition items-center justify-center rounded-full bg-white "
                >
                  <FaGithub size={30} />
                </div>
              </div>
              <p className="text-neutral-500 mt-12">
                {variant === "login"
                  ? "First time using Netflix?"
                  : "Already have an Account?"}
                <span
                  onClick={toggleVariant}
                  className="text-white ml-1 hover:underline cursor-pointer"
                >
                  {variant === "login" ? "Create an Account" : "Login"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
