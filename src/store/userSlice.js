import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const userSlice = createSlice({
  name: "user",
  initialState: {
    personalInfo: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      jobTitle: "",
      email: "",
      city: "",
      state: "",
      linkedInUrl: "",
      githubUrl: "",
      portfolioLink: "",
    },
    workHistory: [
      {
        id: uuidv4(),
        positionTitle: "",
        companyName: "",
        startDate: "",
        endDate: "",
        summary: "",
      },
    ],
    educationData: [
      {
        id: uuidv4(),
        schoolName: "",
        schoolLocation: "",
        startDate: "",
        endDate: "",
        degree: "",
        field: "",
        description: "",
      },
    ],
    skillsData: [
      {
        id: uuidv4(),
        name: "",
      },
    ],
    summary: "",
  },
  reducers: {
    setPersonalInfo: (state, action) => {
      state.personalInfo = action.payload;
    },
    setWorkHistory: (state, action) => {
      state.workHistory = action.payload;
    },
    setEducationData: (state, action) => {
      state.educationData = action.payload;
    },
    setSkillsData: (state, action) => {
      state.skillsData = action.payload;
    },
    setSummary: (state, action) => {
      state.summary = action.payload;
    },
  },
});

export const {
  setPersonalInfo,
  setWorkHistory,
  setEducationData,
  setSkillsData,
  setSummary,
} = userSlice.actions;

export default userSlice.reducer;
