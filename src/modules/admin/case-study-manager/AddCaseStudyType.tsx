/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
"use client";
import apiUrl from "@/api/apiUrl";
import { CreateCaseStudyType } from "@/api/case-study";
import PrimaryButon from "@/components/common/atomic/button/PrimaryButon";
import Modal from "@/components/common/atomic/view/Modal";
import useAppForm from "@/react-form/formContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { caseStudyTypeOpt } from "../../../react-form/formOpts/caseStudy";

function AddCaseStudyType() {
  const queryClient = useQueryClient();

  const [openModal, setOpenModal] = useState(false);

  const openAddCaseStudy = () => {
    setOpenModal(true);
  };

  const form = useAppForm({
    ...caseStudyTypeOpt,
    onSubmit: async ({ value }) => {
      console.log("values AddCaseStudy: ", value);

      createCaseStudyMutaition.mutateAsync(value);
    },
  });

  const createCaseStudyMutaition = useMutation({
    mutationFn: (body: unknown) => CreateCaseStudyType(body),
    onSuccess: () => {
      form.reset();
      queryClient.invalidateQueries({
        queryKey: [apiUrl.caseStudy.getType],
        refetchType: "all",
      });
      setOpenModal(false);
    },
  });

  return (
    <>
      <PrimaryButon onClick={openAddCaseStudy}>
        Add Case Study Type
      </PrimaryButon>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <form
          className="w-md h-fit flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();

            form.handleSubmit();
          }}
        >
          <form.AppField name="name">
            {(child) => <child.TextField label="Name" inputType="text" />}
          </form.AppField>
          <form.AppField name="color">
            {(child) => <child.TextField label="Color" inputType="text" />}
          </form.AppField>
          <form.AppField name="colorLight">
            {(child) => (
              <child.TextField label="Color Light" inputType="text" />
            )}
          </form.AppField>
          <form.AppField name="index">
            {(child) => <child.TextField label="Index" inputType="number" />}
          </form.AppField>

          <PrimaryButon type="submit">Summit</PrimaryButon>
        </form>
      </Modal>
    </>
  );
}

export default AddCaseStudyType;
