/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import React from "react";

function WorkExperiences() {
  return (
    <div className="w-full bg-white flex items-center justify-center pt-12 pb-12">
      <div className="w-[70vw] h-fit flex flex-col  gap-20">
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="text-dark text-4xl font-ibm font-semibold">
            Work Experiences
          </div>
          <div className="text-primary text-xs font-ibm max-w-[40vw] flex-wrap text-center">
            Solving user & business problems since last 15+ years.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className="grid grid-cols-10 gap-5">
          <div className="col-span-1"></div>
          <div className="col-span-8 grid grid-cols-10 gap-5">
            <div className="col-span-5 flex flex-col gap-5">
              <img
                className="w-full 2xl:h-[300px] xl:h-[300px] sm:h-[200px] rounded-lg"
                src="https://vtiacademy.edu.vn/upload/images/lo-trinh-tro-thanh-web-developer.jpeg"
              />
              <div className="flex flex-col gap-1">
                <div className="text-[#080808] text-2xl font-ibm">
                  Work name here
                </div>
                <div className="text-[#2AB090] text-xs font-ibm">
                  20/02/2022 - 20/02/2025
                </div>
              </div>

              <div className="text-primary text-xs font-ibm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. sed
                do eiusmod tempor incididunt ut labore et dolore magna.
              </div>
              <button className="shadow-sm shadow-[#62BA1B] mt-6 font-semibold text-[14px] text-light font-ibm w-60 p-3 bg-[#3F8E00] hover:bg-[#3F8E00] rounded-lg active:bg-[#3F8E00]">
                View Work
              </button>
            </div>
            <div className="col-span-5 flex flex-col gap-5">
              <img
                className="w-full 2xl:h-[300px] xl:h-[300px] sm:h-[200px] rounded-lg"
                src="https://www.ntc.edu/sites/default/files/styles/full_width_16_9/public/2021-06/software-development-specialist.jpg?itok=D8qgVwxb"
              />
              <div className="flex flex-col gap-1">
                <div className="text-[#080808] text-2xl font-ibm">
                  Work name here
                </div>
                <div className="text-[#2AB090] text-xs font-ibm">
                  20/02/2022 - 20/02/2025
                </div>
              </div>

              <div className="text-primary text-xs font-ibm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. sed
                do eiusmod tempor incididunt ut labore et dolore magna.
              </div>
              <button className="shadow-sm shadow-[#62BA1B] mt-6 font-semibold text-[14px] text-light font-ibm w-60 p-3 bg-[#3F8E00] hover:bg-[#3F8E00] rounded-lg active:bg-[#3F8E00]">
                View Work
              </button>
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
    </div>
  );
}

export default WorkExperiences;
