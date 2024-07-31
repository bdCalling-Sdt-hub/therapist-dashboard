import React, { PureComponent } from "react";
import {  DatePicker } from "antd";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    ThisMonth: 40,
  
  },
  {
    name: "Feb",
    ThisMonth: 30,

  },
  {
    name: "Mar",
    ThisMonth: 20,

  },
  {
    name: "Apr",
    ThisMonth: 27,
 
  },
  {
    name: "May",
    ThisMonth: 18,
   
 
  },
  {
    name: "Jun",
    ThisMonth: 23,
  
  },
  {
    name: "Jul",
    ThisMonth: 34,
 
  },
  {
    name: "Aug",
    ThisMonth: 34,
 
  },
  {
    name: "Sep",
    ThisMonth: 54,
 
  },
  {
    name: "Oct",
    ThisMonth: 34,
 
  },
  {
    name: "Nov",
    ThisMonth: 34,

  },
  {
    name: "Dec",
    ThisMonth: 39,
   
  },
  
];

function BarChartIncomeRatio() {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div className="bg-white mt-5 rounded-xl border-1 shadow-xl border-secondary ">
      <div className="flex justify-between p-[16px]">
        <div>
          <h1 className="text-[20px] font-medium">Income Ratio</h1>
          <div className="flex gap-5 mt-[20px]">
            <div className="flex gap-2 items-center">
              <span className="bg-[#54A630] w-4 h-4 rounded-full"></span>
              <span>This month</span>
            </div>
          </div>
        </div>
        <div>
          <DatePicker onChange={onChange}  picker="month" />
        </div>
      </div>
      <div>
        <BarChart
          width={690}
          height={200}
          data={data}
          margin={{
            top: 5,
            right: 20,
            left: 0,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Bar
            dataKey="ThisMonth"
            fill="#54A630"
            barSize={20}
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </div>
    </div>
  );
}

export default BarChartIncomeRatio;
