/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
"use client";
import { addListGuest, updateListGuest } from "@/api/guest";
import Label from "@/components/common/atomic/text/Label";
import Modal from "@/components/common/atomic/view/Modal";
import useAppForm from "@/react-form/formContext";
import { newGeustOpt } from "@/react-form/formOpts/geust";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { FaEdit, FaUserPlus } from "react-icons/fa";
import z from "zod";

const RelationshipData = [
  {
    value: 0,
    lable: "Bạn Chú Rể",
  },
  {
    value: 1,
    lable: "Bạn Cô Dâu",
  },
];

const StatusData = [
  {
    value: 1,
    lable: "Arrived at",
  },
  {
    value: 0,
    lable: "Absent",
  },
];

interface IAddOrEditGuestProps {
  type?: "add" | "edit";
  values?: Guest;
}

const addEditGuestSchema = z.object({
  fullName: z.string().min(1, "Required field"),
  // isRefund: z.boolean(),
  // refundValue: z.number(),
  relationship: z.number(),
  status: z.number(),
  // weddingGiftMoney: z.number(),
});

function AddOrEditGuest({ type = "add", values }: IAddOrEditGuestProps) {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const addGuestMutaition = useMutation({
    mutationFn: (body: unknown) => addListGuest(body),
    onSuccess: () => {
      form.reset();
      setOpen(false);

      queryClient.invalidateQueries({
        queryKey: ["guest/get-list-guest"],
        refetchType: "all",
      });

      queryClient.invalidateQueries({
        queryKey: ["guest/get-summary-guest"],
        refetchType: "all",
      });
    },
  });

  const updateGuestMutaition = useMutation({
    mutationFn: (body: Guest) => updateListGuest(body),
    onSuccess: () => {
      form.reset();
      setOpen(false);

      queryClient.invalidateQueries({
        queryKey: ["guest/get-list-guest"],
        refetchType: "all",
      });

      queryClient.invalidateQueries({
        queryKey: ["guest/get-summary-guest"],
        refetchType: "all",
      });
    },
  });

  const form = useAppForm({
    ...newGeustOpt,
    validators: {
      onSubmit: addEditGuestSchema,
    },
    onSubmit(props) {
      if (type === "add") {
        addGuestMutaition.mutateAsync(props.value);
      } else {
        if (values) {
          const body: Guest = {
            ...values,
            ...props.value,
          };
          updateGuestMutaition.mutateAsync(body);
        }
      }
    },
  });

  useEffect(() => {
    if (type === "edit" && values) {
      form.setFieldValue("fullName", values.fullName);
      form.setFieldValue("isRefund", values.isRefund);
      form.setFieldValue("refundValue", values.refundValue);
      form.setFieldValue("relationship", values.relationship);
      form.setFieldValue("status", values.status);
      form.setFieldValue("weddingGiftMoney", values.weddingGiftMoney);
    }
  }, [values, type, form]);

  return (
    <>
      {type === "add" && (
        <button
          onClick={() => setOpen(true)}
          className="flex flex-row items-center gap-2 justify-center w-32 h-10 hover:bg-green-600 active:bg-green-900 bg-green-500 rounded-lg text-white text-sm font-bold"
        >
          <FaUserPlus /> Add New
        </button>
      )}

      {type === "edit" && (
        <button onClick={() => setOpen(true)}>
          <FaEdit className="text-orange-500 text-xl" />
        </button>
      )}
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col w-[50vw] h-auto items-center justify-center">
          <p className="text-xl font-bold">New Guest</p>
          <div className="w-full p-4 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <form.AppField name="fullName">
                  {(field) => (
                    <field.TextField
                      placeholder="Full name"
                      inputType="text"
                      label="Full Name"
                    />
                  )}
                </form.AppField>
              </div>
              <div className="col-span-1">
                <Label>Relationship</Label>
                <form.AppField name="relationship">
                  {(field) => (
                    <select
                      value={field.state.value}
                      onChange={(e) => {
                        e.preventDefault();
                        e.stopPropagation();

                        field.setValue(Number(e.target.value));
                      }}
                      className="h-9 w-full font-ibm text-black rounded-md border-[1px] border-gray-300"
                    >
                      {RelationshipData.map((r) => (
                        <option key={r.value} value={r.value}>
                          {r.lable}
                        </option>
                      ))}
                    </select>
                  )}
                </form.AppField>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <Label>Status</Label>
                <form.AppField name="status">
                  {(field) => (
                    <select
                      value={field.state.value}
                      onChange={(e) => {
                        e.preventDefault();
                        e.stopPropagation();

                        field.setValue(Number(e.target.value));
                      }}
                      className="h-9 w-full font-ibm text-black rounded-md border-[1px] border-gray-300"
                    >
                      {StatusData.map((sta) => (
                        <option key={sta.value} value={sta.value}>
                          {sta.lable}
                        </option>
                      ))}
                    </select>
                  )}
                </form.AppField>
              </div>
              <div className="col-span-1">
                <form.AppField name="weddingGiftMoney">
                  {(field) => (
                    <field.TextField
                      placeholder="Wedding Gift Money"
                      inputType="text"
                      label="Wedding Gift Money"
                    />
                  )}
                </form.AppField>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <Label>Refund</Label>
                <form.AppField name="isRefund">
                  {(field) => (
                    <select
                      value={field.state.value ? "1" : "0"}
                      onChange={(e) => {
                        e.stopPropagation();

                        field.setValue(e.target.value === "1" ? true : false);
                      }}
                      className="h-9 w-full font-ibm text-black rounded-md border-[1px] border-gray-300"
                    >
                      <option value={1}>Refunded</option>
                      <option value={0}>Not Yet</option>
                    </select>
                  )}
                </form.AppField>
              </div>
              <div className="col-span-1">
                <form.AppField name="refundValue">
                  {(field) => (
                    <field.TextField
                      placeholder="Refund Value"
                      inputType="text"
                      label="Refund Value"
                    />
                  )}
                </form.AppField>
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              onClick={() => form.handleSubmit()}
              className="flex flex-row items-center gap-2 justify-center w-80 h-12 hover:bg-green-600 active:bg-green-900 bg-green-500 rounded-lg text-white text-sm font-bold"
            >
              {type == "edit" ? "Update" : "Submit"}
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default AddOrEditGuest;
