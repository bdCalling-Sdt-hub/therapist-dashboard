import React, { useState } from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Checkbox } from "antd";
import { useNavigate } from "react-router-dom";
import MultipleChoice from "../../Components/Patients/SurveyAnswers/MultipleChoice";
import CheckboxType from "../../Components/Patients/SurveyAnswers/CheckboxType";
import InputType from "../../Components/Patients/SurveyAnswers/InputType";
import baseURL from "../../config";
import { useGetAllQuestionQuery } from "../../redux/Features/getAllQuestionApi";
import Swal from "sweetalert2";

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
  const { data, isLoading, isSuccess } = useGetAllQuestionQuery();
  const [questionnairesName, setQuestionnairesName] =
    useState("Couple Therapy");
  const [questionType, setQuestionType] = useState({
    value: "Paragraph",
    label: "Paragraph",
  });
  const [fullSurvey, setFullSurvey] = useState();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  console.log(data?.data?.attributes);

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

  // const onFinish = (values) => {
  //   console.log("Received values of form:", values);
  // };

  const handleQuestionSubmit = async (values) => {
    try {
      console.log("values", values);
      const result = {
        ...values,
        questionType: questionnairesName,
        answerType: questionType?.value,
      };
      console.log(result);
      const response = await baseURL.post("/servey/add", result, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response);
      if (response?.data.statusCode === 201) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: response?.data?.message,
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: error?.response?.data?.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleMultipleChoiceQuestionSubmit = async (values) => {
    try {
      const data = {
        ...values?.questions[0],
        questionType: questionnairesName,
        answerType: questionType?.value,
      };
      console.log(data);
      const response = await baseURL.post("/servey/add", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response);
      if (response?.data.statusCode === 201) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: response?.data?.message,
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: error?.response?.data?.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  // const [question, setQuestion] = useState("");
  // const [option, setOption] = useState([]);

  const handleChange = (value) => {
    console.log(value);
    setQuestionType(value);
  };
  console.log(questionType);
  console.log(questionnairesName);
  return (
    <div className="">
      <div className="p-[24px]">
        <h1 className="text-black text-[24px] rounded-lg font-semibold">
          Manage Questionnaires
        </h1>
        <div className=" p-[24px] bg-white h-[79vh] rounded-xl overflow-hidden overflow-y-scroll mt-[24px]">
          <div>
            <h1 className="text-[16px] font-medium mb-3">
              * Questionnaires Name
            </h1>
            <Select
              defaultValue="Couple Therapy"
              style={{
                width: "100%",
                height: 60,
                fontSize: 26,
                borderRadius: 10,
                border: "2px solid #54A630",
              }}
              onChange={(value) => setQuestionnairesName(value)}
              options={[
                {
                  value: "Couple Therapy",
                  label: "Couple Therapy",
                },
                {
                  value: "Teen Therapy",
                  label: "Teen Therapy",
                },
                {
                  value: "Individual",
                  label: "Individual Therapy",
                },
              ]}
            />
            {/* <Input
              onChange={(e) => setQuestionnairesName(e.target.value)}
              placeholder="Enter Questionnaires Name"
              className="p-4 bg-white rounded border border-primary w-full justify-start items-center gap-4 inline-flex focus:border-primary "
              type="text"
              // defaultValue={questionnairesName}
            /> */}
          </div>

          {/* here qu show */}

          {/* <div className="border-b-2 border-secondary pb-5">
            {data?.data?.attributes?.map((data, index) => (
              <div key={index}>
                {data?.answerType === "Multiple" && (
                  <MultipleChoice
                    // defaultValue={data}
                    allData={data}
                    serialNo={index + 1}
                  />
                )}
                {data?.answerType === "Checkbox" && (
                  <CheckboxType
                    // defaultValues={data}
                    allData={data}
                    serialNo={index + 1}
                  />
                )}

                {data?.answerType === "Paragraph" && (
                  <InputType
                    // defaultValue={data}
                    allData={data}
                    serialNo={index + 1}
                  />
                )}
              </div>
            ))}
          </div> */}

          {/* here qu add */}
          <div>
            <div className="flex bg-white  rounded-xl  mt-[24px]">
              {questionType?.value == "Paragraph" ? (
                <>
                  <Form
                    name="basic"
                    labelCol={{ span: 22 }}
                    wrapperCol={{ span: 40 }}
                    layout="vertical"
                    // initialValues={{
                    //   remember: true,
                    //   matchName: result?.matchName,
                    //   eventName: result?.eventDetails?.eventName,
                    // }}
                    className="mx-5"
                    onFinish={handleQuestionSubmit}
                    //   onFinishFailed={handleCompanyInformationFailed}
                    autoComplete="off"
                  >
                    <div className="flex-1">
                      <Form.Item
                        name="question"
                        label={<span className=" text-[18px] ">Question</span>}
                        className="flex-1"
                        rules={[
                          {
                            required: true,
                            message: "Please input your Question!",
                          },
                        ]}
                      >
                        <Input
                          // name="publisherName"
                          // onChange={(e) => setPublisherName(e.target.value)}
                          placeholder="Enter Question"
                          className="p-4
                rounded w-[500px] 
                justify-start 
                mt-[12px]
                items-center 
                gap-4 inline-flex"
                        />
                      </Form.Item>
                    </div>

                    <Button
                      htmlType="submit"
                      // onClick={handleAddToBlog}
                      block
                      className="block w-[500px] h-[56px] mt-[30px] px-2 py-4  text-white bg-gradient-to-r from-[#54A630] to-[#54A630] rounded-lg"
                      style={{
                        marginTop: "30px",
                        backgroundColor: "red",
                        color: "#fff",
                        size: "18px",
                        height: "56px",
                      }}
                    >
                      Submit Question
                    </Button>
                  </Form>
                </>
              ) : (
                <div className="w-[790px]">
                  <Form
                    className="py-[24px]"
                    name="dynamic_form_item"
                    {...formItemLayoutWithOutLabel}
                    onFinish={handleMultipleChoiceQuestionSubmit}
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
                                    required: false,
                                    whitespace: true,
                                    message: "Please input the question.",
                                  },
                                ]}
                                noStyle
                              >
                                <Input
                                  className="p-4
                                 rounded w-[500px] 
                                 justify-start 
                                 mt-[12px]
                                 items-center 
                                 gap-4 inline-flex mb-5"
                                  placeholder="Enter Question"
                                />
                              </Form.Item>
                              <Form.Item
                                {...field}
                                name={[field.name, "options"]}
                                validateTrigger={["onChange", "onBlur"]}
                                rules={[
                                  {
                                    required: false,
                                    message:
                                      "Please input at least one option.",
                                  },
                                ]}
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
                                                  required: false,
                                                  whitespace: true,
                                                  message: `Please input the option ${
                                                    optionIndex + 1
                                                  }.`,
                                                },
                                              ]}
                                              noStyle
                                            >
                                              <Input
                                                className="p-4
                                             rounded w-[500px] 
                                             justify-start 
                                             mt-[12px]
                                             items-center 
                                             gap-4 inline-flex"
                                                placeholder={`Option ${
                                                  optionIndex + 1
                                                }`}
                                              />
                                            </Form.Item>
                                            {optionFields.length > 0 && (
                                              <MinusCircleOutlined
                                                size={50}
                                                className="text-[25px]"
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
                                        style={{
                                          marginTop: "30px",
                                          backgroundColor: "#54A630",
                                          color: "white",
                                          size: "18px",
                                          height: "56px",
                                        }}
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
                      <Button
                        htmlType="submit"
                        // onClick={handleAddToBlog}
                        block
                        className="block w-[500px] h-[56px] mt-[30px] px-2 py-4 text-white bg-gradient-to-r from-[#54A630] to-[#54A630] rounded-lg"
                        style={{
                          marginTop: "30px",
                          backgroundColor: "#54A630",
                          color: "#fff",
                          size: "18px",
                          height: "56px",
                        }}
                      >
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              )}

              <div className="p-[24px] border-l-2 border-secondary">
                <Select
                  className=""
                  labelInValue
                  defaultValue={{
                    value: "Paragraph",
                    label: "Paragraph",
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
                      value: "Multiple",
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
