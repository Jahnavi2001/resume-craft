import step1 from "../assets/step-1.png";
import step2 from "../assets/step-2.png";
import step3 from "../assets/step-3.png";
import step4 from "../assets/step-4.png";

const ResumeSteps = () => {
  return (
    <div className="mt-16">
      <div className="font-semibold text-5xl text-center">
        A Quick and Easy Way To Create Your Professional Resume
      </div>
      <div style={{ fontFamily: "Muli" }}>
        {/* STEP-1 */}
        <div className="md:flex flex-row-reverse gap-32 m-8 md:m-16 items-center">
          <div className="md:w-1/2">
            <img src={step1} alt="step1" className="rounded-lg"/>
          </div>
          <div className="md:w-1/2 text-justify">
            <span className="rounded-full bg-[#063970] text-white py-4 px-5">
              1
            </span>
            <h1 className="font-semibold text-2xl mt-6">
              Pick the perfect template today
            </h1>
            <p className="text-xl py-2">
              Your resume is your chance to make a great first impression, and
              having a well-designed, visually appealing template is essential
              to standing out from the crowd. With our resume builder, with just
              a few clicks, you can choose the perfect template to make your
              resume shine.
            </p>
          </div>
        </div>

        {/* STEP-2 */}
        <div className="md:flex gap-32 m-8 md:m-16 items-center">
          <div className="md:w-1/2">
            <img src={step2} alt="step2" className="w-full h-full rounded-lg" />
          </div>
          <div className="md:w-1/2 text-justify">
            <span className="rounded-full bg-[#063970] text-white py-4 px-5">
              2
            </span>
            <h1 className="font-semibold text-2xl mt-6">
              Personalize you Template
            </h1>
            <p className="text-xl py-2">
              Every job seeker is unique, and your resume should reflect your
              individual skills, experience, and personality. With our resume
              builder, you can easily personalize your design to create a resume
              that truly stands out. Our user-friendly interface makes it easy
              to customize your design.
            </p>
          </div>
        </div>

        {/* STEP-3 */}
        <div className="md:flex flex-row-reverse gap-32 m-8 md:m-16 items-center">
          <div className="md:w-1/2">
            <img src={step3} alt="step2" className="rounded-lg"/>
          </div>
          <div className="md:w-1/2 text-justify">
            <span className="rounded-full bg-[#063970] text-white py-4 px-5">
              3
            </span>
            <h1 className="font-semibold text-2xl mt-6">
              Enter your information with personal touch
            </h1>
            <p className="text-xl py-2">
              Entering your information is a crucial step in building a great
              resume, but it doesn't have to be a tedious or time-consuming
              process. Our platform guides you through the process step-by-step,
              prompting you to enter your education, work experience, skills,
              and other relevant details. You can also save your progress and
              return to the form at any time to finish entering your
              information.
            </p>
          </div>
        </div>

        {/* STEP-4 */}
        <div className="md:flex gap-32 m-8 md:m-16 items-center">
          <div className="md:w-1/2">
            <img src={step4} alt="step2" className="rounded-lg"/>
          </div>
          <div className="md:w-1/2 text-justify">
            <span className="rounded-full bg-[#063970] text-white py-4 px-5">
              4
            </span>
            <h1 className="font-semibold text-2xl mt-6">
              Hit the Download Button!
            </h1>
            <p className="text-xl py-2">
              After you've completed your resume, it's time to download it and
              share it with potential employers. With our resume builder,
              downloading your resume is a quick and easy process. Simply click
              the 'Download' button and your resume will be saved in the format
              you chose. Our platform also allows you to save multiple versions
              of your resume, so you can tailor your application to specific job
              opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSteps;
