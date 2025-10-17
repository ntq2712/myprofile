/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
"use client";
import apiUrl from "@/api/apiUrl";
import { getAllGetInTouch } from "@/api/get-in-touch";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import React from "react";

function GetInTouchList() {
  const { isLoading, data } = useQuery({
    queryKey: [apiUrl.getInTouch.getAll],
    queryFn: () => getAllGetInTouch(),
  });
  return (
    <table className="w-full h-fit">
      <thead>
        <tr className="border-b-[1px] border-b-slate-500">
          <th className="border-r-[1px] border-r-slate-500">Email</th>
          <th className="border-r-[1px] border-r-slate-500">Phone Number</th>
          <th className="border-r-[1px] border-r-slate-500">Messgase</th>
          <th className="border-r-[1px] border-r-slate-500">Date</th>
        </tr>
      </thead>
      <tbody>
        {!isLoading &&
          data &&
          data.data.map((e) => (
            <tr key={e.id} className="border-b-[1px] border-b-slate-500">
              <td className="border-r-[1px] border-r-slate-500 flex items-center justify-center">{e.email}</td>
              <td className="border-r-[1px] border-r-slate-500 pl-2">{e.moblie}</td>
              <td className="border-r-[1px] border-r-slate-500 flex items-center justify-center">{e.message}</td>
              <td className="pl-2">{moment(e.createAt).format("DD/MM/YYYY HH:mm")}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default GetInTouchList;
