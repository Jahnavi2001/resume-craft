import Header from "./Header/Header";
import Template2 from "../templates/Template2";
import Template1 from "../templates/Template1";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Editor = () => {
  const selectedTemplateName = useSelector(
    (store) => store.user.selectedTemplateName
  );

  return (
    <div>
      <Header />
      <div className="flex py-36 px-8 gap-4 dark:bg-[#1D1F25] dark:text-white">
        <div className="w-1/2">
          <Outlet />
        </div>
        <div className="w-1/2">
          {selectedTemplateName === "Template1" ? <Template1 /> : <Template2 />}
        </div>
      </div>
    </div>
  );
};
export default Editor;
