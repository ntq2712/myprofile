/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
"use client";
import React from "react";
import FadeCard from "../../components/common/atomic/card/FadeCard";
import { useQuery } from "@tanstack/react-query";
import { getAllTestimonial } from "@/api/testimonials";
import apiUrl from "@/api/apiUrl";
import Image from "next/image";

function Testimonials() {
  const { data, isLoading } = useQuery({
    queryKey: [apiUrl.testimonial.getAll],
    queryFn: () => getAllTestimonial().then((res) => res.data),
  });

  return (
    <div className="w-full bg-black flex items-center justify-center pt-12 pb-12">
      <div className="w-[60vw] min-h-[100vh] flex flex-col  gap-20">
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="text-[32px] text-light font-ibm">Testimonials</div>
          <div className="text-primary text-xs font-ibm max-w-[40vw] flex-wrap text-center">
            Over the years, I’ve had the privilege of working with amazing
            clients and teams. Here’s what they’ve said about our collaborations
            and results.
          </div>
        </div>
        <div className="grid grid-cols-10 gap-8">
          {!isLoading &&
            data &&
            data.map((e) => (
              <FadeCard
                key={e.id}
                className="col-span-5 h-64"
                contentClassName="flex flex-col gap-5 p-6"
              >
                <div className="text-primary text-xs font-ibm">{e.content}</div>
                <div className="flex flex-row gap-3 items-center mt-auto">
                  <Image
                    src={e.profilePic ?? ""} // fallback nếu null
                    alt="Nguyễn Trọng Quí"
                    width={48}
                    height={48}
                    className="rounded-full object-cover w-[48px] h-[48px]"
                    unoptimized // nếu ảnh là URL từ API hoặc base64
                  />
                  <div className="flex flex-col gap-1">
                    <div className="font-ibm text-sm font-semibold">
                      {e.fullName}
                    </div>
                    <div className="font-ibm text-xs font-medium text-[#FFA217]">
                      {e.workingTitle} - {e.companyName}
                    </div>
                  </div>
                </div>
              </FadeCard>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
