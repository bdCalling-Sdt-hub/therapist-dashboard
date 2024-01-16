import React from "react";
import TotalIncome from "../../../Components/Income/TotalIncome";
import TotalIncomeStatus from "../../../Components/Income/TotalIncomeStatus";

function Wallet() {
  return (
    <div className="p-[32px]">
      <TotalIncome />
      <TotalIncomeStatus />
    </div>
  );
}

export default Wallet;
