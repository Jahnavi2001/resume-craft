import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Home";
import ChooseTemplate from "../ChooseTemplate";
import About from "../About";
import Editor from "../Editor";
import PersonalInfo from "../DetailsFilling/PersonalInfo";
import WorkHistory from "../DetailsFilling/WorkHistory";
import Education from "../DetailsFilling/Education";
import Skills from "../DetailsFilling/Skills";
import Summary from "../DetailsFilling/Summary";
import WorkHistoryTips from "../Tips/WorkHistoryTips";
import EducationTips from "../Tips/EducationTips";
import SkillsTips from "../Tips/SkillsTips";
import SummaryTips from "../Tips/SummaryTips";
import SaveResume from "../SaveResume";
import { AnimatePresence } from "framer-motion";

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/choose-template" element={<ChooseTemplate />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/editor" element={<Editor />}>
          {/* Nested Routes */}
          <Route
            path="/editor/personal-info"
            element={<PersonalInfo />}
          ></Route>
          <Route
            path="/editor/work-history-tips"
            element={<WorkHistoryTips />}
          ></Route>
          <Route path="/editor/work-history" element={<WorkHistory />}></Route>
          <Route
            path="/editor/education-tips"
            element={<EducationTips />}
          ></Route>
          <Route path="/editor/education" element={<Education />}></Route>
          <Route path="/editor/skills-tips" element={<SkillsTips />}></Route>
          <Route path="/editor/skills" element={<Skills />}></Route>
          <Route path="/editor/summary-tips" element={<SummaryTips />}></Route>
          <Route path="/editor/summary" element={<Summary />}></Route>
          <Route path="/editor/save-resume" element={<SaveResume />}></Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
