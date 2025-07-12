/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

type Information = {
  id: string;
  fullName: string;
  birthDay: string;
  avatar?:string
  introduction: string;
  mySkills: Skill[];
  createBy: string
  createAt: string
  modifyBy: string;
  modifyAt: string;
  isDelete: string;
};
