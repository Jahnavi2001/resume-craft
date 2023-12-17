import React from "react";
import { AiFillMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsPhoneFill, BsBroadcastPin } from "react-icons/bs";
import { useSelector } from "react-redux";
import { getMMMYYYYFromDateString } from "../utils/date";
import { defaultValues } from "../utils/defaultData";
import { useUserData } from "../hooks/useUserData";

const Template1 = () => {
  const { personalInfo, workHistory, educationData, skillsData, summary } =
    useSelector((store) => store.user);

  const { personalInfoDefault, summaryDefault } = defaultValues;

  const { getWorkHistory, getEducationData, getSkillsData } = useUserData({
    workHistory,
    educationData,
    skillsData,
  });

  return (
    <div
      style={{
        boxShadow: "0 2px 12px 0 rgba(0, 0, 0, 0.24)",
      }}
    >
      <div id="template-1" className="py-4">
        <div className="px-6 pb-2 flex gap-4" style={{ alignItems: "center" }}>
          <div className="w-[60%] flex flex-col gap-4">
            <div className="text-[#DE8534] text-6xl">
              {personalInfo.firstName || personalInfoDefault.firstName}{" "}
              {personalInfo.lastName || personalInfoDefault.lastName}
            </div>
            <div className="text-xl">
              {personalInfo.jobTitle || personalInfoDefault.jobTitle}
            </div>
          </div>
          <div className="w-[40%] flex flex-col gap-2 items-end text-xs">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>{personalInfo.email || personalInfoDefault.email}</div>
              <div>
                <AiFillMail />
              </div>
            </div>
            <div className="flex gap-2">
              {personalInfo.phoneNumber || personalInfoDefault.phoneNumber}
              <BsPhoneFill />
            </div>
            <div className="flex gap-2">
              {personalInfo.city || personalInfoDefault.city},{" "}
              {personalInfo.state || personalInfoDefault.state}
              <BsBroadcastPin />
            </div>
            <div className="flex gap-2">
              <div className="break-all">
                {personalInfo.githubUrl || personalInfoDefault.githubUrl}
              </div>
              <AiFillGithub />
            </div>
            <div className="flex gap-2">
              <div className="break-all">
                {personalInfo.linkedInUrl || personalInfoDefault.linkedInUrl}
              </div>
              <AiFillLinkedin className="w-6 h-6" />
            </div>
          </div>
        </div>
        <div
          style={{ fontFamily: "Source Sans Pro", fontSyle: "normal" }}
          className="py-4 px-6 text-justify opacity-80 text-sm"
        >
          {summary || summaryDefault}
        </div>
        <div className="px-4">
          <div className="text-[#DE8534] text-xl border-b-2 border-b-[#DE8534]">
            Professional Experience
          </div>

          {getWorkHistory.map((item) => (
            <div className="text-sm" key={item.id}>
              <div className="flex gap-4 items-center">
                <div className="text-lg">{item.positionTitle}</div>
                <div
                  style={{ fontFamily: "Source Sans Pro", fontSyle: "normal" }}
                >
                  {item.companyName} |{" "}
                  {getMMMYYYYFromDateString(item.startDate)} -
                  {getMMMYYYYFromDateString(item.endDate)}
                </div>
              </div>
              <ul style={{ fontFamily: "Source Sans Pro", fontSyle: "normal" }}>
                {item.summary.split(".").map(
                  (point) =>
                    point && (
                      <li className="flex gap-3 items-center" key={point}>
                        <div className="w-1 h-1 bg-[#DE8534] rounded-full mt-2"></div>
                        <div>{point}</div>
                      </li>
                    )
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="px-4">
          <div className="text-[#DE8534] text-xl border-b-2 border-b-[#DE8534]">
            Education
          </div>
          {getEducationData.map((item) => (
            <div className="mt-3 text-sm" key={item.id}>
              <div className="flex gap-4 items-center">
                <div className="text-lg">{item.degree}</div>
                <div
                  style={{ fontFamily: "Source Sans Pro", fontSyle: "normal" }}
                >
                  {item.schoolName}, {item.schoolLocation} |{" "}
                  {getMMMYYYYFromDateString(item.startDate)} -{" "}
                  {getMMMYYYYFromDateString(item.endDate)}
                </div>
              </div>
              <ul style={{ fontFamily: "Source Sans Pro", fontSyle: "normal" }}>
                <li className="flex gap-3">
                  <div className="w-[6px] h-[6px] bg-[#DE8534] rounded-full mt-2"></div>
                  <div>{item.description}</div>
                </li>
              </ul>
            </div>
          ))}
        </div>
        <div className="px-4">
          <div className="text-[#DE8534] text-xl border-b-2 border-b-[#DE8534]">
            Key Skills
          </div>
          <ul style={{ fontFamily: "Source Sans Pro", fontSyle: "normal" }}>
            {getSkillsData.map((item) => (
              <li className="flex gap-3" key={item.id}>
                <div className="w-[6px] h-[6px] bg-[#DE8534] rounded-full mt-2"></div>
                <div>{item.name}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Template1;
