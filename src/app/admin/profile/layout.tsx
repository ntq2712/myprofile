/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
"use client";
import AuthLayout from "@/layouts/AuthLayout";
import React, { ReactNode } from "react";

function layout({ children }: Readonly<{ children: ReactNode }>) {
  return <AuthLayout>{children}</AuthLayout>;
}

export default layout;
