/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

type CaseStudyType = Base & {
  name: string;
  uiMetadata: {
    color: string;
    colorLight: string;
    index: number;
    icon?: string;
  };
};

type CaseStudy = Base & {
  introduction: string;
  type: string;
  thumbnail: string;
  title: string;
};

type CaseStudyFullValue = Base & {
  introduction: string;
  type: string;
  caseStudyType: CaseStudyType
  thumbnail: string;
  title: string;
};
