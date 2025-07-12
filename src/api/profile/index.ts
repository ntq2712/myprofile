/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import apiUrl from "../apiUrl";
import ApiServece from "../config";

export const getProfile = () => {
  return ApiServece.instance.get<ApiResponse<Information>>(apiUrl.profile.get);
};

export const updateProfile = (body: Record<string, unknown>) => {
  return ApiServece.instance.put<ApiResponse<Information>>(
    apiUrl.profile.update,
    body
  );
};
