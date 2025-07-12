/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import ApiServece from "../config";

export async function uploadImage(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await ApiServece.instance.uploadFile<ApiResponse<string>>("api/Upload/UploadImage",formData)
  
  return response
}

