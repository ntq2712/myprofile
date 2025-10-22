/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
"use client";
import apiUrl from "@/api/apiUrl";
import { getCaseStudyList } from "@/api/case-study";
import ApiService from "@/api/config";
import { useMutation, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";
import { FaTrash } from "react-icons/fa";
import AddCaseStudy from "./AddCaseStudy";

function CaseStudyList() {
  const { data, isLoading, refetch } = useQuery({
    queryKey: [apiUrl.caseStudy.getList],
    queryFn: () => getCaseStudyList().then((res) => res.data),
  });

  const deleteCaseStudyMutation = useMutation({
    mutationFn: (id: string) =>
      ApiService.instance
        .delete<ApiResponse<boolean>>(apiUrl.caseStudy.deleteCaseStudy(id))
        .then((res) => res),
    onSuccess: () => {
      refetch();
    },
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Introduction</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading &&
            data?.map((e) => (
              <tr key={e.id} className="border-t-[1px] border-t-black">
                <td className="w-52 flex items-center justify-center font-bold hover:text-blue-500">
                  <Link href={`/admin/case-study/${e.id}`}>{e.title}</Link>
                </td>
                <td>{e.introduction}</td>
                <td className="w-32 flex items-center justify-center">
                  {e.caseStudyType.name}
                </td>
                <td>
                  <AddCaseStudy value={e} type='edit'/>
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      deleteCaseStudyMutation.mutateAsync(e.id);
                    }}
                  >
                    <FaTrash className="text-red" />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default CaseStudyList;
