/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import useAppForm from "@/react-form/formContext";
import { getInTouchOpt } from "@/react-form/formOpts/getInTouch";
import React from "react";
import z from "zod";
import { getInTouch } from "../../api/get-in-touch/index";
import { useMutation } from "@tanstack/react-query";

const validate = z.object({
  email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
    message: "Email is not corret format.",
  }),
  moblie: z.string(),
  message: z.string().min(10, "Minimum 10 characters"),
});

function GetInTouch() {
  const form = useAppForm({
    ...getInTouchOpt,
    validators: {
      onSubmit: validate,
    },
    onSubmit(props) {
      getInTouchMuation.mutateAsync(props.value);
    },
  });

  const getInTouchMuation = useMutation({
    mutationFn: (body: unknown) => getInTouch(body),
    onSuccess() {
      form.reset();
    },
    onError() {},
  });

  return (
    <div className="w-full bg-black flex items-center justify-center pt-12 pb-12">
      <div className="w-[70vw] h-fit flex flex-col items-center justify-start gap-20">
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="text-[32px] text-light font-ibm">Get In Touch</div>
          <div className="text-primary text-xs font-ibm max-w-[40vw] flex-wrap text-center">
            Have an idea, a question, or just want to connect? Feel free to reach out — I’m always happy to chat and explore new possibilities.
          </div>
        </div>
        <form
          className="flex flex-col gap-4 w-[400px]"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <form.AppField name="email">
            {(child) => (
              <child.TextField
                label="Email"
                inputType="text"
                placeholder="Please enter your email"
              />
            )}
          </form.AppField>
          <form.AppField name="moblie">
            {(child) => (
              <child.TextField
                label="Phone"
                inputType="text"
                placeholder="Please enter your phone"
              />
            )}
          </form.AppField>
          <form.AppField name="message">
            {(child) => (
              <child.TextAreField
                label="Message"
                placeholder="Please enter your message"
              />
            )}
          </form.AppField>

          <button
            type="submit"
            className="shadow-sm shadow-[#62BA1B] mt-6 font-semibold text-[14px] text-light font-ibm w-full p-3 bg-[#3F8E00] hover:bg-[#3F8E00] rounded-lg active:bg-[#3F8E00]"
          >
            {getInTouchMuation.isPending ? "loading..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default GetInTouch;
