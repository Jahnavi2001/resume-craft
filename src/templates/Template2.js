import { useSelector } from "react-redux";
import { defaultValues } from "../utils/defaultData";
import { getMMMYYYYFromDateString } from "../utils/date";
import { useUserData } from "../hooks/useUserData";

const Template2 = () => {
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
      <div
        id="template-2"
        className="flex h-min"
        style={{ backgroundColor: "#f7eebb" }}
      >
        <div className="flex flex-col items-center w-4/12 gap-4 pt-4 bg-[#583131] px-2">
          <div className="my-6">
            {personalInfo.profilePic && (
              <img
                className="rounded-full w-28 h-28 bg-gray-300"
                src={personalInfo.profilePic}
                alt="profile-pic"
              />
            )}
            {!personalInfo.profilePic && (
              <div className="w-28 h-28 rounded-full bg-[#f7eebb] text-6xl flex justify-center items-center">
                {personalInfo.firstName.charAt(0) ||
                  personalInfoDefault.firstName.charAt(0)}
                {personalInfo.lastName.charAt(0) ||
                  personalInfoDefault.lastName.charAt(0)}
              </div>
            )}
          </div>

          <div className="font-bold text-center">
            <div className="text-white text-2xl">
              {personalInfo.firstName || personalInfoDefault.firstName}{" "}
              {personalInfo.lastName || personalInfoDefault.lastName}
            </div>
            <h5 className="text-[#adccc7]">
              {personalInfo.jobTitle || personalInfoDefault.jobTitle}
            </h5>
          </div>

          <div className="flex flex-col gap-2">
            <div className="px-2 bg-white text-black">Email:</div>

            <div className="text-white">
              {personalInfo.email || personalInfoDefault.email}
            </div>

            <div className="px-2 bg-white text-black">Contact:</div>

            <div className="text-white">
              {personalInfo.phoneNumber || personalInfoDefault.phoneNumber}
            </div>

            <div className="px-2 bg-white text-black">LinkedIn Url:</div>
            <div className="text-white">
              {personalInfo.linkedInUrl || personalInfoDefault.linkedInUrl}
            </div>

            <div className="px-2 bg-white text-black">Github Url:</div>
            <div className="text-white">
              {personalInfo.githubUrl || personalInfoDefault.githubUrl}
            </div>

            <div className="px-2 bg-white text-black">Address:</div>
            <div className="text-white">
              {personalInfo.city || personalInfoDefault.city},{" "}
              {personalInfo.state || personalInfoDefault.state}
            </div>
          </div>
        </div>

        <div className="flex flex-col p-4 w-8/12 gap-3">
          <div>
            <div className="text-justify">{summary || summaryDefault}</div>
          </div>

          <div>
            <div className="bg-white px-1 py-0.5 text-lg font-semibold text-[#4b6982] mb-2">
              Professional Experience
            </div>
            <div>
              {getWorkHistory.map((item) => (
                <div className="text-sm" key={item.id}>
                  <div>
                    <div className="text-lg font-semibold">
                      {item.positionTitle}
                    </div>
                    <div className="flex gap-2">
                      <span>{item.companyName}</span> |
                      <span className="opacity-50">
                        {getMMMYYYYFromDateString(item.startDate)} -
                        {getMMMYYYYFromDateString(item.endDate)}
                      </span>
                    </div>
                  </div>
                  <ul>
                    {item.summary.split(".").map(
                      (point) =>
                        point && (
                          <li className="flex gap-3 my-2" key={point}>
                            <div className="w-1 h-1 bg-[#DE8534] rounded-full mt-2"></div>
                            <div>{point}</div>
                          </li>
                        )
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-light text-lg font-semibold bg-white px-1 py-0.5 text-[#4b6982] mb-2">
              Education
            </div>
            <div>
              {getEducationData.map((item) => (
                <div className="text-sm" key={item.id}>
                  <div className="text-lg font-semibold">{item.degree}</div>
                  <div className="flex gap-2">
                    <span>
                      {item.schoolName}, {item.schoolLocation}
                    </span>
                    |
                    <span className="opacity-50">
                      {getMMMYYYYFromDateString(item.startDate)} -{" "}
                      {getMMMYYYYFromDateString(item.endDate)}
                    </span>
                  </div>
                  <ul>
                    <li className="flex gap-3 my-2">
                      <div className="w-[6px] h-[6px] bg-[#DE8534] rounded-full mt-2"></div>
                      <div>{item.description}</div>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-light text-lg font-semibold bg-white px-1 py-0.5 text-[#4b6982]">
              Key Skills
            </div>
            <ul>
              {getSkillsData.map((item) => (
                <li className="flex gap-3 my-2" key={item.id}>
                  <div className="w-[6px] h-[6px] bg-[#DE8534] rounded-full mt-2"></div>
                  <div>{item.name}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template2;
