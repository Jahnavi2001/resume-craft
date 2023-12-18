import { useDispatch, useSelector } from "react-redux";
import PageNavigation from "../PageNavigation";
import { setSummary } from "../../store/userSlice";

const Summary = () => {
  const dispatch = useDispatch();
  const summary = useSelector((store) => store.user.summary);

  const handleOnChangeSummary = (e) => {
    dispatch(setSummary(e.target.value));
  };

  return (
    <>
      <PageNavigation prev="/editor/summary-tips" next="/editor/save-resume" />
      <div
        className="px-6 py-4 rounded-md border"
        style={{
          boxShadow: "0 2px 12px 0 rgba(0, 0, 0, 0.24)",
          fontFamily: "Poppins",
          borderTop: "3px solid #de8535"
        }}
      >
        <h1 className="text-xl font-semibold">Summary</h1>
        <p className="text-gray-400">
          Summarize your work experience, education and skills here.
        </p>

        <div className="py-4">
          <textarea
            className="border-gray-500 dark:text-black"
            rows="10"
            value={summary}
            onChange={handleOnChangeSummary}
            placeholder="Dedicated [High School] Teacher with [7] years of experience..."
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default Summary;
