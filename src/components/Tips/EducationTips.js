import PageNavigation from "../PageNavigation";
import TipsTemplateCard from "./TipsTemplateCard";

const EducationTips = () => {
  return (
    <>
      <PageNavigation prev="/editor/work-history" next="/editor/education" />
      <TipsTemplateCard
        title="Great job! Up next, your educational milestones."
        points={[
          "Feature degrees, certifications or licenses, and training related to your industry.",
          "Recent graduates: highlight academic projects, awards, and coursework.",
        ]}
      />
    </>
  );
};
export default EducationTips;
