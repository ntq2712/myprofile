/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import apiUrl from "../apiUrl";
import ApiService from "../config";

export const createTestimonial = (body: unknown) => {
  return ApiService.instance.post(apiUrl.testimonial.create, body);
};

export const updateStatus = (body: unknown) => {
  return ApiService.instance.put<ApiResponse<boolean>>(apiUrl.testimonial.updateStatus, body);
};

export const getAllTestimonial = () => {
  return ApiService.instance.get<ApiResponse<Testimonial[]>>(apiUrl.testimonial.getAll);
};

export const getAllTestimonialFilter = (status: number) => {
  return ApiService.instance.get<ApiResponse<Testimonial[]>>(`${apiUrl.testimonial.getAllByFilter}?=status=${status}`);
};
