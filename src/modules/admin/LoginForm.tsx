/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
"use client";

import { signIn } from "@/api/auth";
import ApiService from "@/api/config";
import useAppForm from "@/react-form/formContext";
import { loginOpt } from "@/react-form/formOpts/login";
import { useRouter } from "next/navigation";
import z from "zod";

const loginSchema = z.object({
  userName: z.string().min(5, "Required minimum 5 characters"),
  password: z.string().min(5, "Required minimum 5 characters"),
});

function LoginForm() {
  const router = useRouter();

  const hookForm = useAppForm({
    ...loginOpt,
    validators: {
      onSubmit: loginSchema,
    },
    onSubmit: ({ value }) => {
      signIn(value).then(async (res) => {
        if (res.status === 200) {
          router.replace("/admin/dashboard");

          if (res.status === 200) {
            ApiService.instance.setToken(res.data);

            localStorage.setItem('accessToken', res.data)
          }
        }
      });
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
        <button
          type="submit"
          className="h-12 flex items-center justify-center w-full text-md font-semibold text-light font-ibm bg-[#3F8E00] hover:bg-[#4a9d2c] rounded-lg active:bg-[#223612]"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
