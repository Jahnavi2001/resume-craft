import PageNavigation from "./PageNavigation";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { useReactToPrint } from "react-to-print";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    scale: 1.1,
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      repeatType: "reverse",
      repeat: Infinity,
      duration: 0.3,
    },
  },
};

const SaveResume = () => {
  const selectedTemplateDetails = useSelector(
    (store) => store.user.selectedTemplateDetails
  );

  const handleDownloadPDF = useReactToPrint({
    content: () => document.getElementById(selectedTemplateDetails?.id),
    onBeforePrint: () => {},
    onAfterPrint: () => {},
  });

  return (
    <>
      <PageNavigation prev="/editor/summary" next="/" />
      <div
        className="px-6 py-4 rounded-md border"
        style={{
          boxShadow: "0 2px 12px 0 rgba(0, 0, 0, 0.24)",
          fontFamily: "Poppins",
          borderTop: "3px solid #800000",
        }}
      >
        <h1 className="text-xl font-semibold">Save Resume</h1>
        <p className="text-gray-400">Download your Resume.</p>
        <div className="flex justify-center my-8">
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            onClick={handleDownloadPDF}
            className="bg-[#1c5088] p-2 text-white rounded-lg text-lg flex items-center gap-2"
          >
            <CloudDownloadIcon /> Download Resume
          </motion.button>
        </div>
      </div>
    </>
  );
};
export default SaveResume;
