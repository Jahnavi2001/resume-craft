import Template2 from "../templates/Template2";
import Template1 from "../templates/Template1";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.3 },
  },
};

const Editor = () => {
  const selectedTemplateDetails = useSelector(
    (store) => store.user.selectedTemplateDetails
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedTemplateDetails) {
      navigate("/choose-template");
    }
  }, [selectedTemplateDetails]);

  return (
    <motion.div variants={containerVariants} exit="exit">
      {selectedTemplateDetails && (
        <div className="flex flex-col md:flex-row py-36 px-8 gap-4 min-h-screen">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="md:w-1/2"
          >
            <Outlet />
          </motion.div>
          <div className="md:w-1/2">
            {selectedTemplateDetails.name === "Template1" ? (
              <Template1 />
            ) : (
              <Template2 />
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};
export default Editor;
