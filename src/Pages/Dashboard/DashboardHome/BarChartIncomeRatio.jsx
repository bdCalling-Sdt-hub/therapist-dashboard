import React, { PureComponent } from "react";
import {  DatePicker } from "antd";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
} from "recharts";

const data = [
  {
    name: "01",
    ThisMonth: 4000,
    LastMonth: 2400,
  },
  {
    name: "02",
    ThisMonth: 3000,
    LastMonth: 1398,
  },
  {
    name: "03",
    ThisMonth: 2000,
    LastMonth: 9800,
  },
  {
    name: "04",
    ThisMonth: 2780,
    LastMonth: 3908,
  },
  {
    name: "05",
    ThisMonth: 1890,
    LastMonth: 4800,
    amt: 2181,
  },
  {
    name: "06",
    ThisMonth: 2390,
    LastMonth: 3800,
  },
  {
    name: "07",
    ThisMonth: 3490,
    LastMonth: 4300,
  },
  {
    name: "08",
    ThisMonth: 3490,
    LastMonth: 4300,
  },
  {
    name: "09",
    ThisMonth: 5465,
    LastMonth: 5245,
  },
  {
    name: "10",
    ThisMonth: 3490,
    LastMonth: 4300,
  },
  {
    name: "11",
    ThisMonth: 3490,
    LastMonth: 4300,
  },
  {
    name: "12",
    ThisMonth: 3490,
    LastMonth: 4300,
  },
  {
    name: "13",
    ThisMonth: 3490,
    LastMonth: 4300,
  },
  {
    name: "14",
    ThisMonth: 3490,
    LastMonth: 4300,
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
          <h1 className="text-[20px] font-medium">Income Ratio</h1>{" "}
          <div className="flex gap-5 mt-[20px]">
            <div className="flex gap-2 items-center">
              <span className="bg-[#54A630] w-4 h-4 rounded-full"></span>{" "}
              <span>This month</span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="bg-[#B0D6A0] w-4 h-4 rounded-full"></span>{" "}
              <span>Last month</span>
            </div>
          </div>
        </div>
        <div>
          <DatePicker onChange={onChange} picker="month" />
        </div>
      </div>
      <div>
        <BarChart
          width={690}
          height={200}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <Bar
            dataKey="LastMonth"
            fill="#B0D6A0"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            dataKey="ThisMonth"
            fill="#54A630"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </div>
    </div>
  );
}

export default BarChartIncomeRatio;
