/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import { formOptions } from "@tanstack/react-form";

interface WorkExperience {
  companyName: string;
  startDate: string;
  endDate: string;
  introduction: string;
  thumbnail: string;
  title: string;
}

const defaultValues: WorkExperience = {
  companyName: "",
  startDate: "",
  endDate: "",
  introduction: "",
  thumbnail: "",
  title: "",
};

export const workExperienceOtp = formOptions({ defaultValues });
