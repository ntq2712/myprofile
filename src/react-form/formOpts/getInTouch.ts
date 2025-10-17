/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import { formOptions } from "@tanstack/react-form";

interface GetInTouch {
  email: string;
  moblie: string;
  message: string;
}

const defaultValues: GetInTouch = {
  email: "",
  moblie: "",
  message: "",
};

export const getInTouchOpt = formOptions({ defaultValues });
