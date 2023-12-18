import Header from "./Header/Header";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { setSelectedTemplateName } from "../store/userSlice";

const templates = [
  {
    id: uuidv4(),
    name: "Template1",
    imageSource: require("../assets/template-1.png"),
  },
  {
    id: uuidv4(),
    name: "Template2",
    imageSource: require("../assets/template-2.png"),
  },
];

const ChooseTemplate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelectTemplate = (name) => {
    dispatch(setSelectedTemplateName(name));
    navigate("/editor/personal-info");
  };

  return (
    <div>
      <Header />
      <div className="py-36 px-20 dark:bg-[#1D1F25] dark:text-white pb-44">
        <div className="text-center flex flex-col gap-4">
          <div className="text-4xl font-semibold">Select a Template</div>
          <div className="text-sm text-slate-500">
            Select a template to get started
          </div>
        </div>
        <div className="flex flex-wrap mx-8 mt-12">
          {templates.map((item) => (
            <img
              onClick={() => handleSelectTemplate(item.name)}
              src={item.imageSource}
              alt="image-template"
              className="w-72 h-96 m-4 border border-blue-500 rounded-md cursor-pointer"
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseTemplate;
