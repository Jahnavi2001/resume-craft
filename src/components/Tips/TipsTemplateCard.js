import tipsImage from "../../assets/tips-image.jpeg";

const TipsTemplateCard = ({ title, points }) => {
  return (
    <div
      className="px-8 py-6 rounded-md border"
      style={{
        boxShadow: "0 2px 12px 0 rgba(0, 0, 0, 0.24)",
        fontFamily: "Poppins, serif",
      }}
    >
      <h1
        className="text-3xl font-bold flex gap-3"
        style={{ fontSize: "32px", lineHeight: "40px" }}
      >
        <div>
          <img src={tipsImage} alt="tips-image" className="w-14 h-12 rounded-lg" />
        </div>
        <div>{title}</div>
      </h1>
      <ul className="bg-slate-200 dark:bg-gray-700 mt-5 p-4 text-lg opacity-70 flex flex-col gap-1">
        <li className="flex gap-2">
          <div className="w-1 h-1 bg-black rounded-full mt-3"></div>
          <div>{points[0]}</div>
        </li>
        <li className="flex gap-2">
          <div className="w-1 h-1 bg-black rounded-full mt-3"></div>
          <div>{points[1]}</div>
        </li>
      </ul>
    </div>
  );
};
export default TipsTemplateCard;
