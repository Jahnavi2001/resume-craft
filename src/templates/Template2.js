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
    <>
      <div
        id="template-2"
        className="w-full"
        style={{ border: "1px solid #4b6982", backgroundColor: "#f7eebb" }}
      >
        <div className="flex">
          <div
            className="flex flex-col items-center pt-5 w-4/12 gap-4"
            style={{ backgroundColor: "#583131", flexDirection: "column" }}
          >
            <div>
              <img
                className="rounded align-self-center  "
                src={personalInfo.profilePic}
                alt="profile-pic"
                style={{
                  maxHeight: "180px",
                  minHeight: "100px",
                  width: "100px",
                  background: "grey",
                  padding: 0,
                }}
              />
            </div>

            <div
              className="font-bold text-center"
              style={{ fontFamily: "Serif" }}
            >
              <div className="text-white text-xl">
                {personalInfo.firstName || personalInfoDefault.firstName}{" "}
                {personalInfo.lastName || personalInfoDefault.lastName}
              </div>
              <h5 className="text-[#adccc7] text-md">
                {personalInfo.jobTitle || personalInfoDefault.jobTitle}
              </h5>
            </div>

            <div>
              <div
                className="px-2 mb-2"
                style={{ backgroundColor: "white", color: "black" }}
              >
                Email:
              </div>

              <div style={{ color: "#f7f7f7" }}>
                {personalInfo.email || personalInfoDefault.email}
              </div>

              <div
                className=" px-2 mb-2 mt-2"
                style={{ backgroundColor: "white", color: "black" }}
              >
                Contact:
              </div>

              <div style={{ color: "#f7f7f7" }}>
                {" "}
                {personalInfo.phoneNumber || personalInfoDefault.phoneNumber}
              </div>

              <div
                className=" px-2 mb-2 mt-2 "
                style={{ backgroundColor: "white", color: "black" }}
              >
                Address:
              </div>
              <div style={{ color: "#f7f7f7" }}>
                {personalInfo.city || personalInfoDefault.city},{" "}
                {personalInfo.state || personalInfoDefault.state}
              </div>
            </div>
          </div>

          <div className="flex flex-col px-8 w-8/12">
            <div>
              <div className="text-justify mt-4">
                {summary || summaryDefault}
              </div>
              <hr style={{ height: "5px", backgroundColor: "#4b6982" }} />
            </div>
            <div className="" style={{ fontFamily: "Serif" }}>
              <div className="">
                <div
                  className="text-left bg-light mb-4 "
                  style={{ color: "#4b6982" }}
                >
                  {" "}
                  <h3>
                    <b>Professional Experience</b>{" "}
                  </h3>
                </div>
                <div className=" text-left " style={{ fontSize: "18px" }}>
                  {getWorkHistoryDetails().map((item) => (
                    <div className="text-sm" key={item.id}>
                      <div>
                        <div className="text-lg">{item.positionTitle}</div>
                        <div
                          style={{
                            fontFamily: "Source Sans Pro",
                            fontSyle: "normal",
                          }}
                        >
                          {item.companyName} |{" "}
                          {getMMMYYYYFromDateString(item.startDate)} -
                          {getMMMYYYYFromDateString(item.endDate)}
                        </div>
                      </div>
                      <ul
                        style={{
                          fontFamily: "Source Sans Pro",
                          fontSyle: "normal",
                        }}
                      >
                        {item.summary.split(".").map(
                          (point) =>
                            point && (
                              <li
                                className="flex gap-3 items-center"
                                key={point}
                              >
                                <div className="w-1 h-1 bg-[#DE8534] rounded-full mt-2"></div>
                                <div>{point}</div>
                              </li>
                            )
                        )}
                      </ul>
                    </div>
                  ))}
                  {/* <div>
                    <div className="mt-2">
                      <h4>Trans Global JDG</h4>
                    </div>
                    <div className="mt-2">
                      <b>Executive Head</b>
                    </div>

                    <div className="mt-2 mb-3">
                      <div>Worked in Trans Global JDG from 2015 to 2018.</div>
                      <div>
                        {" "}
                        Human resources generalist with 8 years of experience in
                        HR, including hiring and terminating, disciplining
                        employees and helping department managers improve
                        employee performance. Worked with labor unions to
                        negotiate compensation packages for workers. Organized
                        new hire training initiatives as well as ongoing
                        training to adhere to workplace safety standards. Worked
                        with OSHA to ensure that all safety regulations are
                        followed.
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="w-100 mt-4"> </div>
                <hr style={{ height: "5px", backgroundColor: "#4b6982" }} />
                <div
                  className="bg-light text-left"
                  style={{ color: "#4b6982" }}
                >
                  <h3>
                    <b>Education</b>
                  </h3>
                </div>
                <div className=" text-left">
                  <div style={{ fontSize: "18px" }}>
                    {getWorkHistoryDetails().map((item) => (
                      <div className="text-sm" key={item.id}>
                        <div>
                          <div className="text-lg">{item.positionTitle}</div>
                          <div
                            style={{
                              fontFamily: "Source Sans Pro",
                              fontSyle: "normal",
                            }}
                          >
                            {item.companyName} |{" "}
                            {getMMMYYYYFromDateString(item.startDate)} -
                            {getMMMYYYYFromDateString(item.endDate)}
                          </div>
                        </div>
                        <ul
                          style={{
                            fontFamily: "Source Sans Pro",
                            fontSyle: "normal",
                          }}
                        >
                          {item.summary.split(".").map(
                            (point) =>
                              point && (
                                <li
                                  className="flex gap-3 items-center"
                                  key={point}
                                >
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
                <div className="w-100 mt-4"> </div>
                <hr style={{ height: "5px", backgroundColor: "#4b6982" }} />
                <div className="bg-light text-left ">
                  <h3 style={{ color: "#4b6982" }}>
                    <b>Key Skills</b>
                  </h3>
                </div>
                <div className=" text-left mb-4" style={{ fontSize: "18px" }}>
                  <ul
                    style={{
                      fontFamily: "Source Sans Pro",
                      fontSyle: "normal",
                    }}
                  >
                    {getSkillsDetails().map((item) => (
                      <li className="flex gap-3" key={item.id}>
                        <div className="w-[6px] h-[6px] bg-[#DE8534] rounded-full mt-2"></div>
                        <div>{item.name}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template2;
