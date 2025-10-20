/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import { formOptions } from "@tanstack/react-form";

export interface ResgiterVisitor {
  fullName: string;
  companyName: string;
  positionTitle: string;
  email?: string;
  account: string;
  password: string;
}

const defaultValues: ResgiterVisitor = {
  fullName: "",
  companyName: "",
  positionTitle: "",
  email: "",
  account: "",
  password: "",
};

export const resgiterVisitorOtp = formOptions({ defaultValues });
