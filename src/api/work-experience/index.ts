/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import apiUrl from "../apiUrl";
import ApiService from "../config";

export const createWorkExperience = (body: unknown) => {
    return ApiService.instance.post(apiUrl.workExperience.create,body)
};

export const updateWorkExperience = (body: unknown) => {
    return ApiService.instance.put(apiUrl.workExperience.update,body)
};

export const getAllWorkExperience = () => {
    return ApiService.instance.get<ApiResponse<WorkExperience[]>>(apiUrl.workExperience.getAll)
};
