/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
"use client";

import React from "react";
import MyEditor from "@/components/common/atomic/input/MyEditor";
import ImageUploader from "@/components/common/atomic/input/ImageUploader";
import useAppForm from "@/react-form/formContext";
import { caseStudyDetailOpt } from "../../../react-form/formOpts/caseStudyDetail";

function CaseStudyDetail() {
  const form = useAppForm({
    ...caseStudyDetailOpt,
    onSubmit() {},
  });
  return (
    <form
      className="pr-4"
      onSubmit={(e) => {
        e.preventDefault();
        e.preventDefault();

        form.handleSubmit();
      }}
    >
      <div>
        <ImageUploader />
      </div>
      <form.AppField name='title'>
        {child => <child.TextField label="Title" inputType='text'/>}
      </form.AppField>
      <form.AppField name='index'>
        {child => <child.TextField label="Title" inputType='number'/>}
      </form.AppField>
      <MyEditor />
    </form>
  );
}

export default CaseStudyDetail;
