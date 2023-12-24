import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import { useNavigate } from "react-router-dom";
import lang from "../utils/langConstants";
import { useSelector } from "react-redux";

const PageNavigation = ({ prev, next, onNextClick }) => {
  const navigate = useNavigate();
  const langKey = useSelector((store) => store.config.lang)

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
          className="text-[#2a64ad] py-1 px-2 rounded-full flex flex-col font-light gap-0.5 text-xs dark:border dark:border-slate-400"
          style={{ boxShadow: "0px 0px 15px rgba(0,0,0,.15)" }}
          onClick={() => handlePrevNavigatePage(prev)}
        >
          <div className="-mt-1">
            <KeyboardBackspaceOutlinedIcon />
          </div>
          <div className="-mt-2">
            {lang[langKey].pageNavigation.back}
          </div>
        </button>
      )}
      {next !== "/" && (
        <button
          className="bg-[#fe4a5a] px-3 py-2 text-white rounded-full font-light flex justify-center items-center gap-1"
          onClick={() => handleNextNavigatePage(next)}
        >
          {lang[langKey].pageNavigation.next}
          <ArrowRightAltOutlinedIcon />
        </button>
      )}
    </div>
  );
};

export default PageNavigation;
