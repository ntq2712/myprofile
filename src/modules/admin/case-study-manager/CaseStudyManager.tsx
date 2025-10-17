/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
"use client";
import PrimaryButon from "@/components/common/atomic/button/PrimaryButon";
import { useState } from "react";
import AddCaseStudy from "./AddCaseStudy";
import CaseStudyTypeList from "./CaseStudyTypeList";
import CaseStudyList from "./CaseStudyList";
import AddCaseStudyType from "./AddCaseStudyType";

function CaseStudyManager() {
  const [openModal, setOpenModal] = useState(false);

  const openAddCaseStudy = () => {
    setOpenModal(true);
  };

  return (
    <div className="w-full h-full">
      <div className="h-14 w-full flex flex-row gap-4">
        <PrimaryButon onClick={openAddCaseStudy}>Add Case Study</PrimaryButon>
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

      <AddCaseStudy
        openModal={openModal}
        setOpenModal={() => setOpenModal(false)}
      />
    </div>
  );
}

export default CaseStudyManager;
