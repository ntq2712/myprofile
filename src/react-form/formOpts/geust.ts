/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import { formOptions } from "@tanstack/react-form";

interface NewGeust {
  fullName: string;
  relationship: number;
  status?: number;
  weddingGiftMoney?: number;
  isRefund?: boolean;
  refundValue?: number;
}

const defaultValues: NewGeust = {
  fullName: '',
  isRefund: false,
  refundValue: 0,
  relationship: 1,
  status: 1,
  weddingGiftMoney: 0,
};

export const newGeustOpt = formOptions({ defaultValues });
