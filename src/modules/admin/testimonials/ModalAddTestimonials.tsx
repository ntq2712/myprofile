/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
"use client";
import apiUrl from "@/api/apiUrl";
import { getAllUser } from "@/api/auth";
import PrimaryButon from "@/components/common/atomic/button/PrimaryButon";
import Modal from "@/components/common/atomic/view/Modal";
import useAppForm from "@/react-form/formContext";
import { testimonialOpt } from "@/react-form/formOpts/testimonial";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { createTestimonial } from "../../../api/testimonials/index";
import z from "zod";

const validate = z.object({
    userId: z.string().min(10, "Requi"),
    content: z.string().min(10, "Minimum 10 char")
})

function ModalAddTestimonials() {
  const [open, setOpen] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: [apiUrl.user.getAll],
    queryFn: () => getAllUser().then((res) => res.data),
  });

  const form = useAppForm({
    ...testimonialOpt,
    validators: {
        onSubmit: validate
    },
    onSubmit(props) {
      console.log(props.value);
      createTestimonialMutation.mutateAsync(props.value);
    },
  });

  const createTestimonialMutation = useMutation({
    mutationFn: (body: unknown) => createTestimonial(body),
    onSuccess() {
      form.reset();
    },
  });

  return (
    <>
      <PrimaryButon onClick={() => setOpen(true)}>Add Testimonial</PrimaryButon>
      <Modal open={open} onClose={() => setOpen(false)}>
        <form
          className="flex flex-col gap-4 w-full"
          onSubmit={(e) => {
            e.stopPropagation();
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <form.AppField name="userId">
            {(child) => (
             <>
              <select onChange={(e) => child.setValue(e.target.value)}>
                <option value={"0000"}>---Chose----</option>
                {!isLoading &&
                  data &&
                  data.map((user) => (
                    <option key={user.userId} value={user.userId}>{user.fullName}</option>
                  ))}
              </select>
              {child.state.meta.errors && <em className="text-red-500 font-ibm text-[11px]">{child.state.meta.errors.map((err) => err?.message).join(",")}</em>}
             </>
            )}
          </form.AppField>
          <form.AppField name="content">
            {(child) => (
              <child.TextAreField
                label="What do you think?"
                placeholder="Enter your think"
              />
            )}
          </form.AppField>
          <PrimaryButon type="submit">Summit</PrimaryButon>
        </form>
      </Modal>
    </>
  );
}

export default ModalAddTestimonials;
