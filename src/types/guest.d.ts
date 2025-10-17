/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

type Guest = {
  id: string;
  fullName: string;
  relationship: number;
  status: number;
  weddingGiftMoney: number;
  isRefund: boolean;
  refundValue: number;
  createBy: string;
  createAt: string;
  modifyBy: string;
  modifyAt: string;
  isDelete: boolean;
};

type SummaryGuest = {
  totalGuest: number;
  totalArrived: number;
  totalAbsent: number;
  totalWeddingGiftMoney: number;
  totalRefund: number;
  totalGuestSend: number;
};
