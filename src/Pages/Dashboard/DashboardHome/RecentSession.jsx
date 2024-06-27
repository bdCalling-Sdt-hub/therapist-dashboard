import React from "react";
import { DatePicker, Table } from "antd";
import { useGetAllSessionQuery } from "../../../redux/Features/getAllSessionApi";
import Loading from "../../../Components/Loading/Loading";

function RecentSession() {
  const {data:allSession,isSuccess,isError,isLoading} = useGetAllSessionQuery()
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };


  // if(isLoading){
  //   return <Loading />
  // }

 
  console.log(allSession?.data?. attributes);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (_, record) => (
        <>
          <div>
            <p className="text-primary text-[16px]">{record?.therapistId?.name}</p>
            <p className="text-[#979797] text-[12px]">#{record?.therapistId?.email}</p>
          </div>
        </>
      ),
    },
    {
      title: "accountType",
      dataIndex: "accountType",
      render: (_, record) => (
        <>
          <p>{record?.therapistId?.therapistType}</p>
        </>
      ),
    },
    {
      title: "Phone",
      dataIndex: "dataTime",
      render: (_, record) => (
        <>
          <div>
            <p className="text-primary text-[12px] rounded inline-block px-1">
              {record?.therapistId?.countryCode ? `${record?.therapistId?.countryCode}${record?.therapistId?.phone}`:"N/A"}
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Data & Time",
      dataIndex: "dataTime",
      render: (_, record) => (
        <>
          <div>
            <p>{record?.date}</p>
            <p>{`${record?.time[0]?.from}-${record?.time[0]?.to}`}</p>
          </div>
        </>
      ),
    },
    
    // {
    //   title: "viewDetails",
    //   dataIndex: "dataTime",
    //   render: (_, record) => (
    //     <>
    //       <div>
    //         <p className="px-6 py-1 text-[14px] text-primary hover:bg-primary hover:text-white  font-medium cursor-pointer border-[1px] border-primary rounded inline-block">
    //           Details
    //         </p>
    //       </div>
    //     </>
    //   ),
    // },
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
          showHeader={true}
          pagination={false}
          columns={columns}
          dataSource={allSession?.data?. attributes}
        />
      </div>
    </div>
  );
}

export default RecentSession;
