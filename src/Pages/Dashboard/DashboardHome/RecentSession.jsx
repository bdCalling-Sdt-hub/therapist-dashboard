import React from "react";
import { DatePicker, Table } from "antd";

function RecentSession() {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const data = [
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Completed",
    },
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Completed",
    },
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Completed",
    },
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Completed",
    },
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Completed",
    },
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Completed",
    },
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Completed",
    },
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Completed",
    },
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Completed",
    },
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Completed",
    },
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Completed",
    },
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Completed",
    },
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Completed",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (_, record) => (
        <>
          <div>
            <p className="text-primary text-[16px]">{record?.name}</p>
            <p className="text-[#979797] text-[12px]">#{record?.userId}</p>
          </div>
        </>
      ),
    },
    {
      title: "accountType",
      dataIndex: "accountType",
      render: (_, record) => (
        <>
          <p>{record?.accountType}</p>
        </>
      ),
    },
    {
      title: "dataTime",
      dataIndex: "dataTime",
      render: (_, record) => (
        <>
          <div>
            <p>{record?.data}</p>
            <p>{record?.timeRange}</p>
          </div>
        </>
      ),
    },
    {
      title: "dataTime",
      dataIndex: "dataTime",
      render: (_, record) => (
        <>
          <div>
            <p className="text-primary text-[12px] rounded inline-block px-1 bg-secondary">
              {record?.status}
            </p>
          </div>
        </>
      ),
    },
    {
      title: "viewDetails",
      dataIndex: "dataTime",
      render: (_, record) => (
        <>
          <div>
            <p className="px-6 py-1 text-[14px] text-primary hover:bg-primary hover:text-white  font-medium cursor-pointer border-[1px] border-primary rounded inline-block">
              Details
            </p>
          </div>
        </>
      ),
    },
  ];
  return (
    <div className="mt-5 bg-white rounded-xl border-1 h-[325px] shadow-xl border-secondary">
      <div className="flex justify-between mt-[16px] pb-[16px] mx-5 border-b-[1px] border-primary">
        <h1 className="text-primary text-[18px] font-bold">Recent Session</h1>
        <div>
          <DatePicker className="bg-secondary" onChange={onChange} />
        </div>
      </div>
      <div className="overflow-hidden px-5 h-[250px] overflow-y-scroll">
        <Table
          showHeader={false}
          pagination={false}
          columns={columns}
          dataSource={data}
        />
      </div>
    </div>
  );
}

export default RecentSession;
