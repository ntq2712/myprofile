/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import React from "react";
import FadeCard from "../../components/common/atomic/card/FadeCard";

function Testimonials() {
  return (
    <div className="w-full bg-black flex items-center justify-center pt-12 pb-12">
      <div className="w-[60vw] min-h-[100vh] flex flex-col  gap-20">
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="text-[32px] text-light font-ibm">Testimonials</div>
          <div className="text-primary text-xs font-ibm max-w-[40vw] flex-wrap text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className="grid grid-cols-10 gap-8">
          <FadeCard
            className="col-span-5 h-64"
            contentClassName="flex flex-col gap-5 p-6"
          >
            <div className="text-primary text-xs font-ibm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </div>
            <div className="flex flex-row gap-3 items-center mt-auto">
              <img
                className="w-[48px] h-[48px] rounded-full"
                alt="Nguyễn Trọng Quí"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWClzpo8hpx33o9dX6V2vOx0Ae_CDIoYHfJQ&s"
              />
              <div className="flex flex-col gap-1">
                <div className="font-ibm text-sm font-semibold">
                  Nguyễn Trọng Quí
                </div>
                <div className="font-ibm text-xs font-medium text-[#FFA217]">Solution Architect - FPT Soft</div>
              </div>
            </div>
          </FadeCard>
          <FadeCard
            className="col-span-5 h-64"
            contentClassName="flex flex-col gap-5 p-6"
          >
            <div className="text-primary text-xs font-ibm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </div>
            <div className="flex flex-row gap-3 items-center mt-auto">
              <img
                className="w-[48px] h-[48px] rounded-full"
                alt="Nguyễn Trọng Quí"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWClzpo8hpx33o9dX6V2vOx0Ae_CDIoYHfJQ&s"
              />
              <div className="flex flex-col gap-1">
                <div className="font-ibm text-sm font-semibold">
                  Nguyễn Trọng Quí
                </div>
                <div className="font-ibm text-xs font-medium text-[#FFA217]">Solution Architect - FPT Soft</div>
              </div>
            </div>
          </FadeCard>
          <FadeCard
            className="col-span-5 h-64"
            contentClassName="flex flex-col gap-5 p-6"
          >
            <div className="text-primary text-xs font-ibm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </div>
            <div className="flex flex-row gap-3 items-center mt-auto">
              <img
                className="w-[48px] h-[48px] rounded-full"
                alt="Nguyễn Trọng Quí"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWClzpo8hpx33o9dX6V2vOx0Ae_CDIoYHfJQ&s"
              />
              <div className="flex flex-col gap-1">
                <div className="font-ibm text-sm font-semibold">
                  Nguyễn Trọng Quí
                </div>
                <div className="font-ibm text-xs font-medium text-[#FFA217]">Solution Architect - FPT Soft</div>
              </div>
            </div>
          </FadeCard>
          <FadeCard
            className="col-span-5 h-64"
            contentClassName="flex flex-col gap-5 p-6"
          >
            <div className="text-primary text-xs font-ibm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </div>
            <div className="flex flex-row gap-3 items-center mt-auto">
              <img
                className="w-[48px] h-[48px] rounded-full"
                alt="Nguyễn Trọng Quí"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWClzpo8hpx33o9dX6V2vOx0Ae_CDIoYHfJQ&s"
              />
              <div className="flex flex-col gap-1">
                <div className="font-ibm text-sm font-semibold">
                  Nguyễn Trọng Quí
                </div>
                <div className="font-ibm text-xs font-medium text-[#FFA217]">Solution Architect - FPT Soft</div>
              </div>
            </div>
          </FadeCard>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
