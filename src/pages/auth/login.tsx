import { NextPage } from "next";
import { signIn } from "next-auth/react";
import React, { useState } from "react";

import logger from "@/utils/logger";

import Button from "@/components/Button";
import Input from "@/components/Input";

type UserForm = {
  accountNum: string;
  email: string;
  password: string;
};

const LoginPage: NextPage = () => {
  const [userInfo, setUserInfo] = useState<UserForm>({
    accountNum: "",
    email: "",
    password: "",
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    // validate your userinfo
    event.preventDefault();

    const res = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    });

    logger(res);
  };

  const handleChange =
    (key: keyof UserForm) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setUserInfo((prev) => ({
        ...prev,
        [key]: event.target.value,
      }));
    };

  return (
    <div className="flex min-h-full flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-xl space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-blackOut">
            Sign in
          </h2>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm">
            <div className="mb-4">
              <Input
                label="Account Number"
                id="account-number"
                name="account-number"
                type="text"
                value={userInfo.accountNum}
                required
                onChange={handleChange("accountNum")}
                className="block w-full border-transparent px-3 py-2 text-blackOut placeholder-shishaCoal focus:border-transparent focus:ring-0 sm:text-sm"
                placeholder="Account number"
              />
              <span id="errMsg"></span>
            </div>
            <div className="mb-4">
              <Input
                label="Email Address"
                icon={{
                  src: "",
                  height: 0,
                  width: 0,
                }}
                id="email"
                name="email"
                type="email"
                value={userInfo.email}
                autoComplete="email"
                required
                onChange={handleChange("email")}
                className="block w-full border-transparent px-3 py-2 text-blackOut placeholder-shishaCoal focus:border-transparent focus:ring-0 sm:text-sm"
                placeholder="Email address"
              />
              <span id="errMsg"></span>
            </div>

            <div>
              <Input
                label="Password"
                id="password"
                name="password"
                type="password"
                value={userInfo.password}
                autoComplete="current-password"
                required
                onChange={handleChange("password")}
                className="block w-full border-transparent px-3 py-2 text-blackOut placeholder-shishaCoal focus:border-transparent focus:ring-0 sm:text-sm"
                placeholder="Password"
              />
              <span id="errMsg"></span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-improbable text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-blackOut"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <Button type="submit" className="w-full justify-center">
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
