import { v4 as uuidv4 } from "uuid";

export const defaultValues = {
  personalInfoDefault: {
    firstName: "Vuyyuru",
    lastName: "Jahnavi",
    phoneNumber: "9876543241",
    jobTitle: "Human Resource Manager",
    email: "email@youremail.com",
    city: "Bangalore",
    state: "Karnataka",
    linkedInUrl: "https://www.linkedin.com/in/benjamin-grant-72381ujy3u.",
    githubUrl: "https://github.com/sample-user/project",
    portfolioLink: "",
    profilePic: "",
  },
  workHistoryDefault: [
    {
      id: uuidv4(),
      positionTitle: "Human Resources Manager",
      companyName: "Jim's Widget Factory",
      startDate: "2016-05-04",
      endDate: "2017-08-05",
      summary:
        "Implement effective company policies to ensure that all practices comply with labor and employment regulations.Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment.Develop targeted outreach practices to increase minority recruitment and ensure compliance with affirmative action policies.Monitor scheduled in and out times as well as employee breaks to ensure that proper employment laws are met.",
    },
    {
      id: uuidv4(),
      positionTitle: "Human Resources Associate",
      companyName: "Jim's Widget Factory",
      startDate: "2016-05-04",
      endDate: "2017-08-05",
      summary:
        "Implement effective company policies to ensure that all practices comply with labor and employment regulations.Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment.Develop targeted outreach practices to increase minority recruitment and ensure compliance with affirmative action policies.",
    },
  ],
  educationDataDefault: [
    {
      id: uuidv4(),
      schoolName: "The University of Texas",
      schoolLocation: "Dallas",
      startDate: "2007-04-05",
      endDate: "2011-05-03",
      degree: "Masters in Human Resources",
      field: "",
      description: "Academic Awardee of AY 2007-2008",
    },
  ],
  skillsDataDefault: [
    {
      id: uuidv4(),
      name: "Detail oriented",
    },
    {
      id: uuidv4(),
      name: "Well-versed in Texas employment law",
    },
    {
      id: uuidv4(),
      name: "Excellent written and oral communication skills",
    },
    {
      id: uuidv4(),
      name: "Develops positive workplace relationships",
    },
    {
      id: uuidv4(),
      name: 'Communicator'
    }
  ],
  summaryDefault:
    "Human resources generalist with 8 years of experience in HR, including hiring and terminating, disciplining employees and helping department managers improve employee performance. Worked with labor unions to negotiate compensation packages for workers. Organized new hire training initiatives as well as ongoing training to adhere to workplace safety standards. Worked with OSHA to ensure that all safety regulations are followed.",
};
