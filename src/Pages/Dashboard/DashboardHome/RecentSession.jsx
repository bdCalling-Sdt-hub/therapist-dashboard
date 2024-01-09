import React from "react";
import { DatePicker } from "antd";



const data =[
  {
    name:"Esther Howard",
    accountType:"Individual",
    data:"10/12/2023",
    timeRange:"7pm-8:30pm",
    status:"completed",

  }
]

function RecentSession() {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div className="mt-5 bg-white rounded-xl border-1 h-[325px] shadow-xl border-secondary">
      <div>
        <h1 className="text-primary text-[18px] font-bold">Recent Session</h1>
        <div>
          <DatePicker onChange={onChange}  />
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default RecentSession;
