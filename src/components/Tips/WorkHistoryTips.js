import PageNavigation from "../PageNavigation";
import TipsTemplateCard from "./TipsTemplateCard";

const WorkHistoryTips = () => {
  return (
    <>
      <PageNavigation
        prev="/editor/personal-info"
        next="/editor/work-history"
      />
      <TipsTemplateCard
        title="Looking good! Let's tackle your professional experience."
        points={[
          "Quantify your professional achievements with numbers and data.",
          "Reframe routine job responsibilities as accomplishments.",
        ]}
      />
    </>
  );
};
export default WorkHistoryTips;
