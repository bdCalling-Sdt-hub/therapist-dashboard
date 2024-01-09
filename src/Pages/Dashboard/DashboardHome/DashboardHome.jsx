import React from "react";
import Status from "./Status";
import BarChartIncomeRatio from "./BarChartIncomeRatio";
import RecentSession from "./RecentSession";
import UserSurveyRatio from "./UserSurveyRatio";


function DashboardHome() {
  return (
    <div>
      <div className="flex">
        <div className="w-[708px] flex flex-col pl-[20px] pt-[20px] ">
          <Status />
          <BarChartIncomeRatio/>
          <RecentSession />
        </div>
        <div className="w-[342px] pl-[20px] pt-[20px]">
          <UserSurveyRatio />
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
