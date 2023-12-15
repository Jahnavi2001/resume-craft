import { Link } from "react-router-dom";
import Header from "./Header/Header";

const ChooseTemplate = () => {
  return (
    <div>
      <Header />
      <div className="my-36 px-20">
        <h1 className="text-4xl font-semibold text-center">
          Select a Template
        </h1>
        <Link to="/editor/personal-info">ChooseTemplate</Link>
      </div>
    </div>
  );
};

export default ChooseTemplate;
