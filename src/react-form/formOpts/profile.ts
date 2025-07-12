/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import { formOptions } from "@tanstack/react-form";

interface IProfile {
  fullName: string;
  birthDay: string;
  introduction: string;
  mySkills: Skill[];
}

const defaultValues: IProfile = {
  fullName: "",
  birthDay: "2001-01-02",
  introduction: "",
  mySkills: [{ name: "ReactJs", image: "", link: "" }],
};

export const profileOpt = formOptions({ defaultValues });
