/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

type SectionKey = "home" | "caseStudies" | "testimonials" | "work" | "contact";

interface IHeaderProps {
  active: SectionKey;
  onNavigate: (section: SectionKey) => void;
}

const sections: { key: SectionKey; label: string }[] = [
  { key: "home", label: "Home" },
  { key: "caseStudies", label: "Case Studies" },
  { key: "testimonials", label: "Testimonials" },
  { key: "work", label: "Work Experiences" },
  { key: "contact", label: "Get In Touch" },
];

function Header({ active, onNavigate }: IHeaderProps) {
  return (
    <header className="bg-[#1B1B1B] w-[90vw] h-[80px] rounded-[16px] absolute top-4 z-50">
      <div className="hidden md:grid grid-cols-12 w-full h-full items-center">
        {sections.map((section) => (
          <button
            key={section.key}
            onClick={() => onNavigate(section.key)}
            className={clsx(
              "col-span-2 text-[#9C9C9C] font-ibm text-2xl 2xl:text-2xl xl:text-xl lg:text-lg sm:text-sm",
              active === section.key ? "text-white" : "text-[#9C9C9C]"
            )}
          >
            {section.label}
          </button>
        ))}
        <div className="col-span-2 flex flex-row w-full h-full gap-3 items-center justify-center">
          <Link href={""} className="text-[#9C9C9C] font-ibm text-2xl">
            <FaGithub />
          </Link>
          <Link href={""} className="text-[#9C9C9C] font-ibm text-2xl">
            <FaLinkedin />
          </Link>
          <Link href={""} className="text-[#9C9C9C] font-ibm text-2xl">
            <FaFacebook />
          </Link>
        </div>
      </div>

      {/* Responsive Mobile */}
      <div className="flex md:hidden w-full h-full overflow-x-auto items-center px-4 gap-4">
        {sections.map((section) => (
          <button
            key={section.key}
            onClick={() => onNavigate(section.key)}
            className={clsx(
              "flex-shrink-0 text-[#9C9C9C] font-ibm text-lg",
              active === section.key ? "text-white" : "text-[#9C9C9C]"
            )}
          >
            {section.label}
          </button>
        ))}
        <div className="ml-auto flex gap-3">
          <Link href={"https://github.com/ntq2712"} className="text-[#9C9C9C] text-xl">
            <FaGithub />
          </Link>
          <Link href={""} className="text-[#9C9C9C] text-xl">
            <FaLinkedin />
          </Link>
          <Link href={""} className="text-[#9C9C9C] text-xl">
            <FaFacebook />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
