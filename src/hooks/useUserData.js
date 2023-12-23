import { defaultValues } from "../utils/defaultData";

export const useUserData = (user) => {
  const { workHistory, educationData, skillsData } = user;

  const { workHistoryDefault, educationDataDefault, skillsDataDefault } =
    defaultValues;

    const workHistoryDetails = () => {
      const { positionTitle, companyName, startDate, endDate, summary } = workHistory[0] || {};
      if (positionTitle || companyName || startDate || endDate || summary) {
        return workHistory;
      }
      return workHistoryDefault;
    };

    const educationDetails = () => {
      const { schoolName, schoolLocation, startDate, endDate, degree, description } = educationData[0] || {};
      if (schoolName || schoolLocation || startDate || endDate || degree || description) {
        return educationData;
      }
      return educationDataDefault;
    };

  const skillsDetails = () => {
    if (skillsData[0]?.name) {
      return skillsData;
    }
    return skillsDataDefault;
  };

  return {
    getWorkHistory: workHistoryDetails(),
    getEducationData: educationDetails(),
    getSkillsData: skillsDetails(),
  };
};
