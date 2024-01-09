import React from "react";
import Status from "./Status";
import BarChartIncomeRatio from "./BarChartIncomeRatio";


function DashboardHome() {
  return (
    <div>
      <div className="flex">
        <div className="w-[708px] flex flex-col pl-[20px] pt-[20px] ">
          <Status />
          <BarChartIncomeRatio/>
          <div className="">3</div>
        </div>
        <div className="w-[342px] pl-[20px] pt-[20px]">right</div>
      </div>
    </div>
  );
}

export default DashboardHome;
