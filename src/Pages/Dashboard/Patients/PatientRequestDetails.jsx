import React from "react";
import { Breadcrumb } from "antd";
import { useNavigate } from "react-router-dom";
import MultipleChoice from "../../../Components/Patients/SurveyAnswers/MultipleChoice";

const SurveyAnswers = [
  {
    id: 1,
    question: "How old is your child?",
    answer: 18,
    questionType: "multiple-choice",
    option: [13, 14, 15, 16, 17, 18, 19, 20, 21],
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
      "I want therapy for both me and my child",
      "I just want parental advice",
    ],
    questionType: "checkbox",
    option: [
      "I’m seeking one on one therapy for my child only",
      "I want therapy for both me and my child",
      "I just want parental advice",
    ],
  },
  {
    id: 4,
    question:
      "What issues are you having with your child that therapy can help with? (Please type in less then 200 words.)",
    answer: "Female",
    questionType: "paragraph",
    option: [
      "I’m seeking one on one therapy for my child only",
      "I want therapy for both me and my child",
      "I just want parental advice",
    ],
  },
];

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
    option: [13, 14, 15, 16, 17, 18, 19, 20, 21],
  },
  {
    id: 2,
    name: "Please share with us why you’re looking for help today. ( You can select up to 3)",
    type: "checkbox",
    option: [
      "I’m seeking one on one therapy for my child only",
      "I want therapy for both me and my child",
      "I just want parental advice",
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
        <div className="p-[24px]">
          <h1>Survey Answers</h1>
          <MultipleChoice
            defaultValue={SurveyAnswers[0]?.answer}
            allData={SurveyAnswers[0]}
            serialNo={1}
          />

        </div>
      </div>
    </div>
  );
}

export default PatientRequestDetails;
