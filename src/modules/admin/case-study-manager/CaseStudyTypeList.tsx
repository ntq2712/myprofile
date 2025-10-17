/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
"use client";
import apiUrl from "@/api/apiUrl";
import { getCaseStudyType } from "@/api/case-study";
import { useQuery } from "@tanstack/react-query";
import React from "react";

function CaseStudyTypeList() {
  const { data, isLoading } = useQuery({
    queryKey: [apiUrl.caseStudy.getType],
    queryFn: () => getCaseStudyType().then((res) => res.data),
  });

  return (
    <table className="w-[500px] h-fit max-auto">
      <thead>
        <tr>
          <th>Name</th>

          <th>Color</th>

          <th>Color Light</th>

          <th>Index</th>
        </tr>
      </thead>
      <tbody>
        {!isLoading &&
          data?.map((e) => (
            <tr key={e.id}>
              <td>{e.name}</td>
              <td>
                <div className="flex flex-row gap-1 items-center">
                  {e.uiMetadata.color}{" "}
                  <div
                    className={`w-4 h-4 rounded-sm bg-[${e.uiMetadata.color}]`}
                  />
                </div>
              </td>
              <td>
                <div className="flex flex-row gap-1 items-center">
                  {e.uiMetadata.colorLight}{" "}
                  <div
                    className={`w-4 h-4 rounded-sm bg-[${e.uiMetadata.colorLight}]`}
                  />
                </div>
              </td>
              <td>{e.uiMetadata.index}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default CaseStudyTypeList;
