/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
"use client";
import { deleteGuest, getListGuest, getSummaryGuest } from "@/api/guest";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Popover } from "antd";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaFileExcel } from "react-icons/fa";
import {
  FaFaceSadCry,
  FaFaceSmileBeam,
  FaFaceSmileWink,
} from "react-icons/fa6";
import { HiMiniReceiptRefund, HiUserGroup } from "react-icons/hi2";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import AddOrEditGuest from "./AddOrEditGuest";
import GuestFilter from "./components/GuestFilter";

function ListGeust() {
  const searchParams = useSearchParams();
  const [searchText, setSearchText] = useState("");
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [status, setStatus] = useState<number | undefined>(undefined);

  useEffect(() => {
    const query = Object.fromEntries(searchParams.entries());

    const status =
      query.status && query.status !== "undefined"
        ? Number(query.status)
        : undefined;

    setStatus(status);
  }, [searchParams]);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["guest/get-list-guest", pageIndex, pageSize, status],
    queryFn: () =>
      getListGuest({ searchText, pageIndex, pageSize, status }).then(
        (res) => res
      ),
  });

  const { data: summary, refetch: refetchSummary } = useQuery({
    queryKey: ["guest/get-summary-guest"],
    queryFn: () => getSummaryGuest().then((res) => res),
  });

  const previousPage = () => {
    if (pageIndex !== 1) setPageIndex(pageIndex - 1);
  };

  const deleteGuestMutaition = useMutation({
    mutationFn: (body: string) => deleteGuest(body),
    onSuccess: () => {
      refetch();
      refetchSummary();
    },
  });

  const getStatus = (status: number) => {
    if (status === 0) {
      return "Groom's Friend";
    }
    if (status === 1) {
      return "Bride's Friend";
    }

    return "Not Know";
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log("Người dùng nhấn Enter:");
      refetch();
    }
  };

  const totalPage = useMemo(
    () => (data && data?.totalRow ? Math.ceil(data.totalRow / pageSize) : 1),
    [data, pageSize]
  );

  const nextPage = () => {
    if (pageIndex < totalPage) setPageIndex(pageIndex + 1);
  };

  const gotoPage = (page: number) => {
    if (page <= totalPage) setPageIndex(page);
  };

  return (
    <div className="w-[100vw] h-[100vh] gap-8 p-4 flex flex-col">
      <div className="flex flex-row gap-4 items-center justify-center flex-wrap">
        <div className="flex min-w-fit flex-row gap-2 shadow-green-500 shadow-sm px-4 py-2 w-fit rounded-md bg-green-500">
          <HiUserGroup className="text-5xl text-white" />
          <div className="flex flex-col gap-2">
            <p className="text-xl font-bold text-white">Total Guest</p>
            <p className="text-sm text-white">{summary?.data?.totalGuest}</p>
          </div>
        </div>
        <div className="flex flex-row gap-2 shadow-cyan-500 shadow-sm px-4 py-2 w-fit rounded-md bg-cyan-500">
          <FaFaceSmileBeam className="text-5xl text-white" />
          <div className="flex flex-col gap-2">
            <p className="text-xl font-bold text-white">Total Guest Arrived</p>
            <p className="text-sm text-white">{summary?.data?.totalArrived}</p>
          </div>
        </div>
        <div className="flex flex-row gap-2 shadow-slate-500 shadow-sm px-4 py-2 w-fit rounded-md bg-slate-500">
          <FaFaceSadCry className="text-5xl text-white" />
          <div className="flex flex-col gap-2">
            <p className="text-xl font-bold text-white">Total Guest Absent</p>
            <p className="text-sm text-white">{summary?.data?.totalAbsent}</p>
          </div>
        </div>
        <div className="flex flex-row gap-2 shadow-orange-500 shadow-sm px-4 py-2 w-fit rounded-md bg-orange-500">
          <FaFaceSmileWink className="text-5xl text-white" />
          <div className="flex flex-col gap-2">
            <p className="text-xl font-bold text-white">Total Guest Send</p>
            <p className="text-sm text-white">
              {summary?.data?.totalGuestSend}
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-2 shadow-blue-500 shadow-sm px-4 py-2 w-fit rounded-md bg-blue-500">
          <RiMoneyDollarBoxFill className="text-5xl text-white" />
          <div className="flex flex-col gap-2">
            <p className="text-xl font-bold text-white">Total Money</p>
            <p className="text-sm text-white">
              {summary?.data?.totalWeddingGiftMoney}
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-2 shadow-red-500 shadow-sm px-4 py-2 w-fit rounded-md bg-red-500">
          <HiMiniReceiptRefund className="text-5xl text-white" />
          <div className="flex flex-col gap-2">
            <p className="text-xl font-bold text-white">Total Refund</p>
            <p className="text-sm text-white">{summary?.data?.totalRefund}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-2xl font-bold">List Guest</p>
        <div className="flex flex-row gap-4">
          <div className="grid grid-cols-10 w-56 h-9 bg-white border border-gray-400 rounded-lg items-center">
            <input
              value={searchText}
              placeholder="Key word"
              className="col-span-9 pl-2 rounded-md text-black focus:outline-none focus:border-none focus:ring-0 focus:ring-none"
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              onClick={() => {
                console.log("----> click");
              }}
            >
              <CiSearch className="text-xl text-black col-span-1" />
            </button>
          </div>
          <button className="flex flex-row items-center gap-2 justify-center w-32 h-10 hover:bg-orange-600 active:bg-orange-900 bg-orange-500 rounded-lg text-white text-sm font-bold">
            <FaFileExcel /> Export
          </button>
          <GuestFilter />
          <AddOrEditGuest />
        </div>
      </div>

      <div className="flex w-full h-full items-center justify-start flex-col gap-4">
        <table className="border border-gray-400">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2 min-w-48 items-center justify-center">
                Full Name
              </th>
              <th className="border border-gray-400 px-4 py-2 min-w-48 items-center justify-center">
                Relationship
              </th>
              <th className="border border-gray-400 px-4 py-2 min-w-16 items-center justify-center">
                Status
              </th>
              <th className="border border-gray-400 px-4 py-2 min-w-48 items-center justify-center">
                Wedding Gift Money
              </th>
              <th className="border border-gray-400 px-4 py-2 min-w-48 items-center justify-center">
                Refund
              </th>
              <th className="border border-gray-400 px-4 py-2 min-w-48 items-end justify-center">
                Refund Value
              </th>
              <th className="border border-gray-400 px-4 py-2 min-w-48 items-center justify-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {!isLoading &&
              data?.data &&
              data.data.map((guest) => (
                <tr key={guest.id}>
                  <td className="border border-gray-400 px-4 py-2 min-w-48 items-center justify-center">
                    <div className="flex items-center justify-center">
                      {guest.fullName}
                    </div>
                  </td>
                  <td className="border border-gray-400 px-4 py-2 min-w-48 items-center justify-start">
                    <div className="flex items-center justify-start">
                      {getStatus(guest.relationship)}
                    </div>
                  </td>
                  <td className="border border-gray-400 px-4 py-2 min-w-16 items-center justify-center">
                    <div className="flex items-center justify-center">
                      <div
                        className={`pl-3 pr-3 pt-1 pb-1 border ${
                          guest.status ? "border-green-500" : "border-red-500"
                        } ${
                          guest.status ? "text-green-500" : "text-red-500"
                        } rounded-md font-bold text-xs`}
                      >
                        {guest.status ? "Arrived" : "Absent"}
                      </div>
                    </div>
                  </td>
                  <td className="border border-gray-400 px-4 py-2 min-w-48 items-center justify-end">
                    <div className="flex items-center justify-end">
                      {guest.weddingGiftMoney}
                    </div>
                  </td>
                  <td className="border border-gray-400 px-4 py-2 min-w-16 items-center justify-center">
                    <div className="flex items-center justify-center">
                      <div className="w-fit pl-3 pr-3 pt-1 pb-1 border border-orange-600 text-orange-500 rounded-md font-bold text-xs">
                        {guest.isRefund ? "Refunded" : "Not Yet"}
                      </div>
                    </div>
                  </td>
                  <td className="border border-gray-400 px-4 py-2 min-w-48 items-center justify-end">
                    <div className="flex items-center justify-end">
                      {guest.refundValue}
                    </div>
                  </td>
                  <td className="border border-gray-400 px-4 py-2 min-w-48 items-center justify-center">
                    <div className="flex flex-cpl gap-4 items-center justify-center">
                      <AddOrEditGuest type="edit" values={guest} />
                      {/* <Popconfirm
                        title="Do you want to delete item?"
                        onConfirm={() =>
                          deleteGuestMutaition.mutateAsync(guest.id)
                        }
                      >
                        <button>
                          <IoTrash className="text-red-500 text-xl" />
                        </button>
                      </Popconfirm> */}
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="flex flex-row gap-2">
          <Popover
            trigger="click"
            placement="bottom"
            arrow={false}
            content={
              <div className="flex flex-col gap-2 w-20">
                <button
                  className="border-b-[1px] border-b-black-300"
                  onClick={() => setPageSize(5)}
                >
                  5
                </button>
                <button
                  className="border-b-[1px] border-b-black-300"
                  onClick={() => setPageSize(10)}
                >
                  10
                </button>
                <button
                  className="border-b-[1px] border-b-black-300"
                  onClick={() => setPageSize(15)}
                >
                  15
                </button>
                <button onClick={() => setPageSize(20)}>20</button>
              </div>
            }
          >
            <button className="border h-8 flex items-center justify-center border-gray-400 rounded-md pl-4 pr-4 text-sm">
              {pageSize} items / page
            </button>
          </Popover>
          <div className="flex flex-row gap-2">
            <button
              onClick={previousPage}
              className="w-8 h-8 rounded-md flex items-center justify-center border border-gray-400 hover:bg-blue-500"
            >
              <IoIosArrowBack />
            </button>

            {[...new Array(totalPage)].map((_, index) => {
              return (
                <button
                  key={index}
                  onClick={() => gotoPage(index + 1)}
                  className={`w-8 h-8 rounded-md flex items-center justify-center ${
                    pageIndex === index + 1
                      ? "bg-blue-500"
                      : "border border-gray-400 hover:bg-blue-500"
                  }`}
                >
                  {index + 1}
                </button>
              );
            })}
            <button
              className="w-8 h-8 items-center flex justify-center rounded-md border border-gray-400 hover:bg-blue-500"
              onClick={nextPage}
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListGeust;
