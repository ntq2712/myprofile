/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
"use client";
import apiUrl from "@/api/apiUrl";
import { getCaseStudyList } from "@/api/case-study";
import { useQuery } from "@tanstack/react-query";
import CaseStudy from "./CaseStudy";

function CaseStudies() {
  const { data, isLoading } = useQuery({
    queryKey: [apiUrl.caseStudy.getList],
    queryFn: () => getCaseStudyList().then((res) => res.data),
  });

  return (
    <div className="w-full bg-white flex items-center justify-center pt-12 pb-12">
      <div className="w-[70vw] min-h-[100vh] flex flex-col  gap-20">
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="text-dark text-4xl font-ibm font-semibold">
            Domains I&apos;ve Worked In
          </div>
          <div className="text-primary text-xs font-ibm max-w-[40vw] flex-wrap text-center">
            During my professional journey, I&apos;ve had the opportunity to work across various domains, solving real-world problems through technology. Each field has sharpened my skills and broadened my perspective as a developer.
          </div>
        </div>

        {!isLoading &&
          data?.map((e, i) => <CaseStudy key={e.id} index={i} item={e} />)}
      </div>
    </div>
  );
}

export default CaseStudies;
