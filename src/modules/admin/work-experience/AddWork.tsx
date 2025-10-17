/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
"use client";
import useAppForm from "@/react-form/formContext";
import React, { useRef } from "react";
import { workExperienceOtp } from "../../../react-form/formOpts/workExperience";
import ImageUploader, {
  ImageUploaderRef,
} from "@/components/common/atomic/input/ImageUploader";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createWorkExperience } from "@/api/work-experience";
import PrimaryButon from "@/components/common/atomic/button/PrimaryButon";
import apiUrl from "@/api/apiUrl";

function AddWork() {
  const imageRef = useRef<ImageUploaderRef>(null);
  const queryClient = useQueryClient()

  const form = useAppForm({
    ...workExperienceOtp,
    onSubmit: async({ value }) => {
      console.log("values: ", value);
      const url = await imageRef.current?.upload()

      createWorkExperienceMutation.mutateAsync({...value, thumbnail: url})
    },
  });

  const createWorkExperienceMutation = useMutation({
    mutationFn: (body: unknown) => createWorkExperience(body),
    onSuccess() {
        queryClient.invalidateQueries({
            queryKey: [apiUrl.workExperience.getAll],   
            refetchType: 'all'
        })

        form.reset()
    },
    onError() {},
  });

  return (
    <div className="">
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
            <ImageUploader ref={imageRef} />
          </div>
        </div>

        <form.AppField name="introduction">
          {(child) => <child.TextAreField label="Introduction" />}
        </form.AppField>

        <PrimaryButon type='submit'>Summit</PrimaryButon>
      </form>
    </div>
  );
}

export default AddWork;
