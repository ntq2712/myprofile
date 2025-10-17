/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import apiUrl from "../apiUrl";
import ApiService from "../config";

export const getCaseStudyType = () => {
  return ApiService.instance.get<ApiResponse<CaseStudyType[]>>(
    apiUrl.caseStudy.getType
  );
};

export const getCaseStudyList = () => {
  return ApiService.instance.get<ApiResponse<CaseStudyFullValue[]>>(
    apiUrl.caseStudy.getList
  );
};

export const CreateCaseStudy = (body: unknown) => {
  return ApiService.instance.post<ApiResponse<CaseStudy>>(
    apiUrl.caseStudy.createCaseStudy,
    body
  );
};
export const CreateCaseStudyType = (body: unknown) => {
  return ApiService.instance.post<ApiResponse<CaseStudyType>>(
    apiUrl.caseStudy.createCaseStudyType,
    body
  );
};
