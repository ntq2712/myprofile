/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
"use client";
import apiUrl from "@/api/apiUrl";
import { getAllTestimonialFilter, updateStatus } from "@/api/testimonials";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Avatar, Popover, Select, Table, Tag } from "antd";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import ModalAddTestimonials from "./ModalAddTestimonials";

const columns = [
  {
    title: "Avatar",
    dataIndex: "profilePic",
    key: "profilePic",
    render: (value: string) => <Avatar size={60} src={value} />,
  },
  {
    title: "Full Name",
    dataIndex: "fullName",
    key: "fullName",
  },
  {
    title: "Positon Title",
    dataIndex: "workingTitle",
    key: "workingTitle",
  },
  {
    title: "Company Name",
    dataIndex: "companyName",
    key: "companyName",
  },
  {
    title: "Content",
    dataIndex: "content",
    key: "Content",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (value: number) => (
      <Tag color={value !== 1 ? (value === 3 ? "red" : "green") : "orange"}>
        {value === 1 ? "Await Accept" : value === 3 ? "Reject" : "Accepted"}
      </Tag>
    ),
  },
  {
    title: "Action",
    dataIndex: "id",
    key: "action",
    render: (_: unknown, values: Testimonial) => (
      <div className="flex flex-row gap-2">
        <UpdateStatus value={values} />
        <button className="text-xl text-red-500">
          <MdDelete />
        </button>
      </div>
    ),
  },
];

const UpdateStatus = ({ value }: { value: Testimonial }) => {
  const queryClient = useQueryClient();

  const onChange = (vl: number) => {
    updateStatus({ id: value.id, status: vl }).then((res) => {
      if (res.success) {
        queryClient.invalidateQueries({
          queryKey: [apiUrl.testimonial.getAll],
          refetchType: "all",
        });
      }
    });
  };

  const updateStatusContent = () => (
    <div>
      <Select
        value={value.status}
        className="w-full"
        options={[
          { value: 1, label: "Await Accept" },
          { value: 2, label: "Accept" },
          { value: 3, label: "Reject" },
        ]}
        onChange={onChange}
      />
    </div>
  );

  return (
    <Popover
      content={updateStatusContent}
      title="Update Status"
      trigger="click"
      arrow={false}
      placement="left"
    >
      <button
        className="text-xl text-yellow-500"
        onClick={() => console.log(value)}
      >
        <CiEdit />
      </button>
    </Popover>
  );
};

function TestimonialsManager() {
  const { data, isLoading } = useQuery({
    queryKey: [apiUrl.testimonial.getAll],
    queryFn: () => getAllTestimonialFilter(0).then((res) => res.data),
  });

  return (
    <div className="w-full pr-4">
      <ModalAddTestimonials />
     {!isLoading && <Table rowKey="id" dataSource={data} columns={columns} />}
    </div>
  );
}

export default TestimonialsManager;
