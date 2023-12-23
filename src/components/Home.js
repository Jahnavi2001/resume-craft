import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import ResumeSteps from "./ResumeSteps";

const containerVariants = {
  hidden: {
    x: '100vw'
  },
  visible: {
    x: 0,
    transition: { delay: 0.3, ease: 'easeInOut' },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

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

const Home = () => {
  const navigate = useNavigate();

  const handleCreateResume = () => {
    navigate("/choose-template");
  };

  return (
    <motion.div
      style={{ fontFamily: "Playfair Display" }}
      className="px-6 md:px-20 py-36"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="md:flex gap-16 w-full items-center">
        <div className="md:w-1/2">
          <img
            src={require("../assets/resume-craft-main-logo.png")}
            alt="resume-craft-main-logo"
            className="w-full my-4 object-contain rounded-lg"
          />
        </div>
        <div className="md:w-1/2 my-24">
          <Typography
            variant="h2"
            sx={{
              fontWeight: "600",
              fontSize: "65px",
              fontFamily: "Playfair Display",
            }}
          >
            Unleash your potential with a standout resume!
          </Typography>
          <div className="my-10 text-lg text-justify">
            Resume builder tools assemble well-formatted resume. Through a
            resume craft, you can create a professional-looking resume in a few
            easy steps. This resume craft offers different template options, so
            you can select the template that best fits your needs and style.
          </div>
          <div className="text-center">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              onClick={handleCreateResume}
              className="bg-[#063970] p-4 text-white rounded-lg text-xl"
            >
              Create My Resume Now
            </motion.button>
          </div>
        </div>
      </div>

      <ResumeSteps />
    </motion.div>
  );
};

export default Home;
