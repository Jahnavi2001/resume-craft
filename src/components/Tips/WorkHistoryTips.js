import { useSelector } from "react-redux";
import lang from "../../utils/langConstants";
import PageNavigation from "../PageNavigation";
import TipsTemplateCard from "./TipsTemplateCard";

const WorkHistoryTips = () => {
  const langKey = useSelector((store) => store.config.lang);

  const { title, point1, point2 } = lang[langKey].workHistoryTips;
  return (
    <>
      <PageNavigation
        prev="/editor/personal-info"
        next="/editor/work-history"
      />
      <TipsTemplateCard title={title} points={[point1, point2]} />
    </>
  );
};
export default WorkHistoryTips;
