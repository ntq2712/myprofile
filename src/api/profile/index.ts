/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import apiUrl from "../apiUrl";
import ApiService from "../config";

export const getProfile = () => {
  return ApiService.instance.get<ApiResponse<Information>>(apiUrl.profile.get);
};

export const updateProfile = (body: Record<string, unknown>) => {
  return ApiService.instance.put<ApiResponse<Information>>(
    apiUrl.profile.update,
    body
  );
};
