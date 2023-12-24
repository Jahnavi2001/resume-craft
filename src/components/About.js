import about from "../assets/about.png";
import myResumeImage from "../assets/my-resume-image.png";
import { motion } from "framer-motion";
import lang from "../utils/langConstants";
import { useSelector } from "react-redux";

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

const About = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{ fontFamily: "Playfair Display" }}
    >
      <div className="py-36 px-4 min-h-screen">
        <div className="text-center">
          <h1 className="font-semibold text-5xl">
            {lang[langKey].about.header}
          </h1>
          <p className="text-gray-400 mt-5">{lang[langKey].about.subheader}</p>
        </div>
        <div
          className="w-full md:w-5/12 mx-auto mt-14 rounded-xl p-8 border"
          style={{ boxShadow: "0 2px 12px 0 rgba(0, 0, 0, 0.24)" }}
        >
          <img src={about} alt="about-info" className="w-12 h-12" />
          <div>
            <div className="mt-4 md:flex gap-6">
              <div className="w-full md:w-3/4 text-justify text-lg md:text-[15px]">
                {lang[langKey].about.content}
              </div>
              <div className="w-full mt-4 md:w-1/4 md:mt-0">
                <img
                  src={myResumeImage}
                  alt="my-resume-icon"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
