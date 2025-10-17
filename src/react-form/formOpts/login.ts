/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import { formOptions } from "@tanstack/react-form";

interface ILogin {
  userName: string; password: string
}

const defaultValues: ILogin = {
  userName: "",
  password: "",
};

export const loginOpt = formOptions({ defaultValues });
