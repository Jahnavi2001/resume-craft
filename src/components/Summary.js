import { useDispatch, useSelector } from "react-redux";
import PageNavigation from "./PageNavigation";
import { setSummary } from "../store/userSlice";

const Summary = () => {
  const dispatch = useDispatch()
  const summary = useSelector((store) => store.user.summary)

  const handleOnChangeSummary = (e) => {
    dispatch(setSummary(e.target.value))
  }

  return (
    <>
      <PageNavigation prev="/editor/skills" next="/" />
      <div
        className="px-6 py-4 rounded-md"
        style={{
          boxShadow: "0 2px 12px 0 rgba(0, 0, 0, 0.24)",
          fontFamily: "Poppins",
        }}
      >
        <h1 className="text-xl font-semibold">Summary</h1>
        <p className="text-gray-400">
          Summarize your work experience, education and skills here.
        </p>

        <div className="py-4">
          <textarea
            className="border-gray-500"
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
