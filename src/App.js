import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import ChooseTemplate from "./components/ChooseTemplate";
import Editor from "./components/Editor";
import PersonalInfo from "./components/DetailsFilling/PersonalInfo";
import WorkHistory from "./components/DetailsFilling/WorkHistory";
import Education from "./components/DetailsFilling/Education";
import Skills from "./components/DetailsFilling/Skills";
import Summary from "./components/DetailsFilling/Summary";
import About from "./components/About";
import WorkHistoryTips from "./components/Tips/WorkHistoryTips";
import EducationTips from "./components/Tips/EducationTips";
import SkillsTips from "./components/Tips/SkillsTips";
import SummaryTips from "./components/Tips/SummaryTips";
import SaveResume from "./components/SaveResume";
import { useSelector } from "react-redux";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/choose-template",
    element: <ChooseTemplate />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/editor",
    element: <Editor />,
    children: [
      {
        path: "/editor/personal-info",
        element: <PersonalInfo />,
      },
      {
        path: "/editor/work-history-tips",
        element: <WorkHistoryTips />,
      },
      {
        path: "/editor/work-history",
        element: <WorkHistory />,
      },
      {
        path: "/editor/education-tips",
        element: <EducationTips />,
      },
      {
        path: "/editor/education",
        element: <Education />,
      },
      {
        path: "/editor/skills-tips",
        element: <SkillsTips />,
      },
      {
        path: "/editor/skills",
        element: <Skills />,
      },
      {
        path: "/editor/summary-tips",
        element: <SummaryTips />,
      },
      {
        path: "/editor/summary",
        element: <Summary />,
      },
      {
        path: "/editor/save-resume",
        element: <SaveResume />,
      },
    ],
  },
]);

const App = () => {
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default App;
