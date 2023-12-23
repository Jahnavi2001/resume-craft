import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedTemplateDetails } from "../store/userSlice";
import { motion } from "framer-motion";

const templates = [
  {
    id: "template-1",
    name: "Template1",
    imageSource: require("../assets/template-1.png"),
  },
  {
    id: "template-2",
    name: "Template2",
    imageSource: require("../assets/template-2.png"),
  },
];

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.3 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const ChooseTemplate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelectTemplate = (item) => {
    dispatch(setSelectedTemplateDetails(item));
    navigate("/editor/personal-info");
  };

  return (
    <motion.div
      className="py-36 px-4 md:px-20 min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="text-center flex flex-col gap-4">
        <div className="text-4xl font-semibold">Select a Template</div>
        <div className="text-sm text-slate-500">
          Select a template to get started
        </div>
      </div>
      <div className="flex flex-wrap mx-4 justify-center md:mx-8 mt-12">
        {templates.map((item) => (
          <motion.span
            key={item.id}
            whileHover={{ scale: 1.1 }}
          >
            <img
              onClick={() => handleSelectTemplate(item)}
              src={item.imageSource}
              alt="image-template"
              className="w-72 h-96 m-4 border border-blue-500 rounded-md cursor-pointer"
            />
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default ChooseTemplate;
