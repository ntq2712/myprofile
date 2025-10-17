/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
"use client";
import apiUrl from "@/api/apiUrl";
import { updateWorkExperience } from "@/api/work-experience";
import PrimaryButon from "@/components/common/atomic/button/PrimaryButon";
import ImageUploader, {
  ImageUploaderRef,
} from "@/components/common/atomic/input/ImageUploader";
import Modal from "@/components/common/atomic/view/Modal";
import useAppForm from "@/react-form/formContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { workExperienceOtp } from "../../../react-form/formOpts/workExperience";

function ModalAddWork({ item }: { item: WorkExperience }) {
  const imageRef = useRef<ImageUploaderRef>(null);
  const queryClient = useQueryClient();

  const [open, setOpen] = useState(false);

  const form = useAppForm({
    ...workExperienceOtp,
    onSubmit: async ({ value }) => {
      console.log("values: ", value);
      const url = await imageRef.current?.upload();

      updateWorkExperienceMutation.mutateAsync({
        ...item,
        ...value,
        thumbnail: url,
      });
    },
  });

  useEffect(() => {
    if (item) {
      form.setFieldValue("companyName", item.companyName);
      form.setFieldValue("title", item.title);
      form.setFieldValue("introduction", item.introduction);
      form.setFieldValue("thumbnail", item.thumbnail);
      form.setFieldValue("endDate", moment(item.endDate).format("YYYY-MM-DD"));
      form.setFieldValue(
        "startDate",
        moment(item.startDate).format("YYYY-MM-DD")
      );
    }
  }, [item, form]);

  const updateWorkExperienceMutation = useMutation({
    mutationFn: (body: unknown) => updateWorkExperience(body),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: [apiUrl.workExperience.getAll],
        refetchType: "all",
      });

      form.reset();
    },
    onError() {},
  });

  return (
    <>
      <button
        className="text-[#bc9e22]"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(true);
        }}
      >
        <FaEdit />
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <form
          className="flex flex-col gap-4 pr-4"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();

            form.handleSubmit();
          }}
        >
          <div className="grid grid-cols-10 gap-4">
            <div className="col-span-6 flex flex-col gap-4">
              <form.AppField name="title">
                {(child) => <child.TextField label="Title" inputType="text" />}
              </form.AppField>
              <form.AppField name="companyName">
                {(child) => (
                  <child.TextField label="Company Name" inputType="text" />
                )}
              </form.AppField>
              <div className="flex flex-row gap-4">
                <form.AppField name="startDate">
                  {(child) => (
                    <child.TextField label="Start Date" inputType="date" />
                  )}
                </form.AppField>
                <form.AppField name="endDate">
                  {(child) => (
                    <child.TextField label="End Date" inputType="date" />
                  )}
                </form.AppField>
              </div>
            </div>
            <div className="col-span-4">
              <ImageUploader ref={imageRef} imageUrl={item.thumbnail} />
            </div>
          </div>

          <form.AppField name="introduction">
            {(child) => <child.TextAreField label="Introduction" />}
          </form.AppField>

          <PrimaryButon type="submit">Summit</PrimaryButon>
        </form>
      </Modal>
    </>
  );
}

export default ModalAddWork;
