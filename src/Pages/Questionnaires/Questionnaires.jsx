import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Checkbox } from "antd";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 4,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 20,
    },
  },
};

const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 20,
      offset: 4,
    },
  },
};

function Questionnaires() {
  const makeQuestion = [
    {
      id: 1,
      name: "What issues are you having with your child that therapy can help with? (Please type in less then 200 words.)",
      type: "paragraph",
    },
    {
      id: 2,
      name: "How old is your child?",
      type: "multiple-choice",
      option: ["13", "14", "15", "16", "17", "18", "19", "20", "21"],
    },
    {
      id: 2,
      name: "Please share with us why you’re looking for help today. ( You can select up to 3)",
      type: "checkbox",
      option: [
        {
          label: "I’m seeking one on one therapy for my child only",
          value: "I’m seeking one on one therapy for my child only",
        },
        {
          label: "I want therapy for both me and my child",
          value: "I want therapy for both me and my child",
        },
        {
          label: "I just want parental advice",
          value: "I just want parental advice",
        },
      ],
    },
  ];

  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };

  return (
    <div>
      <Form
        name="dynamic_form_item"
        {...formItemLayoutWithOutLabel}
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.List
          name="names"
          rules={[
            {
              validator: async (_, names) => {
                if (!names || names.length < 2) {
                  return Promise.reject(new Error("At least 2 passengers"));
                }
              },
            },
          ]}
        >
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields.map((field, index) => (
                <Form.Item
                  {...(index === 0
                    ? formItemLayout
                    : formItemLayoutWithOutLabel)}
                  label={index === 0 ? "Passengers" : ""}
                  required={false}
                  key={field.key}
                >
                  <Form.Item
                    {...field}
                    validateTrigger={["onChange", "onBlur"]}
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message:
                          "Please input passenger's name or delete this field.",
                      },
                    ]}
                    noStyle
                  ></Form.Item>
                  <Form.Item
                    {...field}
                    name={[field.name, "isChecked"]}
                    valuePropName="checked"
                    noStyle
                  >
                    <Checkbox style={{ marginLeft: "8px" }}>
                      Is Checked
                    </Checkbox>
                  </Form.Item>
                  {fields.length > 1 ? (
                    <MinusCircleOutlined
                      className="dynamic-delete-button"
                      onClick={() => remove(field.name)}
                    />
                  ) : null}
                </Form.Item>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  style={{
                    width: "60%",
                  }}
                  icon={<PlusOutlined />}
                >
                  Add field
                </Button>
                <Button
                  type="dashed"
                  onClick={() => {
                    add("The head item", 0);
                  }}
                  style={{
                    width: "60%",
                    marginTop: "20px",
                  }}
                  icon={<PlusOutlined />}
                >
                  Add field at head
                </Button>
                <Form.ErrorList errors={errors} />
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Questionnaires;
