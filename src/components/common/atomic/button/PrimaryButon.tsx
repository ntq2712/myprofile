/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import React, { ReactNode } from "react";

interface IPrimaryButonProps extends React.ComponentProps<"button"> {
  children: ReactNode;
}

function PrimaryButon({ children, ...restProps }: IPrimaryButonProps) {
  return (
    <button className="text-[14px] text-light font-ibm w-96 p-4 bg-[#3F8E00] hover:bg-[#4a9d2c] rounded-lg active:bg-[#223612]" {...restProps}>{children}</button>
  );
}

export default PrimaryButon;
