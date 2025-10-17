"use client";

import Header from "@/components/common/Header";
import CaseStudies from "@/modules/profile/CaseStudies";
import GetInTouch from "@/modules/profile/GetInTouch";
import Introduction from "@/modules/profile/Introduction";
import ProfileFoorter from "@/modules/profile/ProfileFoorter";
import Testimonials from "@/modules/profile/Testimonials";
import WorkExperiences from "@/modules/profile/WorkExperiences";
import { useEffect, useRef, useState } from "react";
import 'react-quill/dist/quill.snow.css';

type SectionKey = "home" | "caseStudies" | "testimonials" | "work" | "contact";

export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null);
  const caseStudiesRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] = useState<SectionKey>("home");

  const sectionRefs: Record<SectionKey, React.RefObject<HTMLDivElement>> = {
    home: homeRef,
    caseStudies: caseStudiesRef,
    testimonials: testimonialsRef,
    work: workRef,
    contact: contactRef,
  };

  const scrollTo = (section: SectionKey) => {
    setActiveSection(section)
    sectionRefs[section].current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target.id) {
          setActiveSection(visible.target.id as SectionKey);
        }
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0.1,
      }
    );

    Object.entries(sectionRefs).forEach(([key, ref]) => {
      if (ref.current) {
        ref.current.id = key;
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center">
      <Header active={activeSection} onNavigate={scrollTo} />

      <div ref={homeRef} className="w-full flex items-center justify-center">
        <Introduction />
      </div>
      <div
        ref={caseStudiesRef}
        className="w-full flex items-center justify-center"
      >
        <CaseStudies />
      </div>
      <div
        ref={testimonialsRef}
        className="w-full flex items-center justify-center"
      >
        <Testimonials />
      </div>
      <div ref={workRef} className="w-full flex items-center justify-center">
        <WorkExperiences />
      </div>
      <div ref={contactRef} className="w-full flex items-center justify-center">
        <GetInTouch />
      </div>
      <ProfileFoorter />
    </main>
  );
}
