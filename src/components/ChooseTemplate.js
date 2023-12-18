import Header from "./Header/Header";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedTemplateDetails } from "../store/userSlice";

const templates = [
  {
    id: 'template-1',
    name: "Template1",
    imageSource: require("../assets/template-1.png"),
  },
  {
    id: 'template-2',
    name: "Template2",
    imageSource: require("../assets/template-2.png"),
  },
];

const ChooseTemplate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelectTemplate = (item) => {
    dispatch(setSelectedTemplateDetails(item));
    navigate("/editor/personal-info");
  };

  return (
    <div>
      <Header />
      <div className="py-36 px-4 md:px-20 dark:bg-[#1D1F25] dark:text-white min-h-screen">
        <div className="text-center flex flex-col gap-4">
          <div className="text-4xl font-semibold">Select a Template</div>
          <div className="text-sm text-slate-500">
            Select a template to get started
          </div>
        </div>
        <div className="flex flex-wrap mx-4 justify-center md:mx-8 mt-12">
          {templates.map((item) => (
            <img
              onClick={() => handleSelectTemplate(item)}
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
