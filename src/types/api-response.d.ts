/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

type ApiResponse<T> = {
  status: number;
  success: boolean;
  data: T
  message: "Success";
  pageIndex: number;
  pageSize: number;
  totalRow: number;
  searchText: string;
};
