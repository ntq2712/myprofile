/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import clsx from "clsx";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ILabelProps extends React.ComponentProps<"label"> {}

function Label(props: ILabelProps) {
  const { className, ...restProps } = props;

  return (
    <label
      className={clsx("text-sm font-semibold text-primary font-ibm", className)}
      {...restProps}
    />
  );
}

export default Label;
