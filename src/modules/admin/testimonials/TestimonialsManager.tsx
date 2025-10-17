/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
"use client";
import React from "react";
import ModalAddTestimonials from "./ModalAddTestimonials";
import { useQuery } from "@tanstack/react-query";
import apiUrl from "@/api/apiUrl";
import { getAllTestimonial } from "@/api/testimonials";

function TestimonialsManager() {
  const { data, isLoading } = useQuery({
    queryKey: [apiUrl.testimonial.getAll],
    queryFn: () => getAllTestimonial().then((res) => res.data),
  });

  return (
    <div className="w-full pr-4">
      <ModalAddTestimonials />
      <table className="flex flex-col gap-4 w-full">
        <thead className="w-full">
          <tr className="w-full flex flex-row gap-4">
            <th>Personal</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody className="w-full flex flex-col gap-4">
          {!isLoading &&
            data?.map((e) => (
              <tr key={e.id} className="w-full flex flex-row gap-4">
                <td>{e.fullName}</td>
                <td>{e.content}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TestimonialsManager;
