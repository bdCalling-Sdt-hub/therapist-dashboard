import React from 'react';
import { useGetAllQuestionQuery } from '../../redux/Features/getAllQuestionApi';
import MultipleChoice from '../../Components/Patients/SurveyAnswers/MultipleChoice';
import CheckboxType from '../../Components/Patients/SurveyAnswers/CheckboxType';
import InputType from '../../Components/Patients/SurveyAnswers/InputType';
import { useParams } from 'react-router-dom';

const NumberOfQuestion = () => {
    const { data, isLoading, isSuccess } = useGetAllQuestionQuery();
    const {id} = useParams();
    console.log(data);
    console.log(id);
    const filter = data?.data?.attributes?.filter((data) => data?.questionType.split(" ")[0]==id);
    return (
        <div className=''>
        <h1 className="text-black text-[24px] rounded-lg font-semibold pt-5 pl-10">
          Manage Questionnaires
        </h1>
      
    
        <div className=" p-[24px] m-10 bg-white h-[79vh] rounded-xl overflow-hidden overflow-y-scroll">

       

        <div className=" border-secondary pb-5">
        {filter?.map((data, index) => (
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
        </div>
        </div>
        </div>
    );
}

export default NumberOfQuestion;
