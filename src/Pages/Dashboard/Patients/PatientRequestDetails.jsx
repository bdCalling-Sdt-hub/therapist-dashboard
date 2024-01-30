import React from "react";
import { Breadcrumb } from "antd";
import { useNavigate } from "react-router-dom";
import MultipleChoice from "../../../Components/Patients/SurveyAnswers/MultipleChoice";
import CheckboxType from "../../../Components/Patients/SurveyAnswers/CheckboxType";
import InputType from "../../../Components/Patients/SurveyAnswers/InputType";

const SurveyAnswers = [
  {
    id: 1,
    question: "How old is your child?",
    answer: "18",
    questionType: "multiple-choice",
    option: ["13", "14", "15", "16", "17", "18", "19", "20", "21"],
  },
  {
    id: 2,
    question: "What is their sex?",
    answer: "Female",
    questionType: "multiple-choice",
    option: ["Male", "Female"],
  },
  {
    id: 3,
    question:
      "Please share with us why you’re looking for help today. ( You can select up to 3)",
    answer: [
      "I’m seeking one on one therapy for my child only",
      "I just want parental advice",
    ],
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
    answer: [
      "I’m seeking one on one therapy for my child only",
      "I just want parental advice",
    ],
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

function PatientRequestDetails() {
  const navigate = useNavigate();
  return (
    <div className="p-[24px]">
      <Breadcrumb
        separator={<p className="text-[18px] text-[#686868]">/</p>}
        items={[
          {
            title: (
              <p
                onClick={() => navigate("/patientsRequest")}
                className="text-[18px] font-semibold hover:text-primary cursor-pointer text-black"
              >
                Patients Request
              </p>
            ),
          },
          {
            title: (
              <p className="text-[18px] text-primary font-semibold">Details</p>
            ),
          },
        ]}
      />
      <div className="bg-white h-[79vh] rounded-xl overflow-hidden overflow-y-scroll mt-[24px]">
        <div>
          <div className="flex bg-white rounded-md  p-[16px]">
            <div>
              <img
                className="w-[100px] h-[100px] rounded-full"
                src="https://i.ibb.co/f1YyLM4/Ellipse-2322.png"
                alt=""
              />
            </div>
            <div className="flex gap-3 flex-col ">
              <div>
                <h1 className="text-[22px] font-semibold">Dianne Russell</h1>
                <p className="text-[14px] font-medium ">Teen Therapy(13-18)</p>
              </div>
              {/* <div className="flex gap-5">
                <button className="text-white bg-primary text-[18px] rounded  px-[20px]">
                  Accept
                </button>
                <button
                  onClick={() => navigate("/patientsRequest")}
                  className=" border-[1px] border-primary text-primary text-[18px]  rounded  p-[4px] px-[20px] "
                >
                  Delete
                </button>
              </div> */}
              <div className="flex gap-5">
                <button className=" border-[1px] border-primary text-primary text-[18px]  rounded  p-[4px] px-[20px] ">
                  Accepted
                </button>
                <button
                  onClick={() => navigate("/patientsRequest/skdfls/sdflkjsd")}
                  className="text-white bg-primary text-[18px] rounded  px-[20px]"
                >
                  Assign Therapist
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Patients Details */}
        <div className="p-[24px]">
          <h1 className="text-[18px] font-semibold">Patient Details</h1>
          <p>User Name: Dianne Russell</p>
          <p>Email: diannerussell@gmail.com</p>
          <p>Date of Birth: 17/12/2023</p>
          <p>Survey: Teen Therapy(13-18)</p>
        </div>
        {/* Therapists List */}
        <div className="px-[24px] mb-6">
          <h1 className="text-[18px] font-semibold">Survey Answers</h1>

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
      </div>
    </div>
  );
}

export default PatientRequestDetails;
