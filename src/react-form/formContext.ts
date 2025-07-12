/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import TextAreField from "@/components/common/form-field/TextAreField";
import TextField from "@/components/common/form-field/TextField";
import { createFormHook, createFormHookContexts } from "@tanstack/react-form";

export const { formContext, fieldContext, useFieldContext } =
  createFormHookContexts();

const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    TextField,
    TextAreField
  },
  formComponents: {},
});

export default useAppForm;
