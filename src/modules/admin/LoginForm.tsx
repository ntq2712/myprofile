/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
'use client';

import useAppForm from "@/react-form/formContext";
import { loginOpt } from "@/react-form/formOpts/login";
import { useRouter } from "next/navigation";
import React from "react";
import z from "zod";

const loginSchema = z.object({
  account: z.string().min(5, "Required minimum 5 characters"),
  password: z.string().min(5, "Required minimum 5 characters"),
});

function LoginForm() {
  const router = useRouter();

  const hookForm = useAppForm({
    ...loginOpt,
    validators: {
      onSubmit: loginSchema,
    },
    onSubmit: ({  }) => {
      router.replace("/admin/dashboard");
    },
  });

  return (
    <div className="w-[410px] h-[578px] gap-10 p-9 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-center flex-col">
      <h2 className="text-white text-2xl font-ibm font-semibold">Login</h2>
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
          <hookForm.AppField name="account">
            {(field) => <field.TextField label="Account" inputType="text" />}
          </hookForm.AppField>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <hookForm.AppField name="password">
            {(field) => (
              <field.TextField label="Password" inputType="password" />
            )}
          </hookForm.AppField>
        </div>
      </form>
      <button
        onClick={hookForm.handleSubmit}
        className="h-12 flex items-center justify-center w-full text-md font-semibold text-light font-ibm bg-[#3F8E00] hover:bg-[#4a9d2c] rounded-lg active:bg-[#223612]"
      >
        Login
      </button>
    </div>
  );
}

export default LoginForm;
