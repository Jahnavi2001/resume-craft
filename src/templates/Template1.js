import React from "react";
import { AiFillMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsPhoneFill, BsBroadcastPin } from "react-icons/bs";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Template1 = () => {
  const handleGeneratePDF = async () => {
    const input = document.getElementById("pdf-content"); // Replace 'pdf-content' with the ID of your HTML content container

    html2canvas(input)
    .then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "px", "a4");
      let ratio = canvas.width / canvas.height;
      let width = pdf.internal.pageSize.getWidth();
      let height = width / ratio;
      pdf.addImage(imgData, "JPEG", 0, 0, width, height);
      pdf.save("resume.pdf");
    })
  };

  return (
    <>
      <div
        id="pdf-content"
        className="border shadow-md py-4"
      >
        <div className="pt-4 px-6 pb-2 flex gap-6">
          <div className="w-[15%] h-28">
            <img
              className="w-28 h-28 rounded-full"
              src="https://static.vecteezy.com/system/resources/thumbnails/025/284/015/small_2x/close-up-growing-beautiful-forest-in-glass-ball-and-flying-butterflies-in-nature-outdoors-spring-season-concept-generative-ai-photo.jpg"
              alt="profile pic"
            />
          </div>
          <div className="w-[50%] flex flex-col gap-2">
            <div className="text-[#DE8534] text-6xl">Chris Candidate</div>
            <div className="text-xl">Human Resource Manager</div>
          </div>
          <div className="w-[35%] flex flex-col gap-2 items-end text-sm">
            <div className="flex items-center gap-2">
              example@email.com
              <AiFillMail />
            </div>
            <div className="flex items-center gap-2">
              9876543213
              <BsPhoneFill />
            </div>
            <div className="flex items-center gap-2">
              Guntur, AndhraPradesh
              <BsBroadcastPin />
            </div>
            <div className="flex items-center gap-2">
              <div className="break-all">https://github.com/Jahnavi2001</div>
              <AiFillGithub />
            </div>
            <div className="flex items-center gap-2">
              <div className="break-all">
                https://www.linkedin.com/in/jahnavi-vuyyuru-17900ks/
              </div>
              <AiFillLinkedin className="w-6 h-6" />
            </div>
          </div>
        </div>
        <div
          style={{ fontFamily: "Source Sans Pro", fontSyle: "normal" }}
          className="py-4 px-6 text-justify opacity-80 text-sm"
        >
          Human resources generalist with 8 years of experience in HR, including
          hiring and terminating, disciplining employees and helping department
          managers improve employee performance. Worked with labor unions to
          negotiate compensation packages for workers. Organized new hire
          training initiatives as well as ongoing training to adhere to
          workplace safety standards. Worked with OSHA to ensure that all safety
          regulations are followed.
        </div>
        <div className="px-4">
          <div className="text-[#DE8534] text-xl border-b-2 border-b-[#DE8534]">
            Professional Experience
          </div>
          <div className="mt-3 text-sm">
            <div className="flex gap-4 items-center">
              <div className="text-lg">Human Resources Manager</div>
              <div
                style={{ fontFamily: "Source Sans Pro", fontSyle: "normal" }}
              >
                Jim's Widget Factory, Plano, TX | January 2016 - Present
              </div>
            </div>
            <ul style={{ fontFamily: "Source Sans Pro", fontSyle: "normal" }}>
              <li className="flex gap-3">
                <div className="w-[6px] h-[6px] bg-[#DE8534] rounded-full mt-2"></div>
                <div>
                  Implement effective company policies to ensure that all
                  practices comply with labor and employment regulations
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-[6px] h-[6px] bg-[#DE8534] rounded-full mt-2"></div>
                <div>
                  Increased employee retention rates by managing workplace
                  satisfaction to an over 90% success rate by creating and
                  maintaining a positive work environment
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-[6px] h-[6px] bg-[#DE8534] rounded-full mt-2"></div>
                <div>
                  Develop targeted outreach practices to increase minority
                  recruitment and ensure compliance with affirmative action
                  policies
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-[6px] h-[6px] bg-[#DE8534] rounded-full mt-2"></div>
                <div>
                  Monitor scheduled in and out times as well as employee breaks
                  to ensure that proper employment laws are met
                </div>
              </li>
            </ul>
          </div>
          <div className="mt-3 text-sm">
            <div className="flex gap-4 items-center">
              <div className="text-lg">Human Resources Manager</div>
              <div
                style={{ fontFamily: "Source Sans Pro", fontSyle: "normal" }}
              >
                Jim's Widget Factory, Plano, TX | January 2016 - Present
              </div>
            </div>
            <ul style={{ fontFamily: "Source Sans Pro", fontSyle: "normal" }}>
              <li className="flex gap-3">
                <div className="w-[6px] h-[6px] bg-[#DE8534] rounded-full mt-2"></div>
                <div>
                  Implement effective company policies to ensure that all
                  practices comply with labor and employment regulations
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-[6px] h-[6px] bg-[#DE8534] rounded-full mt-2"></div>
                <div>
                  Increased employee retention rates by managing workplace
                  satisfaction to an over 90% success rate by creating and
                  maintaining a positive work environment
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-[6px] h-[6px] bg-[#DE8534] rounded-full mt-2"></div>
                <div>
                  Develop targeted outreach practices to increase minority
                  recruitment and ensure compliance with affirmative action
                  policies
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-[6px] h-[6px] bg-[#DE8534] rounded-full mt-2"></div>
                <div>
                  Monitor scheduled in and out times as well as employee breaks
                  to ensure that proper employment laws are met
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4">
          <div className="text-[#DE8534] text-xl border-b-2 border-b-[#DE8534]">
            Education
          </div>
          <div className="mt-3 text-sm">
            <div className="flex gap-4 items-center">
              <div className="text-lg">Masters in Human Resources</div>
              <div
                style={{ fontFamily: "Source Sans Pro", fontSyle: "normal" }}
              >
                The University of Texas, Dallas | September 2007 - May 2011
              </div>
            </div>
            <ul style={{ fontFamily: "Source Sans Pro", fontSyle: "normal" }}>
              <li className="flex gap-3">
                <div className="w-[6px] h-[6px] bg-[#DE8534] rounded-full mt-2"></div>
                <div>Academic Awardee of AY 2007-2008</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4">
          <div className="text-[#DE8534] text-xl border-b-2 border-b-[#DE8534]">
            Key Skills
          </div>
          <ul style={{ fontFamily: "Source Sans Pro", fontSyle: "normal" }}>
            <li className="flex gap-3">
              <div className="w-[6px] h-[6px] bg-[#DE8534] rounded-full mt-2"></div>
              <div>Detail oriented</div>
            </li>
            <li className="flex gap-3">
              <div className="w-[6px] h-[6px] bg-[#DE8534] rounded-full mt-2"></div>
              <div>Well-versed in Texas employment law</div>
            </li>
            <li className="flex gap-3">
              <div className="w-[6px] h-[6px] bg-[#DE8534] rounded-full mt-2"></div>
              <div>Excellent written and oral communication skills</div>
            </li>
            <li className="flex gap-3">
              <div className="w-[6px] h-[6px] bg-[#DE8534] rounded-full mt-2"></div>
              <div>Excellent written and oral communication skills</div>
            </li>
            <li className="flex gap-3">
              <div className="w-[6px] h-[6px] bg-[#DE8534] rounded-full mt-2"></div>
              <div>Excellent written and oral communication skills</div>
            </li>
          </ul>
        </div>
      </div>
      <button onClick={handleGeneratePDF}>Generate PDF</button>
    </>
  );
};

export default Template1;
