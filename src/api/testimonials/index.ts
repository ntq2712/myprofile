/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import apiUrl from "../apiUrl";
import ApiService from "../config";

export const createTestimonial = (body: unknown) => {
  return ApiService.instance.post(apiUrl.testimonial.create, body);
};

export const getAllTestimonial = () => {
  return ApiService.instance.get<ApiResponse<Testimonial[]>>(apiUrl.testimonial.getAll);
};
