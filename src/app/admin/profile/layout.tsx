/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
"use client";
import MainMenuLayout from "@/layouts/MainMenuLayout";
import { ReactNode } from "react";

function layout({ children }: Readonly<{ children: ReactNode }>) {
  return <MainMenuLayout>{children}</MainMenuLayout>;
}

export default layout;
