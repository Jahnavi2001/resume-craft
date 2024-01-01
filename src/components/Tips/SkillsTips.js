import { useSelector } from "react-redux";
import lang from "../../utils/langConstants";
import PageNavigation from "../PageNavigation";
import TipsTemplateCard from "./TipsTemplateCard";

const SkillsTips = () => {
  const langKey = useSelector((store) => store.config.lang);
  const { title, point1, point2 } = lang[langKey].skillsTips;
  
  return (
    <>
      <PageNavigation prev="/editor/education" next="/editor/skills" />
      <TipsTemplateCard title={title} points={[point1, point2]} />
    </>
  );
};
export default SkillsTips;
