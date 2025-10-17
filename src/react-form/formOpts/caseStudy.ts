/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import { formOptions } from "@tanstack/react-form";

export interface ICaseStudy {
  introduction: string;
  type: string;
  thumbnail: string;
  title: string;
}

interface ICaseStudyType {
  name: string;
  color: string;
  colorLight: string;
  index: 0;
  icon: string;
}

const defaultValues: ICaseStudy = {
  introduction: "",
  type: "",
  thumbnail: "",
  title: "",
};

const defaultTypeValues: ICaseStudyType = {
  name: "",
  color: "",
  colorLight: "",
  index: 0,
  icon: "",
};

export const caseStudyOpt = formOptions({ defaultValues });
export const caseStudyTypeOpt = formOptions({
  defaultValues: defaultTypeValues,
});
