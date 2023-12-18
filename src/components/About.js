import Header from "./Header/Header";
import about from "../assets/about.png";
import myResumeImage from "../assets/my-resume-image.png";

const About = () => {
  return (
    <div style={{ fontFamily: "Playfair Display" }}>
      <Header />
      <div className="py-36 dark:bg-[#1D1F25] dark:text-white pb-[21.25rem]">
        <div className="text-center">
          <h1 className="font-semibold text-5xl">Resume Craft</h1>
          <p className="text-gray-400 mt-5">
            Build the Resume That Gets You Hired!
          </p>
        </div>
        <div
          className="w-5/12 mx-auto mt-14 rounded-xl p-8 border"
          style={{ boxShadow: "0 2px 12px 0 rgba(0, 0, 0, 0.24)" }}
        >
          <img src={about} alt="about-info" className="w-12 h-12" />
          <div>
            <div className="mt-4 flex gap-6">
              <div className="w-3/4 text-justify">
                A resume builder website is a web-based tool that allows users
                to create and customize a professional resume to their desired
                specifications. These websites typically provide templates for
                creating a resume.
              </div>
              <div className="w-1/4">
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
    </div>
  );
};

export default About;
