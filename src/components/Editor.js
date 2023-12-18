import Header from "./Header/Header";
import Template2 from "../templates/Template2";
import Template1 from "../templates/Template1";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

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
    <div>
      <Header />
      {selectedTemplateDetails && (
        <div className="flex py-36 px-8 gap-4 dark:bg-[#1D1F25] dark:text-white min-h-screen">
          <div className="w-1/2">
            <Outlet />
          </div>
          <div className="w-1/2">
            {selectedTemplateDetails.name === "Template1" ? (
              <Template1 />
            ) : (
              <Template2 />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default Editor;
