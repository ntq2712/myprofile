/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
"use client";
import apiUrl from "@/api/apiUrl";
import { CreateCaseStudy, getCaseStudyType } from "@/api/case-study";
import PrimaryButon from "@/components/common/atomic/button/PrimaryButon";
import ImageUploader, {
    ImageUploaderRef,
} from "@/components/common/atomic/input/ImageUploader";
import Modal from "@/components/common/atomic/view/Modal";
import useAppForm from "@/react-form/formContext";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import z from "zod";
import {
    caseStudyOpt
} from "../../../react-form/formOpts/caseStudy";

const caseStudySchema = z.object({
  introduction: z.string().min(10, "not null"),
  thumbnail: z.string(),
  title: z.string().min(10, "not null"),
  type: z.string().min(10, "not null"),
});

function AddCaseStudy({
  openModal,
  setOpenModal,
}: {
  openModal: boolean;
  setOpenModal: () => void;
}) {
  const uploaderRef = useRef<ImageUploaderRef>(null);
  const queryClient = useQueryClient();

  const form = useAppForm({
    ...caseStudyOpt,
    validators: {
      onSubmit: caseStudySchema,
    },
    onSubmit: async ({ value }) => {
      console.log("values AddCaseStudy: ", value);
      const url = await uploaderRef.current?.upload();

      createCaseStudyMutaition.mutateAsync({ ...value, thumbnail: url });
    },
  });

  const { data, isLoading } = useQuery({
    queryKey: [apiUrl.caseStudy.getType],
    queryFn: () => getCaseStudyType().then((res) => res.data),
  });

  const createCaseStudyMutaition = useMutation({
    mutationFn: (body: Record<string, unknown>) => CreateCaseStudy(body),
    onSuccess: () => {
      form.reset();
      queryClient.invalidateQueries({
        queryKey: [apiUrl.caseStudy.getList],
        refetchType: "all",
      });
      setOpenModal();
    },
  });

  return (
    <Modal open={openModal} onClose={() => setOpenModal()}>
      <form
        className="w-md h-fit flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();

          form.handleSubmit();
        }}
      >
        <ImageUploader ref={uploaderRef} />
        <form.AppField name="title">
          {(child) => <child.TextField label="Title" inputType="text" />}
        </form.AppField>
        <form.AppField name="introduction">
          {(child) => <child.TextField label="Introduction" inputType="text" />}
        </form.AppField>
        <form.AppField name="type">
          {(child) => (
            <select
              value={child.state.value}
              onChange={(e) => {
                e.preventDefault();
                e.stopPropagation();
                child.setValue(e.target.value);
              }}
              onSelect={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              className="h-9 w-full font-ibm text-black rounded-md"
            >
              <option>---Select---</option>
              {!isLoading &&
                data &&
                data.map((e) => (
                  <option
                    key={e.id}
                    value={e.id}
                    className={`bg-[${e.uiMetadata.color}]`}
                  >
                    {e.name}
                  </option>
                ))}
            </select>
          )}
        </form.AppField>

        <PrimaryButon type="submit">Summit</PrimaryButon>
      </form>
    </Modal>
  );
}

export default AddCaseStudy;
