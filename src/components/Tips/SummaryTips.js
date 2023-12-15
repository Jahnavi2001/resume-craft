import PageNavigation from "../PageNavigation"
import TipsTemplateCard from "./TipsTemplateCard"

const SummaryTips = () => {
  return (
    <>
      <PageNavigation prev="/editor/skills" next="/editor/summary" />
      <TipsTemplateCard
        title="Almost done! Let's bring it all together with your summary."
        points={[
          "Provide a concise, high-level overview of your professional achievements and strengths.",
          "Highlight your job title, experience, and key skills.",
        ]}
      />
    </>
  )
}
export default SummaryTips