/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
"use client";
import AddCaseStudy from "./AddCaseStudy";
import AddCaseStudyType from "./AddCaseStudyType";
import CaseStudyList from "./CaseStudyList";
import CaseStudyTypeList from "./CaseStudyTypeList";

function CaseStudyManager() {

  return (
    <div className="w-full h-full">
      <div className="h-14 w-full flex flex-row gap-4">
        <AddCaseStudy />
        <AddCaseStudyType />
      </div>

      <div className="flex flex-col gap-8 p-4">
        <div className="">
          <CaseStudyTypeList />
        </div>
        <div className="">
          <CaseStudyList />
        </div>
      </div>
    </div>
  );
}

export default CaseStudyManager;
