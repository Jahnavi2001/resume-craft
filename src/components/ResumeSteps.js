import { useSelector } from "react-redux";
import step1 from "../assets/step-1.png";
import step2 from "../assets/step-2.png";
import step3 from "../assets/step-3.png";
import step4 from "../assets/step-4.png";
import lang from "../utils/langConstants";

const ResumeSteps = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="mt-16">
      <div className="font-semibold text-5xl text-center">
        {lang[langKey].resumeSteps.header}
      </div>
      <div style={{ fontFamily: "Muli" }}>
        {/* STEP-1 */}
        <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-32 m-8 md:m-16 items-center">
          <div className="md:w-1/2">
            <img src={step1} alt="step1" className="rounded-lg" />
          </div>
          <div className="md:w-1/2 text-justify">
            <span className="rounded-full bg-[#063970] text-white py-4 px-5">
              1
            </span>
            <h1 className="font-semibold text-2xl mt-6">
              {lang[langKey].resumeSteps.step1.title}
            </h1>
            <p className="text-xl py-2">
              {lang[langKey].resumeSteps.step1.content}
            </p>
          </div>
        </div>

        {/* STEP-2 */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-32 m-8 md:m-16 items-center">
          <div className="md:w-1/2">
            <img src={step2} alt="step2" className="w-full h-full rounded-lg" />
          </div>
          <div className="md:w-1/2 text-justify">
            <span className="rounded-full bg-[#063970] text-white py-4 px-5">
              2
            </span>
            <h1 className="font-semibold text-2xl mt-6">
              {lang[langKey].resumeSteps.step2.title}
            </h1>
            <p className="text-xl py-2">
              {lang[langKey].resumeSteps.step2.content}
            </p>
          </div>
        </div>

        {/* STEP-3 */}
        <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-32 m-8 md:m-16 items-center">
          <div className="md:w-1/2">
            <img src={step3} alt="step2" className="rounded-lg" />
          </div>
          <div className="md:w-1/2 text-justify">
            <span className="rounded-full bg-[#063970] text-white py-4 px-5">
              3
            </span>
            <h1 className="font-semibold text-2xl mt-6">
              {lang[langKey].resumeSteps.step3.title}
            </h1>
            <p className="text-xl py-2">
              {lang[langKey].resumeSteps.step3.content}
            </p>
          </div>
        </div>

        {/* STEP-4 */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-32 m-8 md:m-16 items-center">
          <div className="md:w-1/2">
            <img src={step4} alt="step2" className="rounded-lg" />
          </div>
          <div className="md:w-1/2 text-justify">
            <span className="rounded-full bg-[#063970] text-white py-4 px-5">
              4
            </span>
            <h1 className="font-semibold text-2xl mt-6">
              {lang[langKey].resumeSteps.step4.title}
            </h1>
            <p className="text-xl py-2">
              {lang[langKey].resumeSteps.step4.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSteps;
