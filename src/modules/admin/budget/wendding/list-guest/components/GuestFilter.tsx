/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
"use client";
import Label from "@/components/common/atomic/text/Label";
import { Popover } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaFilter } from "react-icons/fa";

function GuestFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<number | undefined>(undefined);

  //   useEffect(() => {
  //     const query = Object.fromEntries(searchParams.entries());

  //     const status = query.status ? Number(query.status) : undefined;

  //     setStatus(status);
  //   }, [searchParams]);

  const onApply = () => {
    const params = new URLSearchParams(searchParams);

    if (status !== undefined) {
      params.set("status", status.toString());
    } else {
      params.set("status", "undefined");
    }

    router.push(`?${params.toString()}`);
  };

  const content = (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1 w-full">
          <Label>Relationship</Label>
          {/* <Select
          style={{ width: 120 }}
          placeholder="Select Relationship"
          className="w-[200px]"
          //   onChange={handleChange}
          options={[
            { value: 0, label: "Groom's Friend" },
            { value: 1, label: "Bride's Friend" },
          ]}
        /> */}
          <select
            value={status}
            className="h-9 w-full font-ibm text-black rounded-md border-[1px] border-gray-300"
          >
            <option value={undefined} className="text-gray-300">
              Select Relationship
            </option>
            <option value={0}>{"Groom's Friend"}</option>
            <option value={1}>{"Bride's Friend"}</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <Label>Status</Label>
          <select
            className="h-9 w-full font-ibm text-black rounded-md border-[1px] border-gray-300"
            onChange={(e) => {
              const value =
                e.target.value !== "all" ? Number(e.target.value) : undefined;

              console.log("value: ", value);

              setStatus(value);
            }}
          >
            <option value={"all"} className="text-gray-300">
              All
            </option>
            <option value={0}>Absent</option>
            <option value={1}>Arrived</option>
          </select>
        </div>
      </div>
      <button
        onClick={onApply}
        type="submit"
        className="flex flex-row items-center gap-2 justify-center w-80 h-12 hover:bg-green-600 active:bg-green-900 bg-green-500 rounded-lg text-white text-sm font-bold"
      >
        Apply
      </button>
    </div>
  );

  return (
    <Popover
      content={content}
      title={<p className="text-xl">Filter</p>}
      trigger="click"
      placement="bottom"
      arrow={false}
    >
      <button className="flex flex-row items-center gap-2 justify-center w-32 h-10 hover:bg-blue-600 active:bg-blue-900 bg-blue-500 rounded-lg text-white text-sm font-bold">
        <FaFilter /> Filter
      </button>
    </Popover>
  );
}

export default GuestFilter;
