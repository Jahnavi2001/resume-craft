import { defaultValues } from "../utils/defaultData";

export const useUserData = (user) => {
  const { workHistory, educationData, skillsData } = user;

  const { workHistoryDefault, educationDataDefault, skillsDataDefault } =
    defaultValues;

  const workHistoryDetails = () => {
    if (
      workHistory[0]?.positionTitle ||
      workHistory[0]?.companyName ||
      workHistory[0]?.startDate ||
      workHistory[0]?.endDate ||
      workHistory[0]?.summary
    ) {
      return workHistory;
    }
    return workHistoryDefault;
  };

  const educationDetails = () => {
    if (
      educationData[0]?.schoolName ||
      educationData[0]?.schoolLocation ||
      educationData[0]?.startDate ||
      educationData[0]?.endDate ||
      educationData[0]?.degree ||
      educationData[0]?.description
    ) {
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
