/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import { AnyFieldApi } from "@tanstack/react-form";
import React from "react";

function FieldError({ field }: { field: AnyFieldApi }) {
  return (
    <span>
      {!field.state.meta.isValid && (
        <em className="text-red-600 text-xs">
          {field.state.meta.errors.map((err) => err.message).join(", ")}
        </em>
      )}
    </span>
  );
}

export default FieldError;
