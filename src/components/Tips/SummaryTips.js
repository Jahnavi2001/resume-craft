import { useSelector } from "react-redux";
import lang from "../../utils/langConstants";
import PageNavigation from "../PageNavigation";
import TipsTemplateCard from "./TipsTemplateCard";

const SummaryTips = () => {
  const langKey = useSelector((store) => store.config.lang);

  const { title, point1, point2 } = lang[langKey].summaryTips;

  return (
    <>
      <PageNavigation prev="/editor/skills" next="/editor/summary" />
      <TipsTemplateCard title={title} points={[point1, point2]} />
    </>
  );
};
export default SummaryTips;
