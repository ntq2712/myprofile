/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import { useFieldContext } from "@/react-form/formContext";
import React from "react";
import Label from "../atomic/text/Label";
import Input from "../atomic/input/Input";
import FieldError from "./FieldError";

function TextField({ label, inputType }: { label: string; inputType: React.HTMLInputTypeAttribute }) {
  const field = useFieldContext<string>();


  console.log('----->label: ',label)
  return (
    <div className="flex flex-col gap-1 w-full h-fit">
      <Label htmlFor={field.name}>{label}</Label>
      <Input
        id={field.name}
        name={field.name}
        type={inputType}
        value={field.state.value ?? ""}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
      />
      <FieldError field={field} />
    </div>
  );
}

export default TextField;
