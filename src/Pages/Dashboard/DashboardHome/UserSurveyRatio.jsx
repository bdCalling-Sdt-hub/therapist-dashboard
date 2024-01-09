import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function UserSurveyRatio() {
  return (
    <div className="bg-white border-1 shadow-xl border-secondary rounded-xl  w-[380px] p-[24px]">
      <h1 className="text-[22px] font-bold">User Survey Ratio</h1>
      <div className="flex gap-5 flex-col ">
        <div className="flex gap-4 items-center mt-3">
          <CircularProgressbar
            className="w-[60px] h-[60px]"
            styles={buildStyles({
              rotation: 0.25,
              strokeLinecap: "butt",
              textSize: "20px",
              pathTransitionDuration: 0.5,
              pathColor: "#54A630",
              textColor: "#54A630",
              trailColor: "#d6d6d6",
              backgroundColor: "#54A630",
            })}
            value={0.66}
            maxValue={1}
            text={`${0.66 * 100}%`}
          />
          <h1>Individual</h1>
        </div>
        <div className="flex gap-4 items-center mt-3">
          <CircularProgressbar
            className="w-[60px] h-[60px]"
            styles={buildStyles({
              rotation: 0.25,
              strokeLinecap: "butt",
              textSize: "20px",
              pathTransitionDuration: 0.5,
              pathColor: "#54A630",
              textColor: "#54A630",
              trailColor: "#d6d6d6",
              backgroundColor: "#54A630",
            })}
            value={0.66}
            maxValue={1}
            text={`${0.68 * 100}%`}
          />
          <h1>Couples</h1>
        </div>
        <div className="flex gap-4 items-center mt-3">
          <CircularProgressbar
            className="w-[60px] h-[60px]"
            styles={buildStyles({
              rotation: 0.25,
              strokeLinecap: "butt",
              textSize: "20px",
              pathTransitionDuration: 0.5,
              pathColor: "#54A630",
              textColor: "#54A630",
              trailColor: "#d6d6d6",
              backgroundColor: "#54A630",
            })}
            value={0.76}
            maxValue={1}
            text={`${0.67 * 100}%`}
          />
          <h1>Teen Therapy(13-18)</h1>
        </div>
      </div>
    </div>
  );
}

export default UserSurveyRatio;
