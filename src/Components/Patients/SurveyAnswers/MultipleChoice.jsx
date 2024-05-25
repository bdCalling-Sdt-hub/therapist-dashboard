import React, { useState } from "react";
import { Radio, Space } from "antd";

function MultipleChoice({ defaultValue, allData, serialNo }) {
  //   const [value, setValue] = useState(defaultValue);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    // setValue(e.target.value);
  };

  //   console.log(allData);
  //   console.log(allData?.option);
console.log("aiman",allData);
  return (
    <div className="mt-4">
      <h1>
        <span className="text-primary font-semibold">{serialNo}.</span> {" "}
        {allData?.question}
      </h1>
      <Radio.Group onChange={onChange} >
        <Space direction="vertical">
          {allData?.options?.map((item) => (
            <Radio key={item} value={item}>
              {item}
            </Radio>
          ))}
        </Space>
      </Radio.Group>
    </div>
  );
}

export default MultipleChoice;
