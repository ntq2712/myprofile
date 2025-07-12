/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import { formOptions } from "@tanstack/react-form";

interface ILogin {
  account: string;
  password: string;
}

const defaultValues: ILogin = {
  account: "",
  password: "",
};

export const loginOpt = formOptions({ defaultValues });
