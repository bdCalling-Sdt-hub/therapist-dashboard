import React from "react";
import { Checkbox } from "antd";

function CheckboxType({ defaultValues, allData, serialNo }) {
  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };
  const plainOptions = ["Apple", "Pear", "Orange"];
  const options = [
    {
      label: "Apple",
      value: "Apple",
    },
    {
      label: "Pear",
      value: "Pear",
    },
    {
      label: "Orange",
      value: "Orange",
    },
  ];

//   console.log(allData.option);
//   console.log(options);

  return (
    <div className="mt-4">
      <h1>
        <span className="text-primary font-semibold">{serialNo}.</span>{" "}
        {allData?.question}
      </h1>
      <div className="mt-2">
        <Checkbox.Group
          className="flex flex-col gap-3"
          options={allData?.option}
          defaultValue={defaultValues}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default CheckboxType;
