/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
"use client";
import apiUrl from "@/api/apiUrl";
import { getAllWorkExperience } from "@/api/work-experience";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import Image from "next/image";
import React from "react";

function WorkExperiences() {
  const { isLoading, data } = useQuery({
    queryKey: [apiUrl.workExperience.getAll],
    queryFn: () => getAllWorkExperience().then((res) => res.data),
  });

  return (
    <div className="w-full bg-white flex items-center justify-center pt-12 pb-12">
      <div className="w-[70vw] h-fit flex flex-col  gap-20">
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="text-dark text-4xl font-ibm font-semibold">
            Work Experience Highlights
          </div>
          <div className="text-primary text-xs font-ibm max-w-[40vw] flex-wrap text-center">
            I’ve been lucky to collaborate with some amazing teams and companies
            throughout my journey. Each place has left a unique mark on how I
            approach challenges and build software that matters.
          </div>
        </div>
        <div className="grid grid-cols-10 gap-5">
          <div className="col-span-1"></div>
          <div className="col-span-8 grid grid-cols-10 gap-5">
            {!isLoading &&
              data &&
              data.map((e) => (
                <div key={e.id} className="col-span-5 flex flex-col gap-5">
                  <div
                    className="relative w-full 
    2xl:h-[300px] xl:h-[300px] sm:h-[200px]
    rounded-lg overflow-hidden"
                  >
                    <Image
                      src={e.thumbnail ?? ""}
                      alt="thumbnail"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="text-[#080808] text-2xl font-ibm">
                      {e.companyName}
                    </div>
                    {/* <strong className="text-[#FFA217] text-xs font-ibm">{e.title}</strong> */}
                    <div className="text-[#2AB090] text-xs font-ibm">
                      {moment(e.startDate).format("YYYY/MM/DD")} -{" "}
                      {moment(e.endDate).format("YYYY/MM/DD")}
                    </div>
                  </div>

                  <div className="text-primary text-xs font-ibm">
                    {e.introduction}
                  </div>
                  <button className="shadow-sm shadow-[#62BA1B] mt-6 font-semibold text-[14px] text-light font-ibm w-60 p-3 bg-[#3F8E00] hover:bg-[#3F8E00] rounded-lg active:bg-[#3F8E00]">
                    View Company
                  </button>
                </div>
              ))}
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
    </div>
  );
}

export default WorkExperiences;
