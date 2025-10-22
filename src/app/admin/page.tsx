/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
"use client";
import LoginForm from "@/modules/admin/LoginForm";

function page() {
  return (
    <div
      className="w-[100vw] h-[100vh] bg-cover bg-center items-center justify-center flex"
      style={{ backgroundImage: "url('./GlassEffectLoginPageBlue.png')" }}
    >
      <LoginForm />
    </div>
  );
}

export default page;
