import React, { useState } from "react";
import { Input, Radio, Space } from "antd";

function MultipleChoice({ defaultValue, allData }) {
  //   const [value, setValue] = useState(defaultValue);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    // setValue(e.target.value);
  };

//   console.log(allData);
//   console.log(allData?.option);

  return (
    <div className="mt-4">
      <h1>
        <span className="text-primary font-semibold">1.</span>{" "}
        {allData?.question}
      </h1>
      <Radio.Group onChange={onChange} value={defaultValue}>
        <Space direction="vertical">
          {allData?.option?.map((item) => (
            <Radio key={item} value={item}>{item}</Radio>
          ))}
        </Space>
      </Radio.Group>
    </div>
  );
}

export default MultipleChoice;
