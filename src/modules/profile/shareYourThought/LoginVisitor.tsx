/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
"use client";

import useAppForm from "@/react-form/formContext";
import { ILogin, loginOpt } from "@/react-form/formOpts/login";
import { useState } from "react";
import z from "zod";
import ResgiterVisitor from "./ResgiterVisitor";

const loginSchema = z.object({
  userName: z.string().min(5, "Required minimum 5 characters"),
  password: z.string().min(5, "Required minimum 5 characters"),
});

function LoginVisitor({ onLogin }: { onLogin: (value: ILogin) => void }) {
  const [isLogin, setIsLogin] = useState(true);

  const hookForm = useAppForm({
    ...loginOpt,
    validators: {
      onSubmit: loginSchema,
    },
    onSubmit: ({ value }) => {
      onLogin(value);
    },
  });

  return (
    <>
      {isLogin ? (
        <>
          <p className="text-xl font-ibm font-semibold">Login Visitor</p>
          <form
            className="w-full h-fit flex flex-col gap-4"
            method="POST"
            onSubmit={(e) => {
              e.stopPropagation();
              e.preventDefault();

              hookForm.handleSubmit();
            }}
          >
            <div className="flex flex-col gap-1 w-full">
              <hookForm.AppField name="userName">
                {(field) => (
                  <field.TextField
                    label="Account"
                    inputType="text"
                    placeholder="Enter account"
                  />
                )}
              </hookForm.AppField>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <hookForm.AppField name="password">
                {(field) => (
                  <field.TextField
                    label="Password"
                    inputType="password"
                    placeholder="Enter password"
                  />
                )}
              </hookForm.AppField>
            </div>
            <div className="flex flex-col gap-1">
              <button
                type="submit"
                className="h-12 flex items-center justify-center w-full text-md font-semibold text-light font-ibm bg-[#3F8E00] hover:bg-[#4a9d2c] rounded-lg active:bg-[#223612]"
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className="text-sm font-ibm text-blue-700 underline"
              >
                Resgiter visitor
              </button>
            </div>
          </form>
        </>
      ) : (
        <ResgiterVisitor backToLogin={() => setIsLogin(true)} />
      )}
    </>
  );
}

export default LoginVisitor;
