/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import { formOptions } from "@tanstack/react-form";

interface Testimonial {
  content: string;
  userId: string;
}

const defaultValues: Testimonial = {
  content: "",
  userId: "",
};

export const testimonialOpt = formOptions({ defaultValues });
