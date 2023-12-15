import PageNavigation from "../PageNavigation";
import TipsTemplateCard from "./TipsTemplateCard";

const SkillsTips = () => {
  return (
    <>
      <PageNavigation prev="/editor/education" next="/editor/skills" />
      <TipsTemplateCard
        title="Excellent progress! Now, let's highlight your key skills."
        points={[
          "Incorporate keywords from job descriptions so employers and applicant tracking systems can scan your resume.",
          "Highlight a mix of hard skills like programming and soft skills like team management.",
        ]}
      />
    </>
  );
};
export default SkillsTips;
