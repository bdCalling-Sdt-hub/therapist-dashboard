import React, { useState } from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Checkbox } from "antd";
import { useNavigate } from "react-router-dom";
import MultipleChoice from "../../Components/Patients/SurveyAnswers/MultipleChoice";
import CheckboxType from "../../Components/Patients/SurveyAnswers/CheckboxType";
import InputType from "../../Components/Patients/SurveyAnswers/InputType";

const SurveyAnswers = [
  {
    id: 1,
    question: "How old is your child?",
    questionType: "multiple-choice",
    option: ["13", "14", "15", "16", "17", "18", "19", "20", "21"],
  },
  {
    id: 2,
    question: "What is their sex?",
    questionType: "multiple-choice",
    option: ["Male", "Female"],
  },
  {
    id: 3,
    question:
      "Please share with us why you’re looking for help today. ( You can select up to 3)",
    questionType: "checkbox",
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
  {
    id: 4,
    question:
      "What issues are you having with your child that therapy can help with? (Please type in less then 200 words.)",
    answer:
      "Physical space is often conceived in three linear dimensions, although modern physicists usually con Physical space is often conceived in three linear dimensions, although modern physicists usually con Physical space is often conceived in three linear dimensions, although modern physicists usually conPhysical space is often conceived in three linear dimensions, although modern physicists usually con",
    questionType: "paragraph",
  },
  {
    id: 5,
    question:
      "Please share with us why you’re looking for help today. ( You can select up to 3)",

    questionType: "checkbox",
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

function ManageQuestionnaires() {
  const navigate = useNavigate();
  const [questionnairesName, setQuestionnairesName] =
    useState("Individual Therapy");
  const [fullSurvey, setFullSurvey] = useState();

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
      id: 3,
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

  const sarvay = [
    {
      id: 1,
      name: "Individual Therapy",
      question: [
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
          id: 3,
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
      ],
    },
    {
      id: 2,
      name: "Teen Therapy(13-18)",
      question: [
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
          id: 3,
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
      ],
    },
    {
      id: 3,
      name: "Couple Therapy",
      question: [
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
          id: 3,
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
      ],
    },
  ];

  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };

  const [questionType, setQuestionType] = useState("Paragraph");
  const [question, setQuestion] = useState("");
  const [option, setOption] = useState([]);

  const handleChange = (value) => {
    console.log(value);
    setQuestionType(value);
  };

  return (
    <div>
      <div className="p-[24px] ">
        <h1 className="text-black text-[24px] rounded-lg font-semibold">
          Manage Questionnaires
        </h1>
        <div className=" p-[24px] bg-white h-[79vh] rounded-xl overflow-hidden overflow-y-scroll mt-[24px]">
          <div>
            <h1 className="text-[16px] font-medium mb-3">
              * Questionnaires Name
            </h1>
            <Input
              onChange={(e) => setQuestionnairesName(e.target.value)}
              placeholder="Enter Questionnaires Name"
              className="p-4 bg-white rounded border border-primary w-full justify-start items-center gap-4 inline-flex focus:border-primary "
              type="text"
              // defaultValue={questionnairesName}
            />
          </div>

          {/* here qu show */}

          <div className="border-b-2 border-secondary pb-5">
            {SurveyAnswers.map((data, index) => (
              <div key={index}>
                {data?.questionType === "multiple-choice" && (
                  <MultipleChoice
                    defaultValue={data?.answer}
                    allData={data}
                    serialNo={index + 1}
                  />
                )}
                {data?.questionType === "checkbox" && (
                  <CheckboxType
                    defaultValues={data?.answer}
                    allData={data}
                    serialNo={index + 1}
                  />
                )}

                {data?.questionType === "paragraph" && (
                  <InputType
                    defaultValue={data?.answer}
                    allData={data}
                    serialNo={index + 1}
                  />
                )}
              </div>
            ))}
          </div>

          {/* here qu add */}
          <div>
            <div className="flex bg-white  rounded-xl  mt-[24px]">
              <div className="w-[790px]">
                <Form
                  className="py-[24px]"
                  name="dynamic_form_item"
                  {...formItemLayoutWithOutLabel}
                  onFinish={onFinish}
                  style={{
                    maxWidth: 600,
                  }}
                >
                  <Form.List
                    name="questions"
                    initialValue={[
                      {
                        question: "",
                        options: [""],
                        isChecked: false,
                      },
                    ]}
                  >
                    {(fields, { add, remove }) => (
                      <>
                        {fields.map((field, index) => (
                          <Form.Item
                            {...(index === 0
                              ? formItemLayout
                              : formItemLayoutWithOutLabel)}
                            label={index === 0 ? "Questions" : ""}
                            required={false}
                            key={field.key}
                          >
                            <Form.Item
                              {...field}
                              name={[field.name, "question"]}
                              validateTrigger={["onChange", "onBlur"]}
                              rules={[
                                {
                                  required: true,
                                  whitespace: true,
                                  message: "Please input the question.",
                                },
                              ]}
                              noStyle
                            >
                              <Input
                                className="mb-5"
                                placeholder="Enter Question"
                              />
                            </Form.Item>
                            <Form.Item
                              {...field}
                              name={[field.name, "options"]}
                              validateTrigger={["onChange", "onBlur"]}
                              rules={[
                                {
                                  required: true,
                                  message: "Please input at least one option.",
                                },
                              ]}
                              noStyle
                            >
                              <Form.List name={[field.name, "options"]}>
                                {(
                                  optionFields,
                                  { add: addOption, remove: removeOption }
                                ) => (
                                  <div className="flex flex-col gap-5">
                                    {optionFields.map(
                                      (optionField, optionIndex) => (
                                        <div
                                          className="flex gap-5"
                                          key={optionField.key}
                                        >
                                          <Form.Item
                                            {...optionField}
                                            validateTrigger={[
                                              "onChange",
                                              "onBlur",
                                            ]}
                                            rules={[
                                              {
                                                required: true,
                                                whitespace: true,
                                                message: `Please input the option ${
                                                  optionIndex + 1
                                                }.`,
                                              },
                                            ]}
                                            noStyle
                                          >
                                            <Input
                                              placeholder={`Option ${
                                                optionIndex + 1
                                              }`}
                                            />
                                          </Form.Item>
                                          {optionFields.length > 1 && (
                                            <MinusCircleOutlined
                                              className="dynamic-delete-button"
                                              onClick={() =>
                                                removeOption(optionField.name)
                                              }
                                            />
                                          )}
                                        </div>
                                      )
                                    )}
                                    <Button
                                      type="dashed"
                                      onClick={() => addOption()}
                                      icon={<PlusOutlined />}
                                    >
                                      Add Option
                                    </Button>
                                  </div>
                                )}
                              </Form.List>
                            </Form.Item>
                            {/* <Form.Item
                          {...field}
                          name={[field.name, "isChecked"]}
                          valuePropName="checked"
                          noStyle
                        >
                          <Checkbox style={{ marginLeft: "8px" }}>
                            Is Checked
                          </Checkbox>
                        </Form.Item> */}
                            {fields.length > 1 && (
                              <MinusCircleOutlined
                                className="dynamic-delete-button"
                                onClick={() => remove(field.name)}
                              />
                            )}
                          </Form.Item>
                        ))}
                        {/* <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        style={{
                          width: "60%",
                        }}
                        icon={<PlusOutlined />}
                      >
                        Add Question
                      </Button>
                    </Form.Item> */}
                      </>
                    )}
                  </Form.List>
                  <Form.Item>
                    <Button htmlType="submit">Submit</Button>
                  </Form.Item>
                </Form>
              </div>
              <div className="p-[24px] border-l-2 border-secondary">
                <Select
                  className=""
                  labelInValue
                  defaultValue={{
                    value: questionType,
                    label: questionType,
                  }}
                  style={{
                    width: 250,
                    height: 40,
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      value: "Paragraph",
                      label: "Paragraph",
                    },
                    {
                      value: "Multiple Choice",
                      label: "Multiple Choice",
                    },
                    {
                      value: "Checkbox",
                      label: "Checkbox",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageQuestionnaires;
