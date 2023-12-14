import { Outlet } from "react-router-dom";
import Header from "./Header";
import Template1 from "../templates/Template1";

const Editor = () => {
  return (
    <div>
      <Header />
      <div className="flex my-36 px-8 gap-4">
        <div
          className="w-1/2 h-max rounded-md"
          style={{
            boxShadow: "0 2px 12px 0 rgba(0, 0, 0, 0.24)",
            fontFamily: "Poppins",
          }}
        >
          <Outlet />
        </div>
        <div className="w-1/2">
          <Template1 />
        </div>
      </div>
    </div>
  );
};
export default Editor;
