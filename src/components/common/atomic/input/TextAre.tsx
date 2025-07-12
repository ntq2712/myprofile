/* eslint-disable @typescript-eslint/no-empty-object-type */
/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import clsx from "clsx";
import React from "react";

interface ITextAreProps extends React.ComponentProps<"textarea"> {}

function TextAre(props: ITextAreProps) {
  const { className, ...restProps } = props;

  return (
    <textarea
      className={clsx(
        "rounded-md h-24 p-2 text-primary font-ibm text-xs pl-1 border border-gray-300 focus:outline-none focus:border-[#3F8E00] focus:ring-1 focus:ring-[#62BA1B]",
        className
      )}
      {...restProps}
    />
  );
}

export default TextAre;
