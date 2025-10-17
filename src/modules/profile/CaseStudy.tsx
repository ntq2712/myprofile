/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
"use client";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface ICaseStudyProps {
  index: number;
  item: CaseStudyFullValue;
}

function CaseStudy({ index, item }: ICaseStudyProps) {
  const router = useRouter();

  const gotoDetail = () => {
    router.push(`/domain-detail/${item.id}`);
  };

  if (index % 2 !== 0) {
    return (
      <div className="grid grid-cols-10 gap-9">
        <div className="col-span-5">
          <Image
            src={item.thumbnail ?? ""}
            alt="thumbnail"
            width={800} // ví dụ tương đương h-80 (320px), w-full thì auto scale
            height={320}
            className="w-full h-80 object-cover rounded-3xl"
            unoptimized // nếu src là URL ngoài hoặc blob
          />
        </div>
        <div className="col-span-5 flex flex-col gap-5">
          <div
            className="pt-1 pb-1 pl-4 pr-4 text-xs font-semibold w-fit font-ibm rounded-full"
            style={{
              backgroundColor: item.caseStudyType.uiMetadata.colorLight,
              color: item.caseStudyType.uiMetadata.color,
            }}
          >
            {item.caseStudyType.name}
          </div>
          <div className="text-[#080808] text-2xl font-ibm">{item.title}</div>
          <div className="text-primary text-xs font-ibm">
            {item.introduction}
          </div>
          <button
            onClick={gotoDetail}
            className={clsx(
              "mt-6 font-semibold text-[14px] text-light font-ibm w-60 p-3 rounded-lg transition-all duration-200",
              "hover:brightness-110 active:brightness-90"
            )}
            style={{
              backgroundColor: item.caseStudyType.uiMetadata.color,
            }}
          >
            View Case Study
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-10 gap-9">
      <div className="col-span-5 flex flex-col gap-5">
        <div
          className="pt-1 pb-1 pl-4 pr-4 text-xs font-semibold w-fit font-ibm rounded-full"
          style={{
            backgroundColor: item.caseStudyType.uiMetadata.colorLight,
            color: item.caseStudyType.uiMetadata.color,
          }}
        >
          {item.caseStudyType.name}
        </div>
        <div className="text-[#080808] text-2xl font-ibm"> {item.title}</div>
        <div className="text-primary text-xs font-ibm">{item.introduction}</div>
        <button
          onClick={gotoDetail}
          className={clsx(
            "mt-6 font-semibold text-[14px] text-light font-ibm w-60 p-3 rounded-lg transition-all duration-200",
            "hover:brightness-110 active:brightness-90"
          )}
          style={{
            backgroundColor: item.caseStudyType.uiMetadata.color,
          }}
        >
          View Case Study
        </button>
      </div>
      <div className="col-span-5">
        <Image
          src={item.thumbnail ?? ""}
          alt="thumbnail"
          width={800} // ví dụ tương đương h-80 (320px), w-full thì auto scale
          height={320}
          className="w-full h-80 object-cover rounded-3xl"
          unoptimized // nếu src là URL ngoài hoặc blob
        />
      </div>
    </div>
  );
}

export default CaseStudy;
