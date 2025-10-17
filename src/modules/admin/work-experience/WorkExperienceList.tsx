/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
"use client";
import apiUrl from "@/api/apiUrl";
import { getAllWorkExperience } from "@/api/work-experience";
import { useQuery } from "@tanstack/react-query";
import { FaTrash } from "react-icons/fa";
import ModalAddWork from "./ModalAddWork";
import Image from "next/image";

function WorkExperienceList() {
  const { isLoading, data } = useQuery({
    queryKey: [apiUrl.workExperience.getAll],
    queryFn: () => getAllWorkExperience().then((res) => res.data),
  });

  return (
    <div className="flex w-full pr-4">
      <table className="w-full gap-4">
        <thead>
          <tr>
            <th>Title</th>
            <th>Company Name</th>
            <th>Introduction</th>
            <th>Image</th>
            <th>Start date</th>
            <th>End Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading &&
            data &&
            data.map((e) => (
              <tr key={e.id}>
                <td>{e.title}</td>
                <td>{e.companyName}</td>
                <td>{e.introduction}</td>
                <td>
                  <Image
                    src={e.thumbnail ?? ""}
                    alt="thumbnail"
                    width={208} // w-52 = 52 * 4 = 208px
                    height={80} // h-20 = 20 * 4 = 80px
                    className="object-cover w-52 h-20"
                    unoptimized // 👈 cần nếu src là blob, base64, hoặc URL ngoài domain cho phép
                  />
                </td>
                <td>{e.startDate}</td>
                <td>{e.endDate}</td>
                <td className="flex flex-row gap-2">
                  <ModalAddWork item={e} />
                  <button className="text-[#a71a1a]">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default WorkExperienceList;
