import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import PageNavigation from "../PageNavigation";
import { FaEllipsisV } from "react-icons/fa";
import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWorkHistory } from "../../store/userSlice";

const WorkHistory = () => {
  const [showWorkDataIndex, setShowWorkDataIndex] = useState(0);
  const dispatch = useDispatch();
  const workData = useSelector((store) => store.user.workHistory);

  const formik = useFormik({
    initialValues: {
      workData: workData,
    },
  });

  useEffect(() => {
    dispatch(setWorkHistory(formik.values.workData));
  }, [formik.values]);

  const handleAddWorkHistory = () => {
    const newWorkData = [
      ...formik.values.workData,
      {
        id: uuidv4(),
        positionTitle: "",
        companyName: "",
        startDate: "",
        endDate: "",
        summary: "",
      },
    ];
    formik.setFieldValue("workData", newWorkData);
  };

  const handleDeleteWorkHistory = (id) => {
    if (formik.values.workData.length <= 1) return;

    const newWorkData = formik.values.workData.filter((item) => item.id !== id);
    formik.setFieldValue("workData", newWorkData);
  };

  const handleShowWorkHistory = (index) => {
    index !== showWorkDataIndex
      ? setShowWorkDataIndex(index)
      : setShowWorkDataIndex(-1);
  };

  return (
    <>
      <PageNavigation
        prev="/editor/work-history-tips"
        next="/editor/education-tips"
      />
      <div
        className="px-6 py-4 rounded-md"
        style={{
          boxShadow: "0 2px 12px 0 rgba(0, 0, 0, 0.24)",
          fontFamily: "Poppins",
        }}
      >
        <h1 className="text-xl font-semibold">Professional Experience</h1>
        <p className="text-gray-400">Tell us about your most recent job.</p>

        {formik.values.workData.map((item, index) => (
          <div className="border rounded-md my-4" key={item.id}>
            <div className="flex items-center justify-between p-3">
              <span className="text-gray-400">
                <FaEllipsisV />
              </span>
              <span className="flex gap-6">
                <span
                  className="cursor-pointer text-red-400"
                  onClick={() => handleShowWorkHistory(index)}
                >
                  {showWorkDataIndex === index ? (
                    <KeyboardArrowUpOutlinedIcon />
                  ) : (
                    <KeyboardArrowDownOutlinedIcon />
                  )}
                </span>
                <span
                  className="cursor-pointer text-red-400"
                  onClick={() => handleDeleteWorkHistory(item.id)}
                >
                  <DeleteOutlineOutlinedIcon />
                </span>
              </span>
            </div>

            {showWorkDataIndex === index && (
              <div>
                <div className="flex gap-6 p-3">
                  <div className="w-1/2">
                    <label>Position Title</label>
                    <input
                      type="text"
                      id={`workData[${index}].positionTitle`}
                      value={formik.values.workData[index].positionTitle}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className="w-1/2 ">
                    <label>Company Name</label>
                    <input
                      type="text"
                      id={`workData[${index}].companyName`}
                      value={formik.values.workData[index].companyName}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>

                <div className="flex gap-6 p-3">
                  <div className="w-1/2">
                    <label>Start Date</label>
                    <input
                      type="date"
                      id={`workData[${index}].startDate`}
                      onChange={formik.handleChange}
                      value={formik.values.workData[index].startDate}
                    />
                  </div>
                  <div className="w-1/2">
                    <label>End Date</label>
                    <input
                      type="date"
                      id={`workData[${index}].endDate`}
                      onChange={formik.handleChange}
                      value={formik.values.workData[index].endDate}
                    />
                  </div>
                </div>

                <div className="flex flex-col p-3">
                  <label>Work Summary</label>
                  <textarea
                    id={`workData[${index}].summary`}
                    onChange={formik.handleChange}
                    value={formik.values.workData[index].summary}
                    rows="5"
                    placeholder="Ex- Supported mentor teacher throughout lessons by preparing..."
                  ></textarea>
                </div>
              </div>
            )}
          </div>
        ))}

        <button
          className="flex items-center text-red-400"
          onClick={handleAddWorkHistory}
        >
          <AddOutlinedIcon />
          Add more work experience
        </button>
      </div>
    </>
  );
};

export default WorkHistory;
