/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import clsx from "clsx";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface IInputProps extends React.ComponentProps<"input"> {}

function Input(props: IInputProps) {
  const { className, ...restProps } = props;
  return (
    <input
      className={clsx(
        "rounded-md h-9 text-primary font-ibm text-xs pl-1 border border-gray-300 focus:outline-none focus:border-[#3F8E00] focus:ring-1 focus:ring-[#62BA1B]",
        className
      )}
      {...restProps}
    />
  );
}

export default Input;
