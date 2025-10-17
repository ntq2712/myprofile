/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import apiUrl from "../apiUrl"
import ApiService from "../config"

export const getInTouch = (body: unknown) => {
    return ApiService.instance.post(apiUrl.getInTouch.create,body)
}

export const getAllGetInTouch = () => {
    return ApiService.instance.get<ApiResponse<GetInTouch[]>>(apiUrl.getInTouch.getAll)
};