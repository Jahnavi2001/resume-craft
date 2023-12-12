import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Template2 = () => {
  const handleGeneratePDF = async () => {
    const input = document.getElementById("pdf-content2"); // Replace 'pdf-content' with the ID of your HTML content container

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "px", "a4");
      var ratio = canvas.width / canvas.height;
      var width = pdf.internal.pageSize.getWidth();
      var height = width / ratio;
      pdf.addImage(imgData, "JPEG", 0, 0, width, height);
      pdf.save("resume.pdf");
    });
  };

  return (
    <>
      <div
        id="pdf-content2"
        className="w-[52%]"
        style={{ border: "1px solid #4b6982", backgroundColor: "#f7eebb" }}
      >
        <div className="flex m-0">
          <div
            className="flex flex-col col-3 items-center pt-5"
            style={{ backgroundColor: "#583131", flexDirection: "column" }}
          >
            <div className="media me-5">
              <img
                className="rounded align-self-center  "
                src="https://static.vecteezy.com/system/resources/thumbnails/025/284/015/small_2x/close-up-growing-beautiful-forest-in-glass-ball-and-flying-butterflies-in-nature-outdoors-spring-season-concept-generative-ai-photo.jpg"
                alt="profile-pic"
                style={{
                  maxHeight: "180px",
                  minHeight: "100px",
                  width: "100px",
                  background: "grey",
                  padding: 0,
                }}
              />
            </div>
            <div className="mt-3 font-bold " style={{ fontFamily: "Serif" }}>
              <div className="" style={{ color: "white", fontSize: "30px" }}>
                Vuyyuru Jahnavi
              </div>
              <h5
                className="pt-2 "
                style={{ color: "#adccc7", fontSize: "20px" }}
              >
                Senior Manager
              </h5>
            </div>
            <div className=" ">
              <div
                className="p-5 ms-4"
                style={{ fontSize: "18px", display: "inline-block" }}
              >
                <div
                  className="px-2 mb-2 "
                  style={{ backgroundColor: "white", color: "black" }}
                >
                  Email:
                </div>
                <div style={{ color: "#f7f7f7" }}>
                  jahnavivuyyuru179@gmail.com
                </div>
                <div
                  className=" px-2 mb-2 mt-2"
                  style={{ backgroundColor: "white", color: "black" }}
                >
                  Contact:
                </div>
                <div style={{ color: "#f7f7f7" }}>98765443213</div>
                <div
                  className=" px-2 mb-2 mt-2 "
                  style={{ backgroundColor: "white", color: "black" }}
                >
                  Address:
                </div>
                <div style={{ color: "#f7f7f7" }}>Guntur, AndhraPradesh</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col px-8">
            <div>
              <div className="text-justify mt-4">
                Human resources generalist with 8 years of experience in HR,
                including hiring and terminating, disciplining employees and
                helping department managers improve employee performance. Worked
                with labor unions to negotiate compensation packages for
                workers. Organized new hire training initiatives as well as
                ongoing training to adhere to workplace safety standards. Worked
                with OSHA to ensure that all safety regulations are followed.
              </div>
              <hr style={{ height: "5px", backgroundColor: "#4b6982" }} />
            </div>
            <div className="" style={{ fontFamily: "Serif" }}>
              <div className="">
                <div
                  className="text-left bg-light mb-4 "
                  style={{ color: "#4b6982" }}
                >
                  {" "}
                  <h3>
                    <b>Professional Experience</b>{" "}
                  </h3>
                </div>
                <div className=" text-left " style={{ fontSize: "18px" }}>
                  <div>
                    <div className="mt-2">
                      <h4>Trans Global JDG</h4>
                    </div>
                    <div className="mt-2">
                      <b>Executive Head</b>
                    </div>

                    <div className="mt-2 mb-3">
                      <div>Worked in Trans Global JDG from 2015 to 2018.</div>
                      <div>
                        {" "}
                        Human resources generalist with 8 years of experience in
                        HR, including hiring and terminating, disciplining
                        employees and helping department managers improve
                        employee performance. Worked with labor unions to
                        negotiate compensation packages for workers. Organized
                        new hire training initiatives as well as ongoing
                        training to adhere to workplace safety standards. Worked
                        with OSHA to ensure that all safety regulations are
                        followed.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-100 mt-4"> </div>
                <hr style={{ height: "5px", backgroundColor: "#4b6982" }} />
                <div
                  className="bg-light text-left"
                  style={{ color: "#4b6982" }}
                >
                  <h3>
                    <b>Education</b>
                  </h3>
                </div>
                <div className=" text-left">
                  <div style={{ fontSize: "18px" }}>
                    <div>
                      <h5> Bachelor of ENgineering and Technology</h5>
                      <div>
                        {" "}
                        I have persued my Graduation{" "}
                        <b> from Similipal University of Education</b>{" "}
                      </div>
                      <p>Duration: 2001-2007</p>
                    </div>
                  </div>
                </div>
                <div className="w-100 mt-4"> </div>
                <hr style={{ height: "5px", backgroundColor: "#4b6982" }} />
                <div className="bg-light text-left ">
                  <h3 style={{ color: "#4b6982" }}>
                    <b>Key Skills</b>
                  </h3>
                </div>
                <div className=" text-left mb-4" style={{ fontSize: "18px" }}>
                  <div>
                    <li>Web development</li>
                    <li>Javascript</li>
                    <li>VueJS</li>
                    <li>ReactJS</li>
                    <li>Adaptive & Flexible</li>
                    <li>Interpersonal and communication</li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={handleGeneratePDF}>Generate PDF2</button>
    </>
  );
};

export default Template2;
