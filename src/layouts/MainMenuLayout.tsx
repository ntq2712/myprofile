/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import AuthLayout from "./AuthLayout";

const menuItems = [
  { label: "Dashboard", href: "/admin/dashboard" },
  { label: "Profile", href: "/admin/profile" },
  { label: "Case Study", href: "/admin/case-study" },
  { label: "Work Experience", href: "/admin/work-experience" },
  { label: "Testimonials", href: "/admin/testimonials" },
  { label: "Guest", href: "/admin/list-guest" },
];

function MainMenuLayout({ children }: Readonly<{ children: ReactNode }>) {
  const pathname = usePathname();

  return (
    <AuthLayout>
      <aside className="col-span-2 min-h-[100vh] h-full w-full bg-[#1B1B1B] flex flex-col pl-4 pt-6 pr-4">
        <h1 className="text-2xl font-bold mb-10 mt-10 text-primary">
          Nguyen Qui
        </h1>
        <nav className="flex flex-col gap-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "px-4 py-2 rounded-lg transition-all font-medium font-ibm",
                pathname === item.href
                  ? "bg-white text-black"
                  : "hover:bg-white/10 hover:text-white text-[#9C9C9C]"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <div className="col-span-8 flex flex-col">
        <header className="left-0 right-0 h-12 fixed top-0">
          <div className="text-xl font-bold mb-10 mt-10 text-primary">
            Nguyen Trong Qui
          </div>
        </header>
        <main className="w-full h-full pt-12">{children}</main>
      </div>
    </AuthLayout>
  );
}

export default MainMenuLayout;
