import { useSelector } from "react-redux";
import lang from "../../utils/langConstants";
import PageNavigation from "../PageNavigation";
import TipsTemplateCard from "./TipsTemplateCard";

const EducationTips = () => {
  const langKey = useSelector((store) => store.config.lang);

  const { title, point1, point2 } = lang[langKey].educationTips;
  return (
    <>
      <PageNavigation prev="/editor/work-history" next="/editor/education" />
      <TipsTemplateCard title={title} points={[point1, point2]} />
    </>
  );
};
export default EducationTips;
