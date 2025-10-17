/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import apiUrl from "../apiUrl";
import ApiService from "../config";

export const getListGuest = (filter: {
  pageIndex: number;
  pageSize: number;
  searchText?: string;
  status: number | undefined;
}) => {
  const params = filter.status !== undefined
    ? {
        _pageIndex: filter.pageIndex,
        _pageSize: filter.pageSize,
        _searchText: filter.searchText,
        _status: filter.status,
      }
    : {
        _pageIndex: filter.pageIndex,
        _pageSize: filter.pageSize,
        _searchText: filter.searchText,
      };

  return ApiService.instance.get<ApiResponse<Guest[]>>(apiUrl.guest.getList, params);
};

export const getSummaryGuest = () => {
  return ApiService.instance.get<ApiResponse<SummaryGuest>>(
    apiUrl.guest.getSummaryGuest
  );
};

export const addListGuest = (body: unknown) => {
  return ApiService.instance.post<ApiResponse<Guest>>(apiUrl.guest.add, body);
};

export const updateListGuest = (body: Guest) => {
  return ApiService.instance.put<ApiResponse<Guest>>(apiUrl.guest.edit, body);
};

export const deleteGuest = (id: string) => {
  return ApiService.instance.delete<ApiResponse<Guest>>(
    apiUrl.guest.delete(id)
  );
};
