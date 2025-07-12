/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import { useFieldContext } from "@/react-form/formContext";
import React from "react";
import Label from "../atomic/text/Label";
import TextAre from "../atomic/input/TextAre";
import FieldError from "./FieldError";

interface ITextAreFieldProps extends React.ComponentProps<"textarea"> {
  label: string;
}

function TextAreField(props: ITextAreFieldProps) {
  const { label, ...restProps } = props;

  const field = useFieldContext<string>();

  return (
    <div className="flex flex-col gap-1 w-full h-fit">
      <Label htmlFor={field.name}>{label}</Label>
      <TextAre
        {...restProps}
        id={field.name}
        name={field.name}
        value={field.state.value}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
      />
      <FieldError field={field} />
    </div>
  );
}

export default TextAreField;
