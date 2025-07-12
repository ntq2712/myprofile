/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import React from "react";

function GetInTouch() {
  return (
    <div className="w-full bg-black flex items-center justify-center pt-12 pb-12">
      <div className="w-[70vw] h-fit flex flex-col items-center justify-start gap-20">
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="text-[32px] text-light font-ibm">Get In Touch</div>
          <div className="text-primary text-xs font-ibm max-w-[40vw] flex-wrap text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className="flex flex-col gap-4 w-[400px]">
          <div className="flex flex-col gap-2">
            <div className="text-primary text-xs font-ibm font-semibold">
              Email
            </div>
            <input
              className="h-9 rounded-md text-primary font-ibm text-xs pl-1 border border-gray-300 focus:outline-none focus:border-[#3F8E00] focus:ring-1 focus:ring-[#62BA1B]"
              placeholder="Please enter your email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-primary text-xs font-ibm font-semibold">
              Phone
            </div>
            <input
              className="h-9 rounded-md text-primary font-ibm text-xs pl-1 border border-gray-300 focus:outline-none focus:border-[#3F8E00] focus:ring-1 focus:ring-[#62BA1B]"
              placeholder="Please enter your phone"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-primary text-xs font-ibm font-semibold">
              Message
            </div>
            <textarea
              rows={4}
              className="rounded-md h-24 text-primary font-ibm text-xs pl-1 border border-gray-300 focus:outline-none focus:border-[#3F8E00] focus:ring-1 focus:ring-[#62BA1B]"
              placeholder="Enter your message"
            />
            <button className="shadow-sm shadow-[#62BA1B] mt-6 font-semibold text-[14px] text-light font-ibm w-full p-3 bg-[#3F8E00] hover:bg-[#3F8E00] rounded-lg active:bg-[#3F8E00]">
              Summit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
