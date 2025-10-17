/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
"use client";

import ApiService from "@/api/config";
import LoadingScreen from "@/components/LoadingScreen";
import { ReactNode, useEffect, useState } from "react";

function AuthLayout({ children }: Readonly<{ children: ReactNode }>) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      if (typeof window !== "undefined") {
        window.location.href = "/";
      }
    } else {
      ApiService.instance.setToken(token);

      setReady(true)
    }
  }, []);

  if (!ready) {
    return <LoadingScreen visible/>;
  }

  return (
    <div className="min-h-screen min-w-screen grid grid-cols-10 gap-6">
      {children}
    </div>
  );
}

export default AuthLayout;
