import React from "react";

function InputType({ serialNo, allData, defaultValue }) {
  console.log(allData);
  return (
    <div className="mt-4">
      <h1>
        <span className="text-primary font-semibold">{serialNo}.</span>{" "}
        {allData?.question}
      </h1>
      <div className="mt-2">
        {/* <div className="border-[1px] border-primary rounded p-[16px]">
          {defaultValue}
        </div> */}
      </div>
    </div>
  );
}

export default InputType;
