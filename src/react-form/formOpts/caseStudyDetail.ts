/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import { formOptions } from "@tanstack/react-form";

interface ICaseStudyDetail {
  index: number;
  content: string;
  thumbnail: string;
  title: string;
}

const defaultValues: ICaseStudyDetail = {
  index: 0,
  content: "",
  thumbnail: "",
  title: "",
};

export const caseStudyDetailOpt = formOptions({
  defaultValues,
});
