import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import { useNavigate } from "react-router-dom";

const PageNavigation = ({ prev, next, onNextClick }) => {
  const navigate = useNavigate();

  const handlePrevNavigatePage = (path) => {
    navigate(path);
  };

  const handleNextNavigatePage = (path) => {
    if (onNextClick) {
      onNextClick();
    } else {
      navigate(path);
    }
  };

  return (
    <div className="flex pb-3 justify-end gap-4">
      {prev !== "/" && (
        <button
          className="text-[#2a64ad] py-1 px-2 rounded-full flex flex-col font-light gap-0.5 text-xs"
          style={{ boxShadow: "0px 0px 15px rgba(0,0,0,.15)" }}
          onClick={() => handlePrevNavigatePage(prev)}
        >
          <div className="-mt-1">
            <KeyboardBackspaceOutlinedIcon />
          </div>
          <div className="-mt-2"> Back</div>
        </button>
      )}
      {next !== "/" && (
        <button
          className="bg-[#fe4a5a] px-3 py-2 text-white rounded-full font-light flex justify-center items-center gap-1"
          onClick={() => handleNextNavigatePage(next)}
        >
          Next
          <ArrowRightAltOutlinedIcon />
        </button>
      )}
    </div>
  );
};

export default PageNavigation;
