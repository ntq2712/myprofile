/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import clsx from "clsx";
import React, { ReactNode } from "react";

interface IFadeCardProps {
  className?: string;
  contentClassName?: string;
  children: ReactNode;
}

function FadeCard({ className, contentClassName, children }: IFadeCardProps) {
  return (
    <div
      className={clsx(
        "relative p-4 bg-black text-white overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 pointer-events-none border-fade" />
      <div
        className={clsx(
          "absolute z-10 bg-black inset-[1px] rounded-md p-4",
          contentClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default FadeCard;
