/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import React from "react";

function CaseStudies() {
  return (
    <div className="w-full bg-white flex items-center justify-center pt-12 pb-12">
      <div className="w-[70vw] min-h-[100vh] flex flex-col  gap-20">
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="text-dark text-4xl font-ibm font-semibold">
            Case Studies
          </div>
          <div className="text-primary text-xs font-ibm max-w-[40vw] flex-wrap text-center">
            Solving user & business problems since last 15+ years.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className="grid grid-cols-10 gap-9">
          <div className="col-span-5 flex flex-col gap-5">
            <div className="pt-1 pb-1 pl-4 pr-4 text-xs font-semibold bg-[#FFF6E9] text-[#FFA217] w-fit font-ibm rounded-full">
              Fintech
            </div>
            <div className="text-[#080808] text-2xl font-ibm">
              Work name here
            </div>
            <div className="text-primary text-xs font-ibm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </div>
            <button className="mt-6 font-semibold text-[14px] text-light font-ibm w-60 p-3 bg-[#FFA217] hover:bg-[#FFA217] rounded-lg active:bg-[#FFA217]">
              View Case Study
            </button>
          </div>
          <div className="col-span-5">
            <img
              className="w-full h-full rounded-3xl"
              src="https://www.axisbank.com/images/default-source/progress-with-us_new/what-is-personal-finance.jpg?sfvrsn=64421156_2"
            />
          </div>
        </div>
        <div className="grid grid-cols-10 gap-9">
          <div className="col-span-5">
            <img
              className="w-full h-full rounded-3xl"
              src="https://static-copyright-com-au.s3.amazonaws.com/uploads/2023/09/EduTech.png"
            />
          </div>
          <div className="col-span-5 flex flex-col gap-5">
            <div className="pt-1 pb-1 pl-4 pr-4 text-xs font-semibold bg-[#D0E6FF] text-[#000AFF] w-fit font-ibm rounded-full">
              EdTech
            </div>
            <div className="text-[#080808] text-2xl font-ibm">
              Work name here
            </div>
            <div className="text-primary text-xs font-ibm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </div>
            <button className="mt-6 font-semibold text-[14px] text-light font-ibm w-60 p-3 bg-[#000AFF] hover:bg-[#000AFF] rounded-lg active:bg-[#000AFF]">
              View Case Study
            </button>
          </div>
        </div>
        <div className="grid grid-cols-10 gap-9">
          <div className="col-span-5 flex flex-col gap-5">
            <div className="pt-1 pb-1 pl-4 pr-4 text-xs font-semibold bg-[#E0FFF8] text-[#2AB090] w-fit font-ibm rounded-full">
              Pharma
            </div>
            <div className="text-[#080808] text-2xl font-ibm">
              Work name here
            </div>
            <div className="text-primary text-xs font-ibm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </div>
            <button className="mt-6 font-semibold text-[14px] text-light font-ibm w-60 p-3 bg-[#2AB090] hover:bg-[#2AB090] rounded-lg active:bg-[#2AB090]">
              View Case Study
            </button>
          </div>
          <div className="col-span-5">
            <img
              className="w-full h-full rounded-3xl"
              src="https://bsaip.anangpuria.com/wp-content/uploads/2022/11/Top-Reasons-to-Pursue-a-Career-in-Pharma-Industry-825x460.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudies;
