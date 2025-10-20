/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import ApiService from "../config";

export async function uploadImage(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await ApiService.instance.uploadFile<ApiResponse<string>>(
    "api/Upload/UploadImage",
    formData
  );

  return response;
}

export async function deleteImage(name: string) {
  const response = await ApiService.instance.delete<ApiResponse<boolean>>(
    `api/Upload/DelateImage?fileName=${name}`
  );

  return response;
}
