import { useNavigate } from "react-router-dom";
import Header from "./Header/Header";
import { Typography } from "@mui/material";
import resumeCraftMainLogo from "../assets/resume-craft-main-logo.png";
import ResumeSteps from "./ResumeSteps";

const Home = () => {
  const navigate = useNavigate();

  const handleCreateResume = () => {
    navigate("/choose-template");
  };

  return (
    <div style={{ fontFamily: "Playfair Display" }}>
      <Header />

      <div className="px-6 md:px-20 my-36">
        <div className="md:flex gap-16 w-full items-center">
          <div className="md:w-1/2">
            <img
              src={resumeCraftMainLogo}
              alt="resume-craft-main-logo"
              className="w-full my-4 object-contain"
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
              resume craft, you can create a professional-looking resume in a
              few easy steps. This resume craft offers different template
              options, so you can select the template that best fits your needs
              and style.
            </div>
            <div className="text-center">
              <button
                onClick={handleCreateResume}
                className="bg-[#063970] p-4 text-white rounded-lg text-xl"
              >
                Create My Resume Now
              </button>
            </div>
          </div>
        </div>

        <ResumeSteps />
      </div>
    </div>
  );
};

export default Home;
